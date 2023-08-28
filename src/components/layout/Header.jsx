import { useEffect, useState } from "react";

import LogoBackground from "./../../assets/img/logo_bg.jpg";
import LogoMain from "./../../assets/img/logo.svg";

const Header = () => {
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    const scroll_progress = () => {
      console.log("나옴");
      window.onscroll = function () {
        createPrograssBar();
      };

      function createPrograssBar() {
        let winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        let height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.querySelector(".scroll_progress").style.width = scrolled + "%";
        // document.getElementsByClassName
      }
    };
    scroll_progress();
  }, []);
  return (
    <header>
      <div className="header_inner">
        <a className="active" href="#">
          소개
        </a>
        <a href="#">사용가능 기술</a>
        <a href="#">앱 표준 공부</a>
        <a className="logo" href="#">
          <img className="bg" src={LogoBackground} alt="로고_뒷배경" />
          <img className="icon" src={LogoMain} alt="로고_메인" />
        </a>
        <a href="#">리액트</a>
        <a href="#">뷰</a>
        <a href="#">스벨트</a>
        <a href="#">PHP</a>
      </div>
      <div className="scroll_background">
        <div className="scroll_progress"></div>
      </div>
    </header>
  );
};

export default Header;
