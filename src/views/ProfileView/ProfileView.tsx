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

function ProfileView() {
  const [userInfo, setUserInfo] = useState<any>({})
  var db = firebase.firestore();
  db.collection("users").doc('89Eou9C1Tz7rQLmntIbK')
  .get().then((querySnapshot) => {
    setUserInfo(querySnapshot.data());
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
            {(userInfo.tags)?.map((value:any) => (
              <Tag><Text>{value}</Text></Tag>
            ))}
          </Categories>   
        </MiddleBox>
      </OuterBox>
    </>
  );
}

export default ProfileView ;
