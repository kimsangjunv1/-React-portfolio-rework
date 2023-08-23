import Header from "./../layout/Header";
import Contents from "../layout/Contents";
import Footer from "./../layout/Footer";
import Scroll_up from "../common/Scroll_up";

import Navigate_section from "./../include/Navigate_section";
import Desc_section from "./../include/Desc_section";

// import loading from ''

const Main = () => {
  return (
    <>
      <Header />
      <Contents>
        <Navigate_section />
        <Desc_section />
        {/* <Loading /> */}
      </Contents>
      <Scroll_up />
      <Footer />
    </>
  );
};

export default Main;

//
