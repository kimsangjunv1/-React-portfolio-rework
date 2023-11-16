import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";

import HeaderMenu from "../common/HeaderMenu";

import LogoBackground from "./../../assets/img/logo_bg.jpg";
import LogoMain from "./../../assets/img/logo.svg";
import icon_menu from "./../../assets/img/icon_menu.svg";

const Header = ({ scrolled, mobile }) => {
	const headerBox = useRef(null);

	const [nowScroll, setNowScroll] = useState(true);

	const [menuState, setMenuState] = useState(false);

	const [lastScroll, setLastScroll] = useState(0);
	const [offsetTop, setOffsetTop] = useState(headerBox.current?.offsetTop);
	const [menuItem, setMenuItem] = useState(null);

	useEffect(() => {
		// document.querySelector(".scroll_progress").style.width = scrolled + "%";

		const checkTop = () => {
			if (offsetTop >= window.scrollY) {
				// 안닿았을때
				// headerBox.current.style.position = "sticky";
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
					// headerBox.current.style.position = "fixed";
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
		<nav ref={headerBox}>
			{!mobile ? (
				<div className="header_inner">
					<HeaderMenu title={"information"} />
					<HeaderMenu title={"skill"} />
					<a className="logo" href="#landing">
						<img className="bg" src={LogoBackground} alt="로고_뒷배경" />
						<img className="icon" src={LogoMain} alt="로고_메인" />
					</a>
					<HeaderMenu title={"worklist"} />
					<HeaderMenu title={"contact"} />
				</div>
			) : (
				<div className="header_inner">
					<a className="logo" href="#landing">
						<img src={LogoMain} alt="로고_메인" />
					</a>
					<button
						className="menu_btn"
						onClick={() => {
							setMenuState(true);
						}}
					>
						<img src={icon_menu} alt="메뉴 아이콘" />
					</button>
					<div className={`nav_item_container ${menuState ? "show" : "hide"}`}>
						<p className="title">메뉴</p>
						<HeaderMenu title={"worklist"} />
						<HeaderMenu title={"contact"} />
						<HeaderMenu title={"information"} />
						<HeaderMenu title={"skill"} />
						<button
							className="close_btn"
							onClick={() => {
								setMenuState(false);
							}}
						>
							닫기
						</button>
					</div>
				</div>
			)}
			{/* <div className="scroll_background">
				<div className="scroll_progress"></div>
			</div> */}
		</nav>
	);
};

export default Header;
