import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import MousePointer from "./../../assets/img/mouse_pointer.svg";
import CursorParticle001 from "./../../assets/img/cursor_particle_001.svg";
import CursorParticle002 from "./../../assets/img/cursor_particle_002.svg";
import { Fragment } from "react";

const Mouse_section = () => {
	const hoho = useRef();
	const particle_001 = useRef();
	const particle_002 = useRef();

	useEffect(() => {
		//  마우스
		if (!window.matchMedia("screen and (max-width: 1024px)").matches) {
			window.addEventListener("mousemove", (e) => {
				gsap.to(hoho.current, {
					duration: 0.2,
					left: e.pageX - 5,
					top: e.pageY - 5,
				});
				gsap.to(particle_001.current, {
					duration: 0.8,
					left: e.pageX - 15,
					top: e.pageY - 15,
				});
				gsap.to(particle_002.current, {
					duration: 1.2,
					left: e.pageX - 20,
					top: e.pageY - 20,
				});
			});
			window.addEventListener("onmouseover", (e) => {
				console.log("작동", e);
				gsap.to(hoho.current, {
					duration: 0.8,
					scale: 1.1,
				});
			});
			console.log(
				"실행",
				!window.matchMedia("screen and (max-width: 1024px)").matches
			);
		}
	});

	return (
		<Fragment>
			<div
				className="mouse_cursor"
				ref={hoho}
				//   style={{ position: "absolute", width: "20px" }}
				onMouseOver={() => {
					console.log("오버~");
				}}
			>
				<img src={MousePointer} alt="마우스 포인터" style={{ width: "60px" }} />
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
