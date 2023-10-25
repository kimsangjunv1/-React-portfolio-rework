import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import imagesLoaded from "imagesloaded";

import Header from "./../layout/Header";
import Contents from "../layout/Contents";
import Footer from "./../layout/Footer";
import Landing from "../layout/Landing";
import Loading from "../layout/Loading";
import Contact from "../layout/Contact";
import Information from "../common/Information";

import MouseSection from "../include/Mouse_section";

import SkillComponents from "../common/SkillComponents";
import TitleComponents from "../common/TitleComponents";
import WorklistComponents from "../common/WorklistComponents";
import SectionSpace from "../common/SpaceComponents";
import StudyComponents from "../common/StudyComponents";

import Navigate_section from "./../include/Navigate_section";
import Desc_section from "./../include/Desc_section";

import Scroll_up from "../common/Scroll_up";

// import loading from ''

const Main = () => {
	const [toyProjectsInfo, setToyProjectsInfo] = useState([]);
	const [webstandardsInfo, setWebstandardsInfo] = useState([]);
	const [skillInfo, setSkillInfo] = useState([]);

	const [isLoaded, setIsLoaded] = useState(false);

	const [scrolled, setScrolled] = useState(0);

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/kimsangjunv1/-React-portfolio-rework/main/src/components/utils/data.json",
			{
				method: "GET",
			}
		)
			.then((res) => res.json())
			.then((res) => {
				setWebstandardsInfo(res.webstandards);
				setSkillInfo(res.usedskill);
				setToyProjectsInfo(res.toyproject);
			});

		// 이미지 로딩
		imagesLoaded(document.querySelector("body"), function () {
			console.log("로딩완려");
			setIsLoaded(true);
		});

		// 스크롤
		window.onscroll = function () {
			let winScroll =
				document.body.scrollTop || document.documentElement.scrollTop;
			let height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			setScrolled((winScroll / height) * 100);
		};
	}, []);

	const itemInfo = useSelector((state) => state.counter.iteminfo);

	return (
		<Fragment>
			{/* <button
        onClick={() => {
          isLoaded ? setIsLoaded(false) : setIsLoaded(true);
        }}
        style={{
          background: "red",
          zIndex: "10000000",
          position: "fixed",
          border: "none",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        클릭
      </button> */}
			<MouseSection />
			<AnimatePresence>{isLoaded ? "" : <Loading />}</AnimatePresence>
			{/* <AnimatePresence>{isLoaded ? <Loading /> : <Loading />}</AnimatePresence> */}
			<Landing scrolled={scrolled} />
			<Header scrolled={scrolled} />
			<SectionSpace height={120} />
			<Information title={"테스트"} scrolled={scrolled} />
			<SectionSpace height={120} />
			<TitleComponents
				title={"web standards"}
				subTitle={`저는 총 15가지<br />다음과 같은 기술들을 다뤘어요`}
				setInner={true}
				type={"skill"}
			/>
			<SkillComponents information={skillInfo} />
			<AnimatePresence>
				{Object.keys(itemInfo).length !== 0 && (
					<Desc_section itemInfo={itemInfo} />
				)}
			</AnimatePresence>
			<SectionSpace height={120} />
			<TitleComponents
				title={"Toy Project"}
				subTitle={`다음과 같은<br />작업물들이 있어요!`}
				setInner={true}
				type={"project"}
			/>
			<WorklistComponents information={toyProjectsInfo} />
			{/* <Navigate_section
        toyProjectsInfo={toyProjectsInfo}
        webstandardsInfo={webstandardsInfo}
        skillInfo={skillInfo}
      /> */}
			<SectionSpace height={120} />
			<TitleComponents title={"공부"} subTitle={"Study"} setInner={true} />
			<StudyComponents />
			<SectionSpace height={120} />

			<Contact />
			<Scroll_up />
			<Footer />
		</Fragment>
	);
};

export default Main;

//
