import React from 'react';
import {
  Section,
  Container,
  SvgWrapper,
  BsPersonAddSvg,
  TitleContacts,
} from './EmptyData.styled';

const EmptyData = ({ onClick, children }) => {
  return (
    <Section>
      <Container>
        <SvgWrapper onClick={onClick}>
          {children}
          <BsPersonAddSvg />
        </SvgWrapper>
        <TitleContacts>You have no contacts yet!</TitleContacts>
      </Container>
    </Section>
  );
};

export default EmptyData;
