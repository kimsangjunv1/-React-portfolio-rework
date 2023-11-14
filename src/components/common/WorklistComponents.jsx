import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { saveItemInfo } from "../utils/infoContainerStore";
import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";

import Desc_section from "./../include/Desc_section";
import Screenshot from "./../../assets/img/screenshot_01.jpg";

import SectionProjectSingle from "./../../assets/img/section_project_single.svg";
import SectionProjectTeam from "./../../assets/img/section_project_team.svg";
import TitleComponents from "./TitleComponents";
import SubTitleComponents from "./SubTitleComponents";

const WorklistComponents = ({ information }) => {
	const data = information;

	// console.log(data);

	const itemInfo = useSelector((state) => state.counter.iteminfo);
	const dispatch = useDispatch();

	return (
		<motion.section
			className="worklist_container"
			id="worklist"
			// viewport={{ amount: "all" }}
			// onViewportEnter={() => {
			// 	document.querySelector("body").classList.add("gray");
			// }}
			// onViewportLeave={() => {
			// 	document.querySelector("body").classList.remove("gray");
			// }}
		>
			<TitleComponents
				title={"Toy Project"}
				subTitle={`다음과 같은<br />작업물들이 있어요!`}
				setInner={true}
				type={"project"}
			/>
			<SubTitleComponents title={"총 4개의 작업물이 있습니다."} />
			<div className="check">
				<div className="worklist_container_inner">
					{data ? (
						data.map((item, key) => {
							return (
								<div
									className="worklist_item"
									key={key}
									onClick={() => {
										dispatch(saveItemInfo(item));
									}}
								>
									<div className="worklist_screenshot_container">
										<img
											className="worklist_screenshot"
											src={item.image[0].url}
											alt="미리보기"
										/>
										<div
											className="info_container"
											style={{
												background: `linear-gradient(180deg,transparent,black+110%)`,
												// background: `linear-gradient(180deg,transparent,${item.color}+110%)`,
											}}
										>
											{/* <img
											src={
												item.category === "팀 프로젝트"
													? SectionProjectTeam
													: SectionProjectSingle
											}
											alt="없음"
										/> */}
											<div className="description">
												{/* <p className="category">
												{item.category ? item.category : "설정 값 없음"}
											</p> */}
												{/* {item.color} */}
												{/* <p className="date">{item.date}</p> */}
											</div>
											<div className="item_desc_container">
												<h2 className="title">
													{item.title ? item.title : "설정 값 없음"}
												</h2>
												<p className="desc">{item.desc}</p>

												<div className="used_skill_container">
													{item.skill.map((item, key) => {
														return <p key={key}>{item.name}</p>;
													})}
												</div>
											</div>
										</div>
										{/* <p className="worklist_date">{item.date}</p> */}
									</div>
								</div>
							);
						})
					) : (
						<>데이터가 없습니다.</>
					)}
				</div>
				<AnimatePresence>
					{Object.keys(itemInfo).length !== 0 && (
						<Desc_section itemInfo={itemInfo} />
					)}
				</AnimatePresence>
			</div>
		</motion.section>
	);
};

export default WorklistComponents;
