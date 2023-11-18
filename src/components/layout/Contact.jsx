import React from "react";

import Contact_text from "./../../assets/img/contact_text.svg";
import Contact_bg from "./../../assets/img/contact_bg.svg";
import icon_phone from "./../../assets/img/icon_phone.svg";
import icon_email from "./../../assets/img/icon_email.svg";
import icon_link from "./../../assets/img/icon_link.svg";

const Contact = () => {
	return (
		<section className="contact_container" id="contact">
			<div className="contact_container_inner">
				<img
					className="image_text"
					src={Contact_text}
					alt="연락주세요 이미지 텍스트"
				/>
				{/* <div className="line_container">
					<p>개인정보</p>
					<hr className="line" />
				</div> */}
				<div className="info_container">
					<div className="item">
						<div className="title">
							<img src={icon_phone} alt="" />
							<span>휴대전화</span>
						</div>
						<hr />
						<p>010-6607-7265</p>
					</div>
					<div className="item">
						<div className="title">
							<img src={icon_email} alt="" />
							<span>이메일</span>
						</div>
						<hr />
						<a href="mailto:to_before@naver.com">to_before@naver.com</a>
					</div>
					<div className="item">
						<div className="title">
							<img src={icon_link} alt="" />
							<span>깃허브</span>
						</div>
						<hr />
						<a href="https://github.com/kimsangjunv1">바로가기</a>
					</div>
				</div>
				{/* <img
            className="image_bg"
            src={Contact_bg}
            alt="연락주세요 이미지 배경"
          /> */}
			</div>
		</section>
	);
};

export default Contact;
