import React from 'react';

import { Button } from '@material-ui/core';

import { Container , Image, Title, LikesBox, CommentBox, Icons, MiddleBox, Logo, Tag, BoxImage} from './styles';
import { Text, H1 } from '../../global/components';
import { ThumbUp, ThumbDown, Attention, Comment, Star } from '../Icons/Icons';

export default function CommentsHead({likes, dislikes, img, logo, topPost}: {likes: number, dislikes:number, img:string, logo:string, topPost:Boolean}) {
  return (
    <>
      <Container>
        <MiddleBox>
          <Title>
            <H1 textSize = '48px' height=''>Fortes até o fim</H1>
          </Title>
          <Text>A #CasadePerfumariadoBrasil tem fragrâncias poderosas, ousadas, intensas e fortes até o fim. Descubra qual combina mais com você.</Text>
          <Icons>
            <LikesBox>
              <Text textColor='#828282'>{likes}</Text>
              <ThumbUp/>
            </LikesBox>
            <LikesBox>
              <Text textColor='#828282'>{likes}</Text>
              <ThumbDown/>
            </LikesBox>
            <CommentBox>
              <Comment/>
              <Text textSize = '18px' textColor= '#828282' margin='0px 0px 0 5px'>Comentar</Text>
            </CommentBox>
            <CommentBox>
            <Attention/>
            <Text textSize = '18px' textColor= '#828282' margin='0px 0px 0 5px'>Denunciar </Text>
            </CommentBox>
          </Icons>
        </MiddleBox>
        <Logo src={logo}></Logo>
      </Container>
    </>
  );
}
