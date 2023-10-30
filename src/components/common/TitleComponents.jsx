import React from "react";

import SectionSkill from "./../../assets/img/section_skill.svg";
import SectionProject from "./../../assets/img/section_project.svg";
import SectionStudy from "./../../assets/img/section_study.svg";

import section_skill_part_001 from "./../../assets/img/section_skill_part_001.svg";
import section_skill_part_002 from "./../../assets/img/section_skill_part_002.svg";

const TitleComponents = ({ title, subTitle, setInner, type }) => {
	let replace_result = subTitle.replace(/(<br>|<br\/>|<br \/>)/g, "\r\n");
	return (
		<div className="section_title_container">
			<div className={setInner ? "section_title_container_inner" : ""}>
				{type === "skill" && (
					<div className="skill">
						<img src={section_skill_part_001} alt="파트1" />
						<img src={section_skill_part_002} alt="파트2" />
						<img src={SectionSkill} alt="파트2" />
					</div>
				)}
				{type === "study" && (
					<div className="study">
						<img src={SectionStudy} alt="공부" />
					</div>
				)}
				{type === "project" && (
					<div className="project">
						<img src={SectionProject} alt="공부" />
					</div>
				)}

				<p className="section_subTitle">
					{subTitle.replace(/(<br>|<br\/>|<br \/>)/g, "\r\n")}
				</p>
			</div>
		</div>
	);
};

export default TitleComponents;
