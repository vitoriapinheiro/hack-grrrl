import styled from 'styled-components';

export const BackgroundImage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:${({ theme }) => theme.main.colors.grayLight};
`;
