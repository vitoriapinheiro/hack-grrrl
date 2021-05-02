import React, { useEffect, useState } from 'react';
import { Card } from '../../components';
import {todosRef} from '../../backend/firebase';
import LogoImg from '../../assets/Logo2.png';
import WaveImg from '../../assets/Wave.png'
import {
  Close as CloseIcon,
  Person,
  Email,
  Phone,
  List,
  Lock,
} from '@material-ui/icons';
import { InputAdornment } from '@material-ui/core';

import "firebase/firestore";
import firebase from 'firebase/app';

import {
  Box,
  TextFieldCustom,
  BackgroundImage,
  Login,
  Register,
  ButtonsBox,
  Logo,
  BoxText,
  Wave
} from './styles';
import { H1 } from '../../global/components';

function RegisterView() {
  var db = firebase.firestore();
  db.collection("users").get().then((querySnapshot) => {
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
    });
  });

  const register = async (formEvent: any) => {
    formEvent.preventDefault();

    db.collection("users").add({
      email: login.email,
      name: login.name,
      password: login.password,
      phone: login.phone,
      interest: login.interest,
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      setLogin({ name: '', email: '', password: '', phone: '', interest: '' });
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
  }

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
  const [login, setLogin] = useState({ name: '', email: '', password: '', phone: '', interest: '' });


  return (
    <>
      <BackgroundImage>
        <Logo src={LogoImg}/>
        <Wave src={WaveImg}/>
        <Box onSubmit={register}>
          <H1 weight='300' align='center'>Cadastro</H1>
          <BoxText>
            <TextFieldCustom
              className="name"
              id="filled-basic"
              placeholder="Nome"
              variant="filled"
              type="text"
              value={login.name}
              onChange={(e) => setLogin({ ...login, name: e.target.value })}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextFieldCustom 
              className="phone"
              id="filled-basic"
              placeholder="Telefone"
              variant="filled"
              type='number'
              value={login.phone}
              onChange={(e) => setLogin({ ...login, phone: e.target.value })}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextFieldCustom
              className="email"
              id="filled-basic"
              placeholder="E-mail"
              variant="filled"
              type="email"
              value={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextFieldCustom
              className="interest"
              id="filled-basic"
              placeholder="Interesses"
              variant="filled"
              type="email"
              value={login.interest}
              onChange={(e) => setLogin({ ...login, interest: e.target.value })}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <List color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextFieldCustom
              className="senha"
              id="filled-basic"
              placeholder="Senha"
              variant="filled"
              type="password"
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </BoxText>
          <ButtonsBox>
            <Register>Cadastrar</Register>
            <Login type="submit" >Finalizar Cadastro</Login>
          </ButtonsBox>
        </Box>
      </BackgroundImage>
     
    </>
  );
}

export default RegisterView ;


