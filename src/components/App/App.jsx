import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import Loader from 'components/Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Registration = lazy(() => import('pages/Registration'));
const Login = lazy(() => import('pages/Login'));

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    // <AnimatePresence>
    isRefreshing ? (
      <AnimatePresence>
        <b>Refreshing user...</b>{' '}
      </AnimatePresence>
    ) : (
      <AnimatePresence>
        {' '}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="contacts"
              element={
                <Suspense fallback={<Loader />}>
                  <PrivateRoute redirectTo="/login" component={<Contacts />} />
                </Suspense>
              }
            />

            <Route
              path="registration"
              element={
                <Suspense fallback={<Loader />}>
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Registration />}
                  />
                </Suspense>
              }
            ></Route>

            <Route
              path="login"
              element={
                <Suspense fallback={<Loader />}>
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Login />}
                  />
                </Suspense>
              }
            />
          </Route>
        </Routes>{' '}
      </AnimatePresence>
    )
  );
}

export default App;
