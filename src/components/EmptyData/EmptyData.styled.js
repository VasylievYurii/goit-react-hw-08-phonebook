import styled from '@emotion/styled';
import { BsPersonAdd } from 'react-icons/bs';

export const Section = styled.section`
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const TitleContacts = styled.h2`
  color: #fff;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid white;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  text-transform: uppercase;
`;

export const BsPersonAddSvg = styled(BsPersonAdd)`
  width: 40px;
  height: 40px;
  fill: #fff;
`;

export const SvgWrapper = styled.div`
  border: #fff 2px solid;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 250ms var(--timing-function);
  :hover {
    box-shadow: #42e8e0 0px 0px 30px;
  }
`;
