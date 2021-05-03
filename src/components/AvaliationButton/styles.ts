import styled from 'styled-components';

export const Container = styled.div`
  width: 240px;
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 15px;
  border: 1px solid #828282;
  &:hover{
        background-color: ${({ theme }) => theme.main.colors.green};
        transition: background-color 0.1s ease-in;
    }
`;

export const IconContainer = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
`;
