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

// import Landing_bottom from "./../../assets/img/landing_bottom.svg";
import Landing_circle from "./../../assets/img/landing_circle.svg";
import Landing_emoji from "./../../assets/img/landing_emoji.svg";
import Landing_sprout from "./../../assets/img/landing_sprout.svg";
import Landing_particle from "./../../assets/img/landing_particle.svg";

import landing_img_001 from "./../../assets/img/landing_img_01.jpg";
import landing_img_002 from "./../../assets/img/landing_img_02.jpg";
import landing_img_003 from "./../../assets/img/landing_img_03.jpg";

const Landing = ({ scrolled }) => {
	return (
		<section className="landing">
			<div className="landing_inner">
				<div className="landing_contents">
					<div className="row">
						<h2>
							<i>새싹</i>을
						</h2>
						<img src={Landing_sprout} alt="새씩" />
						<img src={Landing_particle} alt="새씩" />
					</div>
					<div className="row">
						<h2>틔울 수 있는</h2>

						{/* <img className="emoji" src={Landing_emoji} alt="하단 이미지" />
						<img className="emoji" src={Landing_sprout} alt="하단 이미지" /> */}
					</div>
					<div className="row">
						<img className="emoji" src={Landing_emoji} alt="하단 이미지" />
						<h2>
							<i>씨앗</i>이
						</h2>
					</div>
					<div className="row">
						<h2>되겠습니다.</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
