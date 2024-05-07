import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlunoContainer = styled.div`
margin-top: 1rem;

div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0;
}

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
`;

export const NovoAluno = styled(Link)`
display: block;
padding: 1.25rem 0rem 0.6rem 0rem;
`;
