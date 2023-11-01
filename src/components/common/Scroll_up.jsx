import IconArrowUp from "./../../assets/img/icon_arrow_up.svg";
import IconArrowDown from "./../../assets/img/icon_arrow_down.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Scroll_up = () => {
	const [state, setState] = useState(false);
	const scrollBtnDisplay = function () {
		const scrollBtn = document.querySelector(".nav_container");
		window.scrollY > window.innerHeight ? setState(true) : setState(false);
		// window.scrollY > window.innerHeight
		//   ? scrollBtn.classList.add("show")
		//   : scrollBtn.classList.remove("show");
	};

	window.addEventListener("scroll", scrollBtnDisplay);

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
	return (
		<AnimatePresence>
			{state && (
				<motion.div
					className="nav_container show"
					initial={{ opacity: 0, translateX: "200%" }}
					animate={{ opacity: 1, translateX: "0%" }}
					exit={{ opacity: 0, translateX: "200%" }}
					transition={{ duration: 0.2, ease: [0, 0.25, 0.2, 1.01] }}
				>
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
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Scroll_up;
