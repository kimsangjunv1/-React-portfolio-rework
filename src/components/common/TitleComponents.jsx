import React from "react";

import SectionSkill from "./../../assets/img/section_skill.svg";
import SectionProject from "./../../assets/img/section_project.svg";

const TitleComponents = ({ title, subTitle, setInner, type }) => {
	let replace_result = subTitle.replace(/(<br>|<br\/>|<br \/>)/g, "\r\n");
	return (
		<div className="section_title_container">
			<div className={setInner ? "section_title_container_inner" : ""}>
				{/* type에 따른 그림 종류 */}
				<img
					src={
						type === "skill"
							? SectionSkill
							: type === "project"
							? SectionProject
							: ""
					}
					alt={
						type === "skill"
							? "노트북 그림"
							: type === "project"
							? SectionProject
							: ""
					}
				/>
				{/* <p className="section_title">{title}</p> */}
				<p className="section_subTitle">
					{subTitle.replace(/(<br>|<br\/>|<br \/>)/g, "\r\n")}
				</p>
			</div>
		</div>
	);
};

export default TitleComponents;
