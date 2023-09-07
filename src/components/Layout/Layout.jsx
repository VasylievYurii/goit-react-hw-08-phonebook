import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Suspense } from 'react';
import { Header, Menu, List } from './Layout.styled';
import User from 'components/User/User';

function Layout() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Header>
        <nav>
          <Menu>
            <List to="/">HOME</List>
            <List to="/contacts">CONTACTS</List>
            {!isLoggedIn ? (
              <>
                <List to="/registration">REGISTRATION</List>
                <List to="/login">LOGIN</List>
              </>
            ) : (
              <User />
            )}
          </Menu>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
