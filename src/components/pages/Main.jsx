import Header from "./../layout/Header";
import Contents from "../layout/Contents";
import Footer from "./../layout/Footer";

import Section_01 from "../include/Section_01";

// import loading from ''

const Main = () => {
  return (
    <>
      <Header />
      <Contents>
        <Section_01 />
        <Section_01 />
        <Section_01 />
        <Section_01 />
        <Section_01 />
        {/* <Loading /> */}
      </Contents>
      <Footer />
    </>
  );
};

export default Main;

//
