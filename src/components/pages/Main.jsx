import Header from "./../layout/Header";
import Contents from "../layout/Contents";
import Footer from "./../layout/Footer";
import Scroll_up from "../common/Scroll_up";

import Alert from "../common/Alert";

import Navigate_section from "./../include/Navigate_section";
import Desc_section from "./../include/Desc_section";

// import loading from ''

const Main = () => {
  return (
    <>
      <Header />
      <Alert />
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
