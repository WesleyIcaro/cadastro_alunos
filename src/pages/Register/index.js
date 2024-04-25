import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deve ter 6 e 50 caracteres');
    }

    if (formErrors) return;

    try {
      await axios.post('/users/', {
        nome, password, email,
      });

      toast.success('Você fez seu cadastro');
      history.push('/login');
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);

      errors.map((err) => toast.error(err));
    }
  }

  return (
    <Container>
      <h1>Crie a sua conta</h1>

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

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
