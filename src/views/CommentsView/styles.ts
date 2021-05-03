import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:${({ theme }) => theme.main.colors.grayLight};
`;

export const CommentsHeadContainer = styled.div`
    margin-top: 70px;
    margin-bottom: 50px;
    width: 90%;
`;

export const ImagesContainer = styled.div`
    margin-bottom: 30px;
    width: 90%;
    display: flex;
    flex-direction: row;
`;

export const CommentsContainer = styled.div`
    width: 90%;
`;

export const AvaliationButtonContainer = styled.div`
    display: flex;
    align-items: flex-start;
    width: 80%;
`;

export const TextAreaCustom = styled(TextField)`
  overflow:auto;
  margin-left:15%;
  & .MuiInputBase-root {
    height: 190px;
    width: 80%;
    background-color: white;
  }
`;

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonBox = styled.div`
    margin-left: 50%;
    margin-top: 20px;
    margin-bottom: 80px;
`;