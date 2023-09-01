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
        onClick={() => {
          scrollContact();
        }}
      >
        <p>CONTACT </p>
      </div>
      <div
        className="up_btn"
        onClick={() => {
          scrollWindow();
        }}
      >
        <p>UP</p>
      </div>
    </div>
  );
};

export default Scroll_up;
