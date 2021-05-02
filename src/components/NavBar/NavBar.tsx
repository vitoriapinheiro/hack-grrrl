/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-expressions */
import React from 'react';

// import { ReactComponent as Logo } from '../../assets/horizontal-logo.svg';
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
          <Text>Sair da ADA</Text>
          <KeyboardTabIcon/>
        </Button>
      </Container>
    </>
  );
}
