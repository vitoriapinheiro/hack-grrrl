import React, { useEffect } from 'react';
import { Card } from '../../components';
import {todosRef} from '../../backend/firebase';
import "firebase/firestore"
import firebase from 'firebase/app'

import {
  Box,
  TextFieldCustom,
  BackgroundImage,
  Login,
  Register,
  ButtonsBox,
} from './styles';
import { H1 } from '../../global/components';

function LoginView() {
  var db = firebase.firestore();
  db.collection("Hacka").get().then((querySnapshot) => {
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
    });
  });
  useEffect(() => {
    todosRef.once('value', (snapshot) => {
      let items = snapshot.val();
      console.log(snapshot)
      console.log(items)
      // let newState = [];
      // for (let item in items) {
      //   newState.push({
      //     id: item,
      //     task: items[item].task,
      //     done: items[item].done
      //   });
      // }
    });
    todosRef.child("Card").get().then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },[])
  return (
    <>
      <BackgroundImage>
        <Box>
          <H1 weight='300' align='center'>Seja bem-vinda!</H1>
          <TextFieldCustom
             className="email"
             id="filled-basic"
             label="E-mail"
             variant="filled"
             type="email"
             fullWidth
          />
          <TextFieldCustom 
            className="email"
            id="filled-basic"
            label="Senha"
            variant="filled"
            type='password'
            fullWidth
          />
          <ButtonsBox>
            <Register>Cadastrar</Register>
            <Login>Entrar</Login>
          </ButtonsBox>
        </Box>
      </BackgroundImage>
     
    </>
  );
}

export default LoginView ;
