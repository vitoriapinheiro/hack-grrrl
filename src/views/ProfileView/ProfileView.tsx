import React, { useState } from 'react';
import {  NavBar, VisualizationCard } from '../../components';
import "firebase/firestore"
import firebase from '../../backend/firebase';

import {H1, Text} from '../../global/components';

import {
  MiddleBox,
  ProfilePicture,
  Categories,
  Tag,
  OuterBox,
  VizualizationHistory,
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
          <VizualizationHistory>
            <Text align='center' margin= '0 0 10px 0'>Histórico de visualizações:</Text>
            <VisualizationCard
              title={'Fortes até o fim'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
              positive={true}
            />
            <VisualizationCard
            title={'Marisa de mulher para mulher'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            positive={true}
            />
            <VisualizationCard
              title={'Desperte a sua beleza'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
              positive={false}
            />
          </VizualizationHistory>
          <Text align='center' margin= '0 0 10px 0' textSize= '14px' textColor='#828282'>Você chegou ao fim do histórico de vizualizações</Text>
        </MiddleBox>
      </OuterBox>
    </>
  );
}

export default ProfileView ;
