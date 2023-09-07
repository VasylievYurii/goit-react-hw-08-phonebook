import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: relative;
  width: 100%;
`;

export const Menu = styled.ul`
  font-size: 20px;
  display: flex;
  padding: 20px;
  gap: 20px;
  font-weight: 200;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (min-width: 460px) {
    padding-right: 60px;
    font-size: 22px;
    justify-content: flex-end;
  }
  @media screen and (min-width: 860px) {
    font-size: 30px;
    padding-top: 40px;
    padding-bottom: 40px;
    gap: 40px;
    padding-right: 100px;
  }
  @media screen and (min-width: 1280px) {
    padding-right: 200px;
  }
`;

export const List = styled(NavLink)`
  color: #fff;
  transition: color 250ms var(--timing-function),
    text-shadow 250ms var(--timing-function);
  :hover {
    color: #42e8e0;
    text-shadow: #42e8e0 1px 0 10px;
  }
  &.active {
    color: #42e8e0;
    text-shadow: #42e8e0 1px 0 10px;
  }
`;
