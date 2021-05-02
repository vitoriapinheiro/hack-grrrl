import React from 'react';

import { Button, IconButton } from '@material-ui/core';

import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';
import { Container, Logo, MiddleBox } from './styles';
import { Text } from '../../global/components';

export default function NavBar() {

  return (
    <>
      <Container>
        <Logo>
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
