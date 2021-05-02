import React, { useEffect, useState } from 'react';
import {todosRef} from '../../backend/firebase';
import LogoImg from '../../assets/Logo2.png'
import WaveImg from '../../assets/Wave.png'
import "firebase/firestore"
import firebase from 'firebase/app'

import {
  Box,
  TextFieldCustom,
  BackgroundImage,
  Login,
  Register,
  ButtonsBox,
  Logo,
  Wave
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
  const [login, setLogin] = useState({ email: '', password: '' });

  const log = async (formEvent: any) => {
    formEvent.preventDefault();
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const usable = doc.data();
        if (usable.email == login.email && usable.password == usable.password){
          console.log('entrei')
        }
      });
      setLogin({ email: '', password: '' });
  });
  }
  return (
    <>
      <BackgroundImage>
        <Logo src={LogoImg}/>
        <Wave src={WaveImg}/>
        <Box onSubmit={log}>
          <H1 weight='300' align='center'>Seja bem-vinda!</H1>
          <TextFieldCustom
             className="email"
             id="filled-basic"
             label="E-mail"
             variant="filled"
             type="email"
             value={login.email}
             fullWidth
             onChange={(e) => setLogin({ ...login, email: e.target.value })}
             required
          />
          <TextFieldCustom 
            className="email"
            id="filled-basic"
            label="Senha"
            variant="filled"
            type='password'
            value={login.password}
            fullWidth
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            required
          />
          <ButtonsBox>
            <Register>Cadastrar</Register>
            <Login type="submit">Entrar</Login>
          </ButtonsBox>
        </Box>
      </BackgroundImage>
     
    </>
  );
}

export default LoginView ;


