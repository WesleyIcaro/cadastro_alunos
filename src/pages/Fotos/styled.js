import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 11.25rem;
    height: 11.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    border: 0.3rem dashed ${colors.primaryColor};
    margin: 1.9rem auto;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
  }

  img {
    width: 11.25rem;
    height: 11.25rem;
  }

  input {
    display: none;
  }
`;
