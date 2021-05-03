import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export const Box = styled.form`
    width: 596px;
    height: 433px;
    box-shadow: 1px 2px 20px -4px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border-top: 20px solid ${({ theme }) => theme.main.colors.purple};
    padding: 20px 35px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items:center;
    background-color: white;
    z-index: 1;
`;

export const Wave = styled.img`
    position: absolute;
    left:0;
    bottom: 0;
    z-index: 0;
`;

export const BackgroundImage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:${({ theme }) => theme.main.colors.grayLight};
`;


export const ButtonsBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: 100px;
    margin-bottom: 50px;
    object-fit: cover;
    background-size: cover;    

`;

export const Login = styled(Button)`
    background-color: ${({ theme }) => theme.main.colors.purple};
    font-family: 'Lato', sans-serif;
    color: white;
    text-transform: none;
    &:hover{
        background-color: ${({ theme }) => theme.main.colors.purpleLight}
    }
`;

export const Register = styled(Button)`
    background-color: white;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.main.colors.purple};
    text-transform: none;


`;

export const BoxText = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between
`;

export const TextFieldCustom = styled(TextField)`
  & .MuiInputBase-root {
    height: 45px;
    width: 250px;
  }
  /* & .MuiFormLabel-root.Mui-focused{
    color:${({ theme }) => theme.main.colors.darkBlue};
  } */
  & .MuiFilledInput-underline:after, .MuiInput-underline:after{
    border-color: ${({ theme }) => theme.main.colors.purple};
  }
  & .MuiInputBase-root .MuiInputBase-input {
        padding: 0;
  }
  & .MuiInputBase-root .MuiInputAdornment-root {
    margin-top: 0;
  }

`;