import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

import HeaderMenu from "../common/HeaderMenu";

import LogoBackground from "./../../assets/img/logo_bg.jpg";
import LogoMain from "./../../assets/img/logo.svg";

const Header = ({ scrolled }) => {
  const [menuItem, setMenuItem] = useState(null);

  const TitleComponents = ({ title }) => {
    // console.log({ title }, "선택");
    return (
      <div className="header_text_container">
        <a href="#">{title}</a>
        <div
          className={`test ${title}`}
          // whileHover={{ translateX: -50 }}
          // transition={{ type: "Orchestration" }}
        >
          <a href="#">{title}</a>
          <a href="#">{title}</a>
        </div>
      </div>
    );
  };
  useEffect(() => {
    document.querySelector(".scroll_progress").style.width = scrolled + "%";
  });

  return (
    <header>
      <div className="header_inner">
        <HeaderMenu title={"Information"} />
        <HeaderMenu title={"Technics"} />
        <HeaderMenu title={"Study"} />
        <HeaderMenu title={"Careers"} />
        <a className="logo" href="#">
          <img className="bg" src={LogoBackground} alt="로고_뒷배경" />
          <img className="icon" src={LogoMain} alt="로고_메인" />
        </a>
        <HeaderMenu title={"Projects"} />
        <HeaderMenu title={"What"} />
        <HeaderMenu title={"Whatever"} />
        <HeaderMenu title={"Shooting"} />
      </div>
      <div className="scroll_background">
        <div className="scroll_progress"></div>
      </div>
    </header>
  );
};

export default Header;
