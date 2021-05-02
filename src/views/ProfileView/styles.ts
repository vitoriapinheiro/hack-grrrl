import styled from 'styled-components';

export const MiddleBox = styled.div`
    width: 20%;
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    align-items:center;
`;

export const Categories = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Tag = styled.div`
    padding: 0 5px;
    background-color: pink;
    border-radius: 8px;
    margin-bottom: 3px;
    margin-right: 3px;
`;

export const ProfilePicture = styled.img`
    border-radius: 100%;
    width: 150px;
    height: 150px;
`;

export const OuterBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;