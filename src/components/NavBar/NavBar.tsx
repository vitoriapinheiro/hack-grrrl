import React from 'react';

import { Button, IconButton } from '@material-ui/core';
import NavBarImg from '../../assets/NavLogo.png';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';
import { Container, Logo, MiddleBox } from './styles';
import { Text } from '../../global/components';

export default function NavBar() {

  return (
    <>
      <Container>
        <Logo src={NavBarImg}>
        </Logo>
        <MiddleBox>
          <Text>Feed</Text>
          <Text>Perfil</Text>
        </MiddleBox>
        <Button>
          <Text>Sair</Text>
          <KeyboardTabIcon/>
        </Button>
      </Container>
    </>
  );
}
