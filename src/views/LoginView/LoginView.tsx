import React from 'react';
import { Card } from '../../components';

import {
  Box,
} from './styles';

function LoginView() {
  return (
    <>
      <Card 
        likes={2} 
        dislikes={2} 
        img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYbM174xWDaTnMb40TN_IbfKPqD4bY7TN4Q&usqp=CAU'}
        logo={'https://marcas-logos.net/wp-content/uploads/2019/11/Simbolo-Star-Wars.jpg'}
        topPost={true}
        />
    </>
  );
}

export default LoginView ;
