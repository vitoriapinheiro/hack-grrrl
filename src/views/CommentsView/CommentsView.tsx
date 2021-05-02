import React from 'react';
import "firebase/firestore";
import firebase from 'firebase/app';
import { Comments } from '../../components';

import {
  BackgroundImage,
} from './styles';

function LoginView() {
  return (
    <>
      <BackgroundImage>
      <Comments 
        likes={2} 
        dislikes={2} 
        img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYbM174xWDaTnMb40TN_IbfKPqD4bY7TN4Q&usqp=CAU'}
        logo={'https://marcas-logos.net/wp-content/uploads/2019/11/Simbolo-Star-Wars.jpg'}
        topPost={true}
        />
      </BackgroundImage>
     
    </>
  );
}

export default LoginView ;


