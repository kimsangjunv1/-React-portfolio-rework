import React, { useEffect, useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
import MousePointer from "./../../assets/img/mouse_pointer.svg";
import CursorParticle001 from "./../../assets/img/cursor_particle_001.svg";
import CursorParticle002 from "./../../assets/img/cursor_particle_002.svg";
import { Fragment } from "react";

const Mouse_section = () => {
	const hoho = useRef();
	const particle_001 = useRef();
	const particle_002 = useRef();

	useEffect(() => {
		const moveCursor = () => {
			window.addEventListener("mousemove", (e) => {
				hoho.current.style.left = `${e.pageX}px`;
				hoho.current.style.top = `${e.pageY}px`;
			});
		};
		window.requestAnimationFrame(moveCursor);
	}, []);

	return (
		<Fragment>
			<div
				onMouseOver={() => {
					console.log("오버~");
				}}
			>
				<img
					className="mouse_cursor"
					ref={hoho}
					src={MousePointer}
					alt="마우스 포인터"
					style={{ width: "60px" }}
				/>
			</div>
			<div
				className="cursor_particle_001"
				ref={particle_001}
				//   style={{ position: "absolute", width: "20px" }}
			>
				<img src={CursorParticle001} alt="마우스 포인터 파티클" />
			</div>
			<div
				className="cursor_particle_002"
				ref={particle_002}
				//   style={{ position: "absolute", width: "20px" }}
			>
				<img src={CursorParticle002} alt="마우스 포인터 파티클" />
			</div>
		</Fragment>
	);
};

export default Mouse_section;
