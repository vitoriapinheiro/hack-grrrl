import styled from 'styled-components';

interface Props {
    url?: string,
}

export const Container = styled.div`
  width: 90%;
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
`;

export const PhotoContainer = styled.div`
  margin-right: 10px;
  border-radius: 50%;
`;

export const Photo = styled.img`
  border-radius: 100%;
  width: 100px;
  object-fit: contain;
  display: flex;
`;

export const TextContainer = styled.div``;

export const name = styled.text``;

export const TitleContainer = styled.div`
  flex-direction: row;
`;

export const AvaliationContainer = styled.div`
  margin-left: 200px;
  width: 150px;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
`;