import React from 'react';

import { Container , Image, Title, LikesBox, CommentBox, Icons, MiddleBox, Logo, Tag, BoxImage, FirstLineContainer} from './styles';
import { Text, H1 } from '../../global/components';
import { ThumbUp, ThumbDown, Attention, Comment, Star } from '../Icons/Icons';

export default function Cards({likes, dislikes, img, logo, topPost, desc, title}: {likes: number, dislikes:number, img:string, logo:string, topPost:Boolean, desc:string, title:string}) {
  return (
    <>
      <Container>
        <BoxImage>
          <Image src={img}></Image>
        </BoxImage>
        <MiddleBox>
        <FirstLineContainer>
          <Title>
            <H1 textSize = '30px' height=''>{title}</H1>
          </Title>
          {topPost ? 
          <Tag><Star/></Tag> :
          <></>}
          </FirstLineContainer>
          <Text>{desc}</Text>
          <Icons>
            <LikesBox>
              <Text textColor='#828282'>{likes}</Text>
              <ThumbUp/>
            </LikesBox>
            <LikesBox>
              <Text textColor='#828282'>{dislikes}</Text>
              <ThumbDown/>
            </LikesBox>
            <CommentBox>
              <Comment/>
              <Text textSize = '13px' textColor= '#828282' margin='0px 0px 0 5px'>Comentar</Text>
            </CommentBox>
            <Attention/>
          </Icons>
        </MiddleBox>
        <Logo src={logo}></Logo>
      </Container>
    </>
  );
}
