import styled from 'styled-components';

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
`;