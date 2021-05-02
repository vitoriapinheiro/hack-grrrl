import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export const Box = styled.form`
    width: 419px;
    height: 381px;
    box-shadow: 1px 2px 20px -4px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border-top: 20px solid ${({ theme }) => theme.main.colors.purple};
    padding: 20px 40px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items:center;
`;

export const BackgroundImage = styled.div`

`;


export const ButtonsBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;


export const Login = styled(Button)`
    background-color: ${({ theme }) => theme.main.colors.purple};
    font-family: 'Lato', sans-serif;
    color: white;
    text-transform: none;
`;
export const Register = styled(Button)`
    background-color: white;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.main.colors.purple};
    text-transform: none;


`;

export const TextFieldCustom = styled(TextField)`
  /* & .MuiInputBase-root {
    height: 45px;
  }
  & .MuiFormLabel-root.Mui-focused{
    color:${({ theme }) => theme.main.colors.darkBlue};
  } */
  & .MuiFilledInput-underline:after, .MuiInput-underline:after{
    border-color: ${({ theme }) => theme.main.colors.purple};
  }
  /* & .MuiFormLabel-root {
    margin-top: -3px;
    font-size: 14px
  } */
`;