import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth.js';
import {
  UserMenuWrapper,
  UserIcon,
  LogoutIcon,
  UserName,
  ButtonLogout,
} from './User.styled';

const User = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <UserMenuWrapper>
      <UserIcon />
      <UserName>{user.name}</UserName>
      <ButtonLogout type="button" onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </ButtonLogout>
    </UserMenuWrapper>
  );
};

export default User;
