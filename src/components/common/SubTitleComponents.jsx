import React from "react";
import IconSubTitleLogo from "./../../assets/img/icon_sub_title_logo.svg";

const SubTitleComponents = ({ title }) => {
	return (
		<div className="section_sub_title_container">
			<img src={IconSubTitleLogo} alt="" />
			<span>{title}</span>
		</div>
	);
};

export default SubTitleComponents;
