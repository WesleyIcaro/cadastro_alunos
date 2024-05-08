import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const dispatch = useDispatch();
  const id = useSelector((state) => (state.auth.user.id));
  const nomeStored = useSelector((state) => (state.auth.user.nome));
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter 3 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve ter 6 e 50 caracteres');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({
      nome, email, password, id,
    }));
  }

  async function handleDelete(e) {
    e.preventDefault();

    try {
      // isLoading(true);
      await axios.delete('/users');
      toast.success('Sua conta foi deletada com sucesso');
      history.push('/login');
      dispatch(actions.loginFailure());
      // isLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.success('Erro desconhecido');
      }

      if (status === 401) dispatch(actions.loginFailure());
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{id ? 'Editar dados' : 'Crie a sua conta'}</h1>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="nome">
          Nome:
          <input type="text" value={nome} placeholder="Seu nome" onChange={(e) => setNome(e.target.value)} />
        </label>

        <label htmlFor="email">
          email:
          <input type="email" value={email} placeholder="Seu email" onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label htmlFor="senha">
          senha:
          <input type="password" autoComplete="false" value={password} placeholder="Sua senha" onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button type="submit">{id ? 'Salvar' : 'Criar conta'}</button>

        {id ? <button type="button" onClick={handleDelete}>Deletar minha conta</button> : ''}
      </Form>

    </Container>
  );
}
