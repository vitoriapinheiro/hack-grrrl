import React, { useState } from 'react';
import { StyledLink } from '../../components';
import LogoImg from '../../assets/Logo2.png';
import WaveImg from '../../assets/Wave.png'
import {
  Person,
  Email,
  Phone,
  List,
  Lock,
} from '@material-ui/icons';
import { InputAdornment } from '@material-ui/core';
import "firebase/firestore";
import firebase from '../../backend/firebase';

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
const images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3C2iucmr_Z9UdNlf65vlzvPGMOzTtvqPr3A&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVSOLrQ1_btLnQkVojBkOFqNNXL8z0kjYTz3Kh98ytjexZ79daQxo2sv6AS_h8bO63HU&usqp=CAU', 'https://e7.pngegg.com/pngimages/597/984/png-clipart-female-avatar-woman-avatar-purple-heroes.png']

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
      tags: login.interest,
      img: images[Math.floor(Math.random() * images.length)],
      age: login.age
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      setLogin({ name: '', email: '', password: '', phone: '', interest: '', age: '' });
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
  }
  const [login, setLogin] = useState({ name: '', email: '', password: '', phone: '', interest: '', age: '' });


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
              className="age"
              id="filled-basic"
              placeholder="Idade"
              variant="filled"
              type="age"
              value={login.age}
              onChange={(e) => setLogin({ ...login, age: e.target.value })}
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
              type="text"
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
            <StyledLink to = '/'>
              <Register>Cancelar</Register>
            </StyledLink >
            <Login type="submit" >Finalizar Cadastro</Login>
          </ButtonsBox>
        </Box>
      </BackgroundImage>
     
    </>
  );
}

export default RegisterView ;


