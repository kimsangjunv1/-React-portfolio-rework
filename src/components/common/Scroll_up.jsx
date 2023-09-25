import IconArrowUp from "./../../assets/img/icon_arrow_up.svg";
import IconArrowDown from "./../../assets/img/icon_arrow_down.svg";

const Scroll_up = () => {
  const scrollBtnDisplay = function () {
    const scrollBtn = document.querySelector(".nav_container");
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
  };
  const scrollContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // <- 페이지 총 Height
      behavior: "smooth",
    });
  };
  return (
    <div className="nav_container">
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
    </div>
  );
};

export default Scroll_up;
