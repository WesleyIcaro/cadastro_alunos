import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
display: flex;
flex-direction: column;
margin-top: 1rem;

label {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

input {
  height: 2rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  padding: 0 0.6rem;
  margin-top: 0.25rem;

  &:focus {
    border: 1px solid ${colors.primaryColor};
  }
}

button + button {
    margin-top: 1rem;
  }
`;
