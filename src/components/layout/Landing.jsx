import React, { useRef } from "react";

import { useEffect } from "react";
import { motion } from "framer-motion";

import Landing_glow from "./../../assets/img/landing_bg_glow.svg";

import Landing_fur_001 from "./../../assets/img/landing_fur_001.svg";
import Landing_fur_002 from "./../../assets/img/landing_fur_002.svg";
import Landing_fur_003 from "./../../assets/img/landing_fur_003.svg";
import Landing_fur_004 from "./../../assets/img/landing_fur_004.svg";
import Landing_fur_005 from "./../../assets/img/landing_fur_005.svg";
import Landing_fur_006 from "./../../assets/img/landing_fur_006.svg";

import Landing_text_focus from "./../../assets/img/landing_text_focus.svg";
import Landing_arrow_001 from "./../../assets/img/landing_arrow_001.svg";
import Landing_arrow_002 from "./../../assets/img/landing_arrow_002.svg";

import landing_img_001 from "./../../assets/img/landing_img_01.jpg";
import landing_img_002 from "./../../assets/img/landing_img_02.jpg";
import landing_img_003 from "./../../assets/img/landing_img_03.jpg";

const Landing = ({ scrolled }) => {
	return (
		<div className="landing">
			<div className="landing_inner">
				<div className="landing_contents">
					<div className="row">
						<motion.h2
							whileInView={{
								opacity: [0, 1],
								transition: { delay: 0.65 },
							}}
						>
							즐기며
						</motion.h2>
						<motion.div
							className="arrow_box"
							whileInView={{
								opacity: [0, 1],
								transition: { delay: 0.45 },
							}}
						>
							<img className="arrow_image" src={Landing_arrow_001} alt="" />
						</motion.div>
						<motion.h2
							whileInView={{
								opacity: [0, 1],
								transition: { delay: 0.65 },
							}}
						>
							개발하는
						</motion.h2>
					</div>
					<div className="row">
						<motion.h2
							whileInView={{
								opacity: [0, 1],
								transition: { delay: 0.35 },
							}}
						>
							김상준
						</motion.h2>
						<motion.h2
							whileInView={{
								opacity: [0, 1],
								transition: { delay: 0.35 },
							}}
						>
							입니다.
						</motion.h2>
					</div>
					<div className="row">
						<motion.h2
							whileInView={{
								opacity: [0, 1],
								transition: { delay: 0.25 },
							}}
						>
							많은것을 남긴
						</motion.h2>
					</div>
					<div className="row">
						<motion.h2
							whileInView={{
								opacity: [0, 1],
								transition: { delay: 0.25 },
							}}
						>
							하하하 호호호호
						</motion.h2>
					</div>
					<img src={Landing_arrow_002} alt="화살표" />
				</div>
			</div>
		</div>
	);
};

export default Landing;
