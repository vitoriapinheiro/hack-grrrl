import React from 'react';

import { Button } from '@material-ui/core';

import { 
  AvaliationContainer,
  Container,
  Photo, 
  PhotoContainer, 
  TextContainer, 
  TitleContainer,
  IconContainer
} from './styles';

import { Text, H1 } from '../../global/components';
import { ThumbUp, ThumbDown} from '../Icons/Icons';

export default function Comments({positive, photo, name, time, userComment}: {positive: boolean, photo:string, name:string, time:string, userComment:string}) {
  return (
    <>
      <Container>
          <PhotoContainer>
            <Photo src={photo} />
          </PhotoContainer>
          <TextContainer>
            <TitleContainer>
              <H1 textSize = '16px' height=''>{name}</H1>
              <H1 textSize = '14px' textColor='#828282' height=''>{time}</H1>
            </TitleContainer>
            <Text>{userComment}</Text>
          </TextContainer>
          <AvaliationContainer>
            <IconContainer>
              {positive ? (<ThumbUp />) : (<ThumbDown/> )}
             </IconContainer>
             {positive ?
             ( 
             <Text textSize = '14px'>Avaliação Positiva</Text>)
             : (
             <Text textSize = '14px'>Avaliação Negativa</Text>)}
          </AvaliationContainer>
      </Container>
    </>
  );
}
