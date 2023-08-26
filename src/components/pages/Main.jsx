import Header from "./../layout/Header";
import Contents from "../layout/Contents";
import Footer from "./../layout/Footer";
import Landing from "../layout/Landing";
import Scroll_up from "../common/Scroll_up";

import Navigate_section from "./../include/Navigate_section";
import Desc_section from "./../include/Desc_section";

import Information from "../common/Information";
// import loading from ''

const Main = () => {
  return (
    <div>
      <Landing />
      <Header />
      {/* <Information title={"테스트"} /> */}
      <Contents>
        <Navigate_section />
        <Desc_section />
        {/* <Loading /> */}
      </Contents>
      <Scroll_up />
      <Footer />
    </div>
  );
};

export default Main;

//
