import React, { useEffect, useState } from 'react';
import { Card, NavBar } from '../../components';
import "firebase/firestore"
import firebase from '../../backend/firebase';
import {H1, Text} from '../../global/components';

import {
  MiddleBox,
  Cards,
} from './styles';

function FeedView() {
  const [campaigns, setCampaigns] = useState<any>([])
  var db = firebase.firestore();

  useEffect(() => {
    db.collection("campaigns").get().then((querySnapshot) => {
        const auxArray:any = [];
        querySnapshot.forEach((doc) => {
            auxArray.push(doc.data());
        });
        setCampaigns(auxArray)
      });
  },[])
  return (
    <>
      <NavBar/>
      <MiddleBox>
        <H1 margin='0 0 10px 0'>Olá, Ana!</H1>
        <Text margin='0 0 80px 0'>Aqui está algumas campanhas para você dar uma olhada!!!</Text>
        <Cards>
            {campaigns.map((value:any) => (
                <Card 
                  likes={value.likes}
                  dislikes={value.dislikes}
                  img={value.img}
                  logo={'https://marcas-logos.net/wp-content/uploads/2019/11/Simbolo-Star-Wars.jpg'}
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
