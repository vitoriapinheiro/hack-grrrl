import React from 'react';

import { Container, TextContainer, IconContainer } from './styles';
import { Text, H1 } from '../../global/components';
import { ThumbUp, ThumbDown} from '../Icons/Icons';

export default function VisualizationCard({title, text, positive}:{title: string, text: string, positive: boolean}) {
  return (
    <>
      <Container>
        <TextContainer>
          <H1 textSize= '14px'>{title}</H1>
          <Text textSize= '12px'>{text}</Text>
        </TextContainer>
        <IconContainer>
          {positive ? (<ThumbUp />) : (<ThumbDown/> )}
        </IconContainer>
      </Container>
    </>
  );
}
