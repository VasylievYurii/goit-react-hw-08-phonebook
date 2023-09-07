import React from 'react';
import {
  Image,
  Title,
  Description,
  Text,
  TextWrapper,
  ContentWrapper,
} from './Welcome.styled';
import ImagePng from '../../img/phone.png';

const Welcome = () => {
  return (
    <>
      <ContentWrapper>
        <TextWrapper>
          <Title>PHONEBOOK</Title>
          <Description>Your Contact Hub: Stay Connected!</Description>
          <Text>
            This is a working prototype of a phone book with a learning backend.
          </Text>
        </TextWrapper>
        <Image src={ImagePng} alt="PHONEBOOK" />
      </ContentWrapper>
    </>
  );
};

export default Welcome;
