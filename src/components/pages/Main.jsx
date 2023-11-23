import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import imagesLoaded from "imagesloaded";

import Navigation from "../layout/Navigation";
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
import ScrollComponents from "./../common/ScrollComponents";

import Navigate_section from "./../include/Navigate_section";
import Desc_section from "./../include/Desc_section";

import Scroll_up from "../common/Scroll_up";

import Test from "../common/Test";

const Main = () => {
	const [toyProjectsInfo, setToyProjectsInfo] = useState([]);
	const [webstandardsInfo, setWebstandardsInfo] = useState([]);
	const [skillInfo, setSkillInfo] = useState([]);

	const [isLoaded, setIsLoaded] = useState(false);

	const [scrolled, setScrolled] = useState(0);
	const [mobile, setMobile] = useState(false);

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

		window.matchMedia("screen and (max-width: 1024px)").matches
			? setMobile(true)
			: setMobile(false);
		window.addEventListener("resize", () => {
			window.matchMedia("screen and (max-width: 1024px)").matches
				? setMobile(true)
				: setMobile(false);
		});
	}, []);

	const itemInfo = useSelector((state) => state.counter.iteminfo);

	return (
		<Fragment>
			{/* <Header scrolled={scrolled} /> */}
			<main>
				<AnimatePresence>{isLoaded ? "" : <Loading />}</AnimatePresence>
				<Landing scrolled={scrolled} />
				<Navigation scrolled={scrolled} mobile={mobile} />
				<Information title={"테스트"} scrolled={scrolled} />
				<SkillComponents information={skillInfo} />
				<WorklistComponents information={toyProjectsInfo} mobile={mobile} />
				{/* <Navigate_section
        toyProjectsInfo={toyProjectsInfo}
        webstandardsInfo={webstandardsInfo}
        skillInfo={skillInfo}
      /> */}

				{/* <TitleComponents
					title={"공부"}
					subTitle={"요러한 것들을<br />공부하고 있어요!"}
					setInner={true}
					type={"study"}
				/>
				<StudyComponents />
				<SectionSpace height={120} /> */}
				<Contact />
				<section className="function_box" id="function">
					<MouseSection />
					<Scroll_up />
					<ScrollComponents scrolled={scrolled} />
				</section>
			</main>
			<Footer />
		</Fragment>
	);
};

export default Main;

//
