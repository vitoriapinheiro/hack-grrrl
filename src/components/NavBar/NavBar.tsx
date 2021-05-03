import React from 'react';

import { Button } from '@material-ui/core';
import NavBarImg from '../../assets/NavLogo.png';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';
import { Container, Logo, MiddleBox, Text2 } from './styles';
import { Text } from '../../global/components';
import {StyledLink} from '..';
import { Redirect } from 'react-router-dom';
import { useInfo } from '../../hook/LoggedProvider';

export default function NavBar() {
  const {setUserId, userId}  = useInfo()[0];

  return (
    <>
      <Container>
        <Logo src={NavBarImg}>
        </Logo>
        <MiddleBox>
          <StyledLink to="/feed">
            <Text2>Feed</Text2>
          </StyledLink>
          <StyledLink to="/perfil">
            <Text2>Perfil</Text2>
          </StyledLink>
        </MiddleBox>
        <Button>
          <Text onClick={()=> setUserId(false)}>Sair</Text>
          <KeyboardTabIcon/>
        </Button>
      </Container>
      {userId?<></>: <Redirect to='/'></Redirect>}

    </>
  );
}
