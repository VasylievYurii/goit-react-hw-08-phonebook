import styled from '@emotion/styled';
import { DiPhonegap } from 'react-icons/di';
import { BsPersonAdd } from 'react-icons/bs';

export const Section = styled.section`
  margin: 0 auto;
`;

export const Container = styled.div`
  /* position: relative; */
  max-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* background-image: var(--gradient-section); */
  /* box-shadow: var(--shadow-section); */
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  position: relative;
  width: auto;
  text-transform: uppercase;
  /* color: var(--color-main-one); */
  width: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  text-align: center;
  /* background-color: var(--color-accent); */
  border-bottom: 2px solid white;
`;

export const TitleContacts = styled.h2`
  width: 100%;
  text-align: center;
  border-bottom: 2px solid white;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  /* background-color: var(--color-accent); */
  text-transform: uppercase;
  /* color: var(--color-main-one); */
`;

export const DiPhonegapSvg = styled(DiPhonegap)`
  width: 40px;
  height: 40px;
`;

export const BsPersonAddSvg = styled(BsPersonAdd)`
  width: 40px;
  height: 40px;
  fill: #fff;
`;

export const SvgWrapper = styled.div`
  position: fixed;
  bottom: 4%;
  right: 3%;
  background-color: #42e8e0;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 250ms var(--timing-function);
  :hover {
    box-shadow: #42e8e0 0px 0px 30px;
  }
`;
