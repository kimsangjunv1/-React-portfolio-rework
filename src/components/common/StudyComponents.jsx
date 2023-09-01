import React from "react";
import DividerComponents from "./DividerComponents";
import { motion } from "framer-motion";

const StudyComponents = () => {
  return (
    <div className="study_container">
      <div className="study_container_inner">
        <motion.div
          className="item"
          whileHover={{
            scale: 1,
            transition: { type: "just", stiffness: 0, damping: 0 },
          }}
        >
          <h2 className="title">Redux Toolkit Store 사용해보기</h2>
          <p className="desc">
            넷마블은 변화하는 홈페이지 이용 환경에 맞춘 이번 개편으로 사용자가
            원하는 정보와 서비스를 제공하고 더욱 넓어진 화면 및 심플한
            디자인으로 보
          </p>
          <div className="date_container">
            <p>2023.08.18・</p>
            <p>16일전</p>
          </div>
          <DividerComponents />
        </motion.div>
        <motion.div
          className="item"
          whileHover={{
            fontWeight: "900",
            transition: { type: "just", stiffness: 0, damping: 0 },
          }}
          onHoverEnd={{
            background: "#fff",
          }}
        >
          <h2 className="title">Redux Toolkit Store 사용해보기</h2>
          <p className="desc">
            넷마블은 변화하는 홈페이지 이용 환경에 맞춘 이번 개편으로 사용자가
            원하는 정보와 서비스를 제공하고 더욱 넓어진 화면 및 심플한
            디자인으로 보
          </p>
          <div className="date_container">
            <p>2023.08.18・</p>
            <p>16일전</p>
          </div>
          <DividerComponents />
        </motion.div>
        <motion.div
          className="item"
          whileHover={{
            scale: 1,
            transition: { type: "just", stiffness: 0, damping: 0 },
          }}
        >
          <h2 className="title">useRef란?</h2>
          <p className="desc">
            넷마블은 변화하는 홈페이지 이용 환경에 맞춘 이번 개편으로 사용자가
            원하는 정보와 서비스를 제공하고 더욱 넓어진 화면 및 심플한
            디자인으로 보
          </p>
          <div className="date_container">
            <p>2023.08.18・</p>
            <p>16일전</p>
          </div>
          <DividerComponents />
        </motion.div>
        <motion.div
          className="item"
          whileHover={{
            scale: 1,
            transition: { type: "just", stiffness: 0, damping: 0 },
          }}
        >
          <h2 className="title">Redux Toolkit Store 사용해보기</h2>
          <p className="desc">
            넷마블은 변화하는 홈페이지 이용 환경에 맞춘 이번 개편으로 사용자가
            원하는 정보와 서비스를 제공하고 더욱 넓어진 화면 및 심플한
            디자인으로 보
          </p>
          <div className="date_container">
            <p>2023.08.18・</p>
            <p>16일전</p>
          </div>
          <DividerComponents />
        </motion.div>
        <motion.div
          className="item"
          whileHover={{
            scale: 1,
            transition: { type: "just", stiffness: 0, damping: 0 },
          }}
        >
          <h2 className="title">Redux Toolkit Store 사용해보기</h2>
          <p className="desc">
            넷마블은 변화하는 홈페이지 이용 환경에 맞춘 이번 개편으로 사용자가
            원하는 정보와 서비스를 제공하고 더욱 넓어진 화면 및 심플한
            디자인으로 보
          </p>
          <div className="date_container">
            <p>2023.08.18・</p>
            <p>16일전</p>
          </div>
          <DividerComponents />
        </motion.div>
      </div>
    </div>
  );
};

export default StudyComponents;
