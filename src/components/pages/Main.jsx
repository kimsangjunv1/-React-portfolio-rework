import Header from "./../layout/Header";
import Contents from "../layout/Contents";
import Footer from "./../layout/Footer";
import Scroll_up from "../common/Scroll_up";

import Section_01 from "../include/Section_01";

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
        {/* <Section_01 /> */}

        {/* <Loading /> */}
      </Contents>
      <Scroll_up />
      <Footer />
    </>
  );
};

export default Main;

//
