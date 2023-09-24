import React from "react";

import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LoadingLogo from "./../../assets/img/landing_loading_logo.svg";

const Loading = () => {
  return (
    <motion.div
      initial={{ y: 0, translateY: "0%" }}
      //   animate={{ y: 0, translateY: "100%" }}
      exit={{ y: 0, translateY: "-100%" }}
      transition={{ duration: 1.0, delay: 0.5 }}
      className="loading_container"
    >
      <motion.div
        className="loading_container_inner"
        transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        // exit={{ y: -10, width: "0%" }}
        initial={{ y: 0, height: "0%" }}
        animate={{ y: 0, height: "100%" }}
      >
        <img src={LoadingLogo} alt="로딩 로고" />
      </motion.div>
    </motion.div>
  );
};

export default Loading;
