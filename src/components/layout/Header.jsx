import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";

import HeaderMenu from "../common/HeaderMenu";

import LogoBackground from "./../../assets/img/logo_bg.jpg";
import LogoMain from "./../../assets/img/logo.svg";

const Header = ({ scrolled }) => {
	const headerBox = useRef(null);

	const [nowScroll, setNowScroll] = useState(true);

	const [lastScroll, setLastScroll] = useState(0);
	const [offsetTop, setOffsetTop] = useState(headerBox.current?.offsetTop);
	const [menuItem, setMenuItem] = useState(null);

	useEffect(() => {
		document.querySelector(".scroll_progress").style.width = scrolled + "%";

		const checkTop = () => {
			if (offsetTop >= window.scrollY) {
				// 안닿았을때
			} else {
				// 닿았을때
				let scrollTop =
					window.pageYOffset ||
					window.scrollY ||
					document.documentElement.scrollTop;

				// console.log(scrollTop < lastScroll);

				if (scrollTop < lastScroll) {
					//현재 스크롤 값이 이전 스크롤 값보다 작다면
					headerBox.current.style.top = "0px";
				} else {
					headerBox.current.style.top = "-85px";
				}
				setLastScroll(scrollTop); // 지금 현재 스크롤 값을 이전 스크롤 값에 넣은 뒤
			}
		};

		window.addEventListener("scroll", checkTop);
	});

	useEffect(() => {
		setOffsetTop(headerBox.current?.offsetTop);
	}, []);

	return (
		<header ref={headerBox}>
			<div className="header_inner">
				{/* <HeaderMenu title={"Information"} /> */}
				{/* <HeaderMenu title={"Technics"} /> */}
				<HeaderMenu title={"Home"} />
				<HeaderMenu title={"Information"} />
				<HeaderMenu title={"Skill"} />
				<a className="logo" href="#">
					<img className="bg" src={LogoBackground} alt="로고_뒷배경" />
					<img className="icon" src={LogoMain} alt="로고_메인" />
				</a>
				<HeaderMenu title={"Project"} />
				<HeaderMenu title={"Study"} />
				<HeaderMenu title={"Contact"} />
				{/* <HeaderMenu title={"Whatever"} />
        <HeaderMenu title={"Shooting"} /> */}
			</div>
			<div className="scroll_background">
				<div className="scroll_progress"></div>
			</div>
		</header>
	);
};

export default Header;
