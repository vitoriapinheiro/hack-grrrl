import React from 'react';
import { ImageItem, ImageContainer } from './styles';

export default function ImagesItens({photo}: {photo: string}) {
  return (
    <>
      <ImageContainer>
        <ImageItem src={photo}></ImageItem>
      </ImageContainer>
    </>
  );
}
