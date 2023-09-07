import styled from '@emotion/styled';
import { PiUserCircleDuotone } from 'react-icons/pi';
import { RiLogoutCircleRLine } from 'react-icons/ri';

export const UserMenuWrapper = styled.div`
  display: flex;
`;
export const UserIcon = styled(PiUserCircleDuotone)`
  fill: #c9c7f8;
  width: 26px;
  height: 26px;
  @media screen and (min-width: 460px) {
    margin-left: 10px;
  }
  @media screen and (min-width: 860px) {
    width: 34px;
    height: 34px;
  }
`;

export const ButtonLogout = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
export const LogoutIcon = styled(RiLogoutCircleRLine)`
  width: 24px;
  height: 24px;
  fill: #c9c7f8;
  margin-left: 10px;
  @media screen and (min-width: 860px) {
    width: 32px;
    height: 32px;
  }
  &:hover {
    fill: red;
  }
`;
export const UserName = styled.p`
  color: #c9c7f8;
  margin-left: 5px;
`;
