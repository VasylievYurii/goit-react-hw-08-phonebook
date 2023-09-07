import Welcome from 'components/Welcome/Welcome';
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {' '}
      <Welcome></Welcome>
    </motion.div>
  );
};

export default Home;
