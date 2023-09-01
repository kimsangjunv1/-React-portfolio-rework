import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";

import HeaderMenu from "../common/HeaderMenu";

import LogoBackground from "./../../assets/img/logo_bg.jpg";
import LogoMain from "./../../assets/img/logo.svg";

const Header = ({ scrolled }) => {
  const test = useRef(null);

  const [offsetTop, setOffsetTop] = useState(test.current?.offsetTop);
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    document.querySelector(".scroll_progress").style.width = scrolled + "%";
  });

  useEffect(() => {
    setOffsetTop(test.current?.offsetTop);
  }, []);

  // if (test) {
  //   console.log(
  //     "window.scrollY : ",
  //     window.scrollY,
  //     "test.current.offsetTop : ",
  //     test.current?.offsetTop
  //   );
  // }
  let hohoho = window.scrollY;
  if (offsetTop >= window.scrollY) {
    console.log("Hide");
  } else {
    console.log("Show", offsetTop);
    console.log(
      "window.scrollY > hohoho : ",
      window.scrollY > hohoho,
      "window.scrollY : ",
      window.scrollY,
      "hohoho : ",
      hohoho
    );
    if (window.scrollY > hohoho) console.log("Show 상태에서 hohoho", hohoho);
    hohoho = window.scrollY;
  }

  return (
    <header ref={test}>
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
