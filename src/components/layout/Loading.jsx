import React from "react";

import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      //   initial={{ y: 10, opacity: 0 }}
      //   animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="testest"
    >
      로딩중
    </motion.div>
  );
};

export default Loading;
