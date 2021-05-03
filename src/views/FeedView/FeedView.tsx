import React, { useEffect, useState } from 'react';
import { Card, NavBar } from '../../components';
import "firebase/firestore"
import firebase from '../../backend/firebase';
import {H1, Text} from '../../global/components';

import {
  MiddleBox,
  Cards,
} from './styles';
import { useInfo } from '../../hook/LoggedProvider';

function FeedView() {
  const [campaigns, setCampaigns] = useState<any>([])
  const [name, setName] = useState('');
  var db = firebase.firestore();
  const {setUserId, userId}  = useInfo()[0];

  useEffect(() => {
    db.collection("campaigns").get().then((querySnapshot) => {
        const auxArray:any = [];
        querySnapshot.forEach((doc) => {
            auxArray.push(doc.data());
        });
        setCampaigns(auxArray)
      });
  },[])
  useEffect(() => {
    db.collection("users").where("email", "==", userId)
    .get().then((querySnapshot) => {
        let auxName:any = [];
        querySnapshot.forEach((doc) => {
            auxName = (doc.data().name);
            console.log(auxName);
        });
        setName(auxName)
    });
  },[])
  return (
    <>
      <NavBar/>
      <MiddleBox>
        <H1 margin='0 0 10px 0'>Olá, {name}</H1>
        <Text margin='0 0 80px 0'>Aqui está algumas campanhas para você dar uma olhada!!!</Text>
        <Cards>
            {campaigns.map((value:any) => (
                <Card 
                  likes={value.likes}
                  dislikes={value.dislikes}
                  img={value.img}
                  logo={'https://logodownload.org/wp-content/uploads/2014/05/natura-logo-1-1.png'}
                  topPost={value.topPost}
                  desc={value.description}
                  title={value.title}
                />
            ))}
        </Cards>
        </MiddleBox>
        
    </>
  );
}

export default FeedView ;
