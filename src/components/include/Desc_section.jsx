import ScreenshotComponents from "../common/ScreenshotComponents";
// import { useSelector } from "react-redux";
import { saveItemInfo } from "../utils/infoContainerStore";
import { AnimatePresence, motion } from "framer-motion";

import TitleComponents from "../common/TitleComponents";
import { useDispatch } from "react-redux";

const Desc_section = ({ itemInfo }) => {
	const dispatch = useDispatch();
	return (
		<section
			className="desc_container"

			// initial={{ y: 10, opacity: 0 }}
			// animate={{ y: 0, opacity: 1 }}
			// exit={{ y: -10, opacity: 0 }}
			// transition={{ duration: 0.2 }}
		>
			<div className="desc_container_inner">
				{/* <button
					onClick={() => {
						dispatch(saveItemInfo([]));
					}}
				>
					╳
				</button> */}
				<p className="description_title">설명</p>
				<ScreenshotComponents image={itemInfo?.image} />
				<div className="all_container">
					<div className="title_container clearfixed">
						<span>{itemInfo?.title}</span>
						<span>{itemInfo?.date}</span>
					</div>
					<div className="info_container">
						<div className="stack_section">
							<p className="sub_title">사용스택</p>
							<div className="stack_container">
								{itemInfo?.skill?.map((item, key) => {
									return (
										<span className="item" key={key}>
											{item.name}
										</span>
									);
								})}
							</div>
						</div>
						<hr />
						<div className="description_section">
							<p className="sub_title">설명</p>
							<p>
								{itemInfo &&
									itemInfo?.desc?.replace(/(<br>|<br\/>|<br \/>)/g, "\r\n")}
							</p>
						</div>
					</div>
					<div className="activity_container">
						<a href={itemInfo?.github} target="_blank" rel="noreferrer">
							깃허브
						</a>
						<a href={itemInfo?.view} target="_blank" rel="noreferrer">
							보기
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Desc_section;
