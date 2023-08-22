import React from "react";

const Scroll_up = () => {
  const scrollBtn = document.querySelector(".up_btn");
  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight
      ? scrollBtn.classList.add("show")
      : scrollBtn.classList.remove("show");
  };

  window.addEventListener("scroll", scrollBtnDisplay);
  const scrollWindow = () => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
    // if (window.scrollY != 0) {
    //   setTimeout(function () {
    //     window.scrollTo(0, window.scrollY - 50);
    //     scrollWindow();
    //   }, 10);
    // }
  };
  return (
    <div
      className="up_btn"
      onClick={() => {
        scrollWindow();
      }}
    >
      Scroll_up
    </div>
  );
};

export default Scroll_up;
