import React from 'react';
import "firebase/firestore";
import firebase from 'firebase/app';
import { Text, H1 } from '../../global/components';
import { 
  AvaliationButton,
  Comments,
  CommentsHead,
  ImagesItens,
  NavBar
 } from '../../components';
import { Login } from '../LoginView/styles';

import {
  AvaliationButtonContainer,
  BackgroundImage,
  CommentsHeadContainer,
  ImagesContainer,
  CommentsContainer,
  TextAreaCustom,
  TextArea,
  ButtonBox
} from './styles';

function LoginView() {
  return (
    <>
      <NavBar/>
      <BackgroundImage>
        <CommentsHeadContainer>
          <CommentsHead 
            likes={2} 
            dislikes={2} 
            img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYbM174xWDaTnMb40TN_IbfKPqD4bY7TN4Q&usqp=CAU'}
            logo={'https://logodownload.org/wp-content/uploads/2014/05/natura-logo-1-1.png'}
            topPost={true}
            />
        </CommentsHeadContainer>
        <ImagesContainer>
          <ImagesItens photo='https://i.pinimg.com/originals/f0/e7/c8/f0e7c8e928576a873838e3c884436615.jpg' />
          <ImagesItens photo='https://i.ytimg.com/vi/imP4nRgbq_I/maxresdefault.jpg' />
          <ImagesItens photo='https://i.pinimg.com/originals/f0/e7/c8/f0e7c8e928576a873838e3c884436615.jpg' />
          <ImagesItens photo='https://i.ytimg.com/vi/imP4nRgbq_I/maxresdefault.jpg' />
          <ImagesItens photo='https://i.pinimg.com/originals/f0/e7/c8/f0e7c8e928576a873838e3c884436615.jpg' />
        </ImagesContainer>
        <CommentsContainer>
          <H1 textSize = '16px' height=''>Comentários</H1>
          <Comments 
            positive={true}
            photo={'https://www.dicasdemulher.com.br/wp-content/uploads/2016/08/segredos-de-toda-mulher-elegante.jpg'}
            name={'Juliana Rodrigues'}
            time={'Hoje as 19:30'}
            userComment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus enim, porttitor nec tempor ac, bibendum sed mi. Sed at sollicitudin arcu, vitae rhoncus mauris. Praesent id neque in sapien blandit convallis in malesuada lectus. Aliquam quis elit massa. Sed accumsan commodo ipsum, eu tincidunt purus hendrerit in. Aenean eu convallis dolor. Sed semper leo justo, a malesuada leo aliquam luctus. '}
          />
          <Comments 
            positive={false}
            photo={'https://www.dicasdemulher.com.br/wp-content/uploads/2016/08/segredos-de-toda-mulher-elegante.jpg'}
            name={'Jessica Prado'}
            time={'Hoje as 19:30'}
            userComment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus enim, porttitor nec tempor ac, bibendum sed mi. Sed at sollicitudin arcu, vitae rhoncus mauris. Praesent id neque in sapien blandit convallis in malesuada lectus. Aliquam quis elit massa. Sed accumsan commodo ipsum, eu tincidunt purus hendrerit in. Aenean eu convallis dolor. Sed semper leo justo, a malesuada leo aliquam luctus. '}
          />
          <Comments 
            positive={true}
            photo={'https://www.dicasdemulher.com.br/wp-content/uploads/2016/08/segredos-de-toda-mulher-elegante.jpg'}
            name={'Priscila Albuquerque'}
            time={'Hoje as 19:30'}
            userComment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus enim, porttitor nec tempor ac, bibendum sed mi. Sed at sollicitudin arcu, vitae rhoncus mauris. Praesent id neque in sapien blandit convallis in malesuada lectus. Aliquam quis elit massa. Sed accumsan commodo ipsum, eu tincidunt purus hendrerit in. Aenean eu convallis dolor. Sed semper leo justo, a malesuada leo aliquam luctus. '}
          />
        </CommentsContainer>
        <AvaliationButtonContainer>
          <AvaliationButton positive={true}/>
          <AvaliationButton positive={false}/>
        </AvaliationButtonContainer>
        <TextArea>
           <TextAreaCustom id="filled-basic" placeholder="Mensagem" variant="outlined" fullWidth multiline rows={9} InputProps={{ disableUnderline: true }} />
        </TextArea>
        <ButtonBox>
          <Login>Enviar Avaliação</Login>
        </ButtonBox>

      </BackgroundImage>

    </>
  );
}

export default LoginView ;
