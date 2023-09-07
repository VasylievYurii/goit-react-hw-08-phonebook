import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import Loader from 'components/Loader/Loader';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import Layout from '../Layout/Layout';

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
    <AnimatePresence>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
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
        </Routes>
      )}
    </AnimatePresence>
  );
}

export default App;
