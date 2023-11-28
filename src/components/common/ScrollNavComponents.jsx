import IconArrowUp from "./../../assets/img/icon_arrow_up.svg";
import IconArrowDown from "./../../assets/img/icon_arrow_down.svg";
import Contact_me from "./../../assets/img/contact_me.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ScrollNavComponents = () => {
  const [state, setState] = useState(false);
  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight ? setState(true) : setState(false);
  };

  window.addEventListener("scroll", scrollBtnDisplay);

  const scrollWindow = () => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };
  const scrollContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // <- 페이지 총 Height
      behavior: "smooth",
    });
  };
  return (
    <AnimatePresence>
      {state && (
        <>
          <motion.div
            className="nav_container show"
            initial={{ opacity: 0, translateX: "200%", translateY: "-50%" }}
            animate={{ opacity: 1, translateX: "0%", translateY: "-50%" }}
            exit={{ opacity: 0, translateX: "200%", translateY: "-50%" }}
            transition={{ duration: 0.2, ease: [0, 0.25, 0.2, 1.01] }}
          >
            <div
              className="up_btn"
              onClick={() => {
                scrollWindow();
              }}
            >
              <img src={IconArrowUp} alt="위로" />
            </div>
            <div
              onClick={() => {
                scrollContact();
              }}
            >
              <img src={IconArrowDown} alt="아래로" />
            </div>
          </motion.div>
          {/* <motion.div
						className="sendbtn_container"
						initial={{ opacity: 0, translateX: "200%", translateY: "-50%" }}
						animate={{ opacity: 1, translateX: "0%", translateY: "-50%" }}
						exit={{ opacity: 0, translateX: "200%", translateY: "-50%" }}
						transition={{ duration: 0.2, ease: [0, 0.25, 0.2, 1.01] }}
					>
						<img className="contact_btn" src={Contact_me} alt="" />
					</motion.div> */}
        </>
      )}
    </AnimatePresence>
  );
};

export default ScrollNavComponents;
