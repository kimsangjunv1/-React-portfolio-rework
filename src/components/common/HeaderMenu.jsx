import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

const HeaderMenu = ({ title }) => {
  const textWidth = useRef(null);
  return (
    <div className="header_text_container">
      <a href="#">{title}</a>
      <motion.div
        className={`test ${title}`}
        whileHover={{
          translateX: -(textWidth.current?.offsetWidth + 20),
          transition: { type: "just", stiffness: 0, damping: 0 },
        }}
      >
        <a href="#" ref={textWidth}>
          {title}
        </a>
        <a href="#">{title}</a>
      </motion.div>
    </div>
  );
};

export default HeaderMenu;
