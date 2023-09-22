import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import MousePointer from "./../../assets/img/mouse_pointer.svg";
import { Fragment } from "react";

const Mouse_section = () => {
  const hoho = useRef();
  const hoho2 = useRef();

  useEffect(() => {
    //  마우스
    window.addEventListener("mousemove", (e) => {
      // console.log("e : ", e.pageX);
      // console.log("ho : ", hoho.current.getBoundingClientRect().width);
      // console.log("실행", e);
      // gsap.to(hoho.current, {
      //   duration: 0.5,
      //   left: e.pageX - hoho.current.getBoundingClientRect().width / 2,
      //   top: e.pageY - hoho.current.getBoundingClientRect().height / 2,
      // });
      gsap.to(hoho.current, {
        duration: 0.2,
        left: e.pageX - 5,
        top: e.pageY - 5,
      });
      gsap.to(hoho2.current, {
        duration: 0.8,
        left: e.pageX - 15,
        top: e.pageY - 15,
      });
    });
  }, []);

  return (
    <Fragment>
      <div
        className="mouse_cursor"
        ref={hoho}
        //   style={{ position: "absolute", width: "20px" }}
      >
        {/* <img src={MousePointer} alt="마우스 포인터" /> */}
      </div>
      <div
        className="mouse_cursor2"
        ref={hoho2}
        //   style={{ position: "absolute", width: "20px" }}
      >
        {/* <img src={MousePointer} alt="마우스 포인터" /> */}
      </div>
    </Fragment>
  );
};

export default Mouse_section;
