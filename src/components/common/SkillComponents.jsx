import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import Close from "./../../assets/img/close.svg";
import Message from "./../../assets/img/message.svg";
import TitleComponents from "./TitleComponents";
import SubTitleComponents from "./SubTitleComponents";

const SkillComponents = ({ information }) => {
	const [title, setTitle] = useState(null);
	const [desc, setDesc] = useState(null);
	const scrollRef = useRef(null);

	const getSkillImage = (name) => {
		switch (name) {
			// 라이브러리
			case "SCSS":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_sass.png?raw=true";
			case "Lenis":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_lenis.png?raw=true";
			case "스와이퍼":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_swiper.png?raw=true";
			case "Framer":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_framer.png?raw=true";

			// 프론트엔드
			case "리액트":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_react.png?raw=true";
			case "스벨트":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_svelte.png?raw=true";
			case "뷰":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_vue.png?raw=true";

			// 백엔드
			case "PHP":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_php.png?raw=true";
			case "MySQL":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_mysql.png?raw=true";

			// 기타
			case "Redux Toolkit":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_redux.png?raw=true";
			case "Styled-components":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_styledcomponents.png?raw=true";
			case "Zustand":
				return "성공";

			// etc
			case "Zeplin":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_zeplin.png?raw=true";
			case "Figma":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_figma.png?raw=true";
			case "Jira":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_jira.png?raw=true";
			case "Slack":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_slack.png?raw=true";
			case "Gitlab":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_gitlab.png?raw=true";
			case "Github":
				return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_github.png?raw=true";

			default:
				return "없음";
		}
	};
	const skillInfo = information.filter((el, i) => i !== 3);

	return (
		<motion.section
			className="skill_container"
			ref={scrollRef}
			// viewport={{ amount: "all" }}
			// onViewportEnter={() => {
			//   document.querySelector("body").classList.add("dark");
			// }}
			// onViewportLeave={() => {
			//   document.querySelector("body").classList.remove("dark");
			// }}
		>
			<TitleComponents
				title={"web standards"}
				subTitle={`다음과 같은<br />기술들을 다뤘어요!`}
				setInner={true}
				type={"skill"}
			/>
			<SubTitleComponents title={"주로 리액트를 했습니다!"} />

			<div className="skill_container_inner">
				{skillInfo.map((item, key) => {
					return (
						<div className="skill_section" key={key}>
							<p className="skill_category">
								{key === 0
									? "Library"
									: key === 1
									? "Front"
									: key === 2
									? "Backend"
									: key === 3
									? "Misc"
									: "Misc"}
							</p>
							<div className="skill_icon_container">
								{item.list.map((item, key) => {
									return (
										<div
											className="item"
											onMouseOver={() => {
												setTitle(item.name);
												setDesc(item.desc);
											}}
											onMouseOut={() => {
												setTitle(null);
												setDesc(null);
											}}
										>
											<img
												className="skill_item"
												key={key}
												src={getSkillImage(item.name)}
												alt={Object.values(item.name)}
											/>
											<div className="description">
												<p>{item.name}</p>
												<p>{item.desc}</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
			{/* <motion.div className="skill_desc_container">
				<h2 className="skill_name">asdasd</h2>
				<p className="skill_desc">asdasd</p>
			</motion.div> */}
			<AnimatePresence>
				{title && (
					<motion.div
						className="skill_desc_container"
						initial={{ y: 0, translateX: "-50%", translateY: "200%" }}
						animate={{ y: 0, translateX: "-50%", translateY: "0%" }}
						exit={{ y: 0, translateX: "-50%", translateY: "400%" }}
						transition={{
							duration: 0.25,
							// delay: 0.5,
							ease: [0, 0.25, 0.2, 1.01],
						}}
					>
						<span className="message_icon">
							<img src={Message} alt="메세지 아이콘" />
						</span>
						<div className="information">
							<h2 className="skill_name">{title}</h2>
							<span className="skill_desc">{desc}</span>
						</div>
						{/* <span className="close_icon">
							<img src={Close} alt="닫기 아이콘" />
						</span> */}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.section>
	);
};

export default SkillComponents;
