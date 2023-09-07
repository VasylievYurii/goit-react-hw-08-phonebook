import React from 'react';
import FormLogin from 'components/FormLogin/FormLogin';
import { motion } from 'framer-motion';

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FormLogin></FormLogin>
    </motion.div>
  );
};

export default Login;
