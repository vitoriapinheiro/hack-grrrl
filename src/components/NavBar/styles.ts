import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 65px;
  width: 100%;
  border-bottom: 4px solid ${({ theme }) => theme.main.colors.purple};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;

`;

export const Logo = styled.img`
  display: flex;
  height: 40px;
`;

export const MiddleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const StyledLink = styled(Link)`
  text-decoration:none;
`;