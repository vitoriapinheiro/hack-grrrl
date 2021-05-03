import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  box-shadow: 1px 2px 20px -4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  align-items: center;
  margin-bottom: 30px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

export const IconContainer = styled.div`
  padding-right: 30px;
  padding-left: 10px;
`;