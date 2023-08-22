const Scroll_up = () => {
  const scrollBtnDisplay = function () {
    const scrollBtn = document.querySelector(".up_btn");
    console.log("dd");
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
