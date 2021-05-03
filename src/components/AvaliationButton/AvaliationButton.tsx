import React from 'react';

import { Button } from '@material-ui/core';

import { 
  Container,
  IconContainer
} from './styles';

import { Text } from '../../global/components';
import { ThumbUp, ThumbDown} from '../Icons/Icons';

export default function AvaliationButton({positive}: {positive: boolean}) {
  return (
    <>
      <Container>
        <IconContainer>
        {positive ? (<ThumbUp />) : (<ThumbDown/> )}
        </IconContainer>
        {positive ?
        ( 
        <Text textSize = '16px'>Avaliar Positivamente</Text>)
        : (
        <Text textSize = '16px'>Avaliar Negativamente</Text>)}
      </Container>
    </>
  );
}
