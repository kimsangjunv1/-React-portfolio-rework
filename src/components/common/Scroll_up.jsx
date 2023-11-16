import IconArrowUp from "./../../assets/img/icon_arrow_up.svg";
import IconArrowDown from "./../../assets/img/icon_arrow_down.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Scroll_up = () => {
	const [state, setState] = useState(false);
	const scrollWindow = () => {
		window.scroll({
			top: 0,
			left: 100,
			behavior: "smooth",
		});
	};
	const scrollContact = () => {
		window.scrollTo({
			top: document.body.scrollHeight, // <- 페이지 총 Height
			behavior: "smooth",
		});
	};
	useEffect(() => {
		const scrollBtnDisplay = function () {
			window.scrollY > window.innerHeight ? setState(true) : setState(false);
		};

		window.addEventListener("scroll", scrollBtnDisplay);
		console.log("asd");
	}, []);
	return (
		<>
			{state && (
				<div className="nav_container show">
					<div
						className="up_btn"
						onClick={() => {
							scrollWindow();
						}}
					>
						<img src={IconArrowUp} alt="위로" />
					</div>
					<div
						onClick={() => {
							scrollContact();
						}}
					>
						<img src={IconArrowDown} alt="아래로" />
					</div>
				</div>
			)}
		</>
	);
};

export default Scroll_up;
