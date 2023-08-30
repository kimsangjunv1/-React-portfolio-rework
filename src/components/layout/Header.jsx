import { useEffect, useState } from "react";

import LogoBackground from "./../../assets/img/logo_bg.jpg";
import LogoMain from "./../../assets/img/logo.svg";

const Header = ({ scrolled }) => {
  console.log("scrolled Header : ", scrolled);
  const [menuItem, setMenuItem] = useState(null);
  useEffect(() => {
    document.querySelector(".scroll_progress").style.width = scrolled + "%";
  });

  return (
    <header>
      <div className="header_inner">
        <a className="active" href="#">
          Information
        </a>
        <a href="#">Technics</a>
        <a href="#">Study</a>
        <a className="logo" href="#">
          <img className="bg" src={LogoBackground} alt="로고_뒷배경" />
          <img className="icon" src={LogoMain} alt="로고_메인" />
        </a>
        <a href="#">Toy Projects</a>
        <a href="#">what</a>
        <a href="#">so what</a>
        <a href="#">A</a>
      </div>
      <div className="scroll_background">
        <div className="scroll_progress"></div>
      </div>
    </header>
  );
};

export default Header;
