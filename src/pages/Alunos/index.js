import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

import Loading from '../../components/Loading';

export default function Alunos() {
  const isLoggedIn = useSelector((state) => (state.auth.isLoggedIn));

  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const handleDelete = async (e, alunoId) => {
    e.preventDefault();

    console.log(e);

    console.log(isLoggedIn);

    try {
      if (isLoggedIn) {
        const response = await axios.delete(`/alunos/${alunoId}`);
        const index = alunos.indexOf(response);
        setAlunos.splice(0, index);
        toast.success('Aluno excluído com sucesso!');
      } else {
        toast.error('Faça login para excluir aluno');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}><FaEdit size={16} /></Link>
            {isLoggedIn ? <Link to={`/aluno/${aluno.id}/delete`} onClick={(e) => handleDelete(e, aluno.id)}><FaWindowClose size={16} /></Link>
              : <Link to="/login" onClick={(e) => handleDelete(e)}><FaWindowClose size={16} /></Link> }
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
