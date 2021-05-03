import React, { useState } from 'react';
import {  NavBar } from '../../components';
import "firebase/firestore"
import firebase from '../../backend/firebase';

import {H1, Text} from '../../global/components';

import {
  MiddleBox,
  ProfilePicture,
  Categories,
  Tag,
  OuterBox
} from './styles';
import { useInfo } from '../../hook/LoggedProvider';

function ProfileView() {
  const [userInfo, setUserInfo] = useState<any>({})
  var db = firebase.firestore();
  const {setUserId, userId}  = useInfo()[0];

  db.collection("users").where("email", "==", userId)
  .get().then((querySnapshot) => {
    let auxInfo:any = [];
    querySnapshot.forEach((doc) => {
        auxInfo = (doc.data());
    });
    setUserInfo(auxInfo);
  });

 
  return (
    <>
      <NavBar/>
      <OuterBox>
        <MiddleBox>
          <ProfilePicture src={userInfo.img}></ProfilePicture>
          <H1 align='center'>{userInfo.name}, {userInfo.age}</H1>
          <Text align='center' margin= '0 0 10px 0'>Categoria de interesse:</Text>
          <Categories>
              <Tag><Text>{userInfo.tags}</Text></Tag>
          </Categories>   
        </MiddleBox>
      </OuterBox>
    </>
  );
}

export default ProfileView ;
