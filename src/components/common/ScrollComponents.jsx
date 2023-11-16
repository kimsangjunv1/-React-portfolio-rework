import React from "react";
import { useEffect } from "react";

const ScrollComponents = ({ scrolled }) => {
	useEffect(() => {
		document.querySelector(".scroll_progress").style.width = scrolled + "%";
	});
	return (
		<div className="scroll_background">
			<div className="scroll_progress">
				<p>꼭 연락부탁드립니다!</p>
			</div>
		</div>
	);
};

export default ScrollComponents;
