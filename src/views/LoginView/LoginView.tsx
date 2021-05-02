import React, { useState } from 'react';
import LogoImg from '../../assets/Logo2.png'
import WaveImg from '../../assets/Wave.png'
import "firebase/firestore"
// import firebase from 'firebase/app'
import firebase from '../../backend/firebase';
import { useInfo } from '../../hook/LoggedProvider';
import { Redirect } from 'react-router-dom';

import {
  BoxForm,
  TextFieldCustom,
  BackgroundImage,
  Login,
  Register,
  ButtonsBox,
  Logo,
  Wave
} from './styles';
import { H1 } from '../../global/components';
import { StyledLink } from '../../components/NavBar/styles';

function LoginView() {
  var db = firebase.firestore();
  const [login, setLogin] = useState({ email: '', password: '' });
  const {setUserId, userId}  = useInfo()[0];

  const log = async (formEvent: any) => {
    formEvent.preventDefault();
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const usable = doc.data();
        if (usable.email === login.email && usable.password === login.password){
          setUserId(usable.email);
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
        <BoxForm onSubmit={log}>
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
            <StyledLink to = '/registrar'>
              <Register>Cadastrar</Register>
            </StyledLink>
            <Login type="submit">Entrar</Login>
          </ButtonsBox>
        </BoxForm>
      </BackgroundImage>
      {userId? <Redirect to='/perfil'></Redirect>:<></>}
    </>
  );
}

export default LoginView ;


