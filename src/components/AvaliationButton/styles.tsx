import styled from 'styled-components';

interface Props {
  positive?: boolean,
};

export const Container = styled.div<Props>`
  width: 240px;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 15px;
  border: 1px solid #828282;
  &:hover{
        background-color:${props => props.positive ? ({ theme }) => theme.main.colors.green: ({ theme }) => theme.main.colors.red};
        transition: background-color 0.1s ease-in;
    }
`;

export const IconContainer = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
`;
