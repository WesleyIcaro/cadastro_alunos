import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 1.85rem;
  display: flex;
  flex-direction: column;

  input {
    height: 2.5rem;
    margin-bottom: 1.25rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 0.6rem;
  }
`;

export const ProfilePicture = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0  0 20px;
position: relative;
margin-top: 1.25rem;

img {
  width: 11.25rem;
  height: 11.25rem;
  border-radius: 50%;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: absolute;
  bottom: 0;
  color: #fff;
  background-color: ${colors.primaryColor};
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
}
`;

export const Title = styled.h1`
text-align: center;
`;
