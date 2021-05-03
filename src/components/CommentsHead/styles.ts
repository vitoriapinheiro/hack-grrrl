import styled from 'styled-components';

interface Props {
    url?: string,
}

export const Container = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  justify-content: space-between;
`;

export const MiddleBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 2%;
`;

export const Icons = styled.div`
  height: 10%;
  overflow: hidden;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LikesBox = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
`;


export const CommentBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Logo = styled.img`
  width: 30%;
  padding: 3%;
  object-fit: contain;
`;

export const Tag = styled.div`
    background-color: ${({ theme }) => theme.main.colors.white};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 5%;
    width:20%;
    border-radius: 10px 0px 0px 0px;

`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BoxImage = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

