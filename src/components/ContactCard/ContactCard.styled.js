import styled from '@emotion/styled';
import { RxCrossCircled } from 'react-icons/rx';
import { AiOutlinePhone } from 'react-icons/ai';

export const ContactList = styled.li`
  display: block;
  font-size: 1em;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
`;

export const ContactCard = styled.a`
  position: relative;
  display: flex;
  padding: 0.4em;
  border-radius: 40px;
  border-top-right-radius: 5px;
  background-color: #3686a8;
  box-shadow: auto;
  transition: background-color 250ms var(--timing-function),
    box-shadow 250ms var(--timing-function);

  &:hover {
    background-color: #35ebe4;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
  }

  &:link,
  &:visited {
    text-decoration: none;
  }

  &:link:hover,
  &:visited:hover {
    text-decoration: none;
  }
`;

export const ContactName = styled.p`
  position: relative;
  font-family: 'Arial';
  color: var(--color-main-one);
  font-size: 1.2em;
  font-weight: 500;
  :after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0%;
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 20%);
  }
`;

export const ContactPhone = styled.p`
  font-family: 'Arial';
  color: var(--color-main-one);
  font-size: 1.2em;
  font-weight: 500;
  text-align: right;
  margin-left: auto;
`;
export const RiDeleteBinLineSvg = styled(RxCrossCircled)`
  position: absolute;
  color: white;
  right: 0.2em;
  top: 0.2em;
  background-color: inherit;
  border-radius: 50%;
  border: 3px solid inherit;
  width: 20px;
  height: 20px;
  transition: color 250ms var(--timing-function);

  :hover {
    color: red;
  }
`;

export const ContactUl = styled.ul`
  width: 100%;
`;
export const ContactWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

export const SvgWrapper = styled.div``;

export const BsFillTelephoneFillSvg = styled(AiOutlinePhone)`
  fill: white;
  background-color: #42e8e0;
  padding: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
