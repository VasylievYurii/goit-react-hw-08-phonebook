import FormRegistration from 'components/FormRegistration/FormRegistration';
import React from 'react';
import { motion } from 'framer-motion';

const Registration = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FormRegistration />
    </motion.div>
  );
};

export default Registration;
