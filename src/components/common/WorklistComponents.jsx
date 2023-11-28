import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { saveItemInfo } from "../utils/infoContainerStore";

import toy_icon_pick from "./../../assets/img/toy_icon_pick.svg";
import toy_icon_playground from "./../../assets/img/toy_icon_playground.svg";
import toy_icon_gguda from "./../../assets/img/toy_icon_gguda.svg";
import toy_icon_portfolio from "./../../assets/img/toy_icon_portfolio.svg";
import toy_icon_portfolio2 from "./../../assets/img/toy_icon_portfolio2.svg";

import Desc_section from "./../include/Desc_section";
import Screenshot from "./../../assets/img/screenshot_01.jpg";

import SectionProjectSingle from "./../../assets/img/section_project_single.svg";
import SectionProjectTeam from "./../../assets/img/section_project_team.svg";
import TitleComponents from "./TitleComponents";
import SubTitleComponents from "./SubTitleComponents";

const WorklistComponents = ({ information, mobile }) => {
  const [visible, setVisible] = useState(false);
  const data = information;

  // useEffect(() => {
  // 	console.log("asd");
  // 	console.log("information : ", information);
  // 	console.log("mobile : ", mobile);
  // 	// console.log("mobile : ", mobile);
  // 	return () => {
  // 		dispatch(saveItemInfo(information[0]));
  // 		console.log("itemInfo : ", itemInfo.length);
  // 	};
  // }, [information]);

  const itemInfo = useSelector((state) => state.counter.iteminfo);
  const dispatch = useDispatch();

  const getIconImg = (name) => {
    switch (name) {
      case "PlayGround":
        return toy_icon_playground;
      case "Pick":
        return toy_icon_pick;

      case "라마의 여행":
        return toy_icon_portfolio;

      case "꾸다":
        return toy_icon_gguda;
      case "포트폴리오":
        return toy_icon_portfolio2;

      default:
        break;
    }
  };
  const elapsedTime = (date) => {
    const start = new Date(date);
    const end = new Date();

    const diff = (end - start) / 1000;

    const times = [
      { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
      { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
      { name: "일", milliSeconds: 60 * 60 * 24 },
      { name: "시간", milliSeconds: 60 * 60 },
      { name: "분", milliSeconds: 60 },
    ];

    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds);

      if (betweenTime > 0) {
        return `${betweenTime}${value.name} 전`;
      }
    }
    return "방금 전";
  };

  return (
    <motion.section
      className="worklist_container"
      id="worklist"
      whileInView={{
        opacity: [0, 1],
        translateX: [-200, 0],
        // translateY: [0, 0],
        transition: { delay: 0.3, transition: 0.5 },
      }}
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
        subTitle={`TOY PROJECT`}
        setInner={true}
        type={"project"}
      />
      <SubTitleComponents title={"직접 디자인 하고 제작하였습니다!"} />
      <div className="worklist_container_inner">
        {!mobile ? (
          <div className={`worklist_item_container`}>
            {data ? (
              data.map((item, key) => {
                return (
                  <div
                    className="worklist_item"
                    key={key}
                    onLoad={() => {
                      dispatch(saveItemInfo(information[0]));
                    }}
                    onClick={() => {
                      dispatch(saveItemInfo(item));
                    }}
                  >
                    {/* <img
											className="worklist_screenshot"
											src={item.image[0].url}
											alt="미리보기"
										/> */}
                    <div
                      className="info_container"
                      style={
                        {
                          // background: `linear-gradient(180deg,transparent,black+110%)`,
                        }
                      }
                    >
                      <img src={getIconImg(item.title)} alt="" />
                      <div className="item_desc_container">
                        <div className="title_container">
                          <h2 className="title">
                            {item.title ? item.title : "설정 값 없음"}
                          </h2>
                          <div className="date">
                            <p>
                              {item.title != "꾸다"
                                ? elapsedTime(item.date)
                                : "제작중"}
                            </p>
                            <p>{item.date}</p>
                          </div>
                          {/* <p className="elapsedTime">{elapsedTime(item.date)}</p> */}
                        </div>
                        <p className="desc">
                          {item &&
                            item.desc.replace(/(<br>|<br\/>|<br \/>)/g, "\r\n")}
                        </p>

                        <div className="used_skill_container">
                          {item.skill.map((item, key) => {
                            return <p key={key}>{item.name}</p>;
                          })}
                        </div>
                      </div>
                    </div>
                    {/* <p className="worklist_date">{item.date}</p> */}
                  </div>
                );
              })
            ) : (
              <>데이터가 없습니다.</>
            )}
          </div>
        ) : (
          <div
            className={`mobile_worklist_item_container ${
              visible ? "show" : "hide"
            }`}
          >
            <p className="mobile_menu_title">메뉴</p>
            <div className="item_container">
              {data ? (
                data.map((item, key) => {
                  return (
                    <div
                      className="worklist_item"
                      key={key}
                      // onLoadedData={() => {
                      // 	dispatch(saveItemInfo(information[0]));
                      // }}
                      onClick={() => {
                        dispatch(saveItemInfo(item));
                      }}
                    >
                      <h2 className="title">
                        {item.title ? item.title : "설정 값 없음"}
                      </h2>
                    </div>
                  );
                })
              ) : (
                <>데이터가 없습니다.</>
              )}
            </div>
            <button
              className="close_menu_btn"
              onClick={() => {
                setVisible(false);
              }}
            >
              닫기
            </button>
          </div>
        )}
        {/* <AnimatePresence>
					{Object.keys(itemInfo).length !== 0 && (
						<Desc_section itemInfo={itemInfo} />
					)}
				</AnimatePresence> */}
        {/* <Desc_section itemInfo={itemInfo} /> */}
        <Desc_section itemInfo={itemInfo} />
        {/* {Object.keys(itemInfo).length !== 0 ? (
					<Desc_section itemInfo={itemInfo} />
				) : (
					<div className="desc_container no_item"></div>
				)} */}
      </div>
      {mobile && (
        <div
          className={`menu_btn ${visible ? "hide" : "show"}`}
          onClick={() => {
            setVisible(true);
          }}
        >
          메뉴
        </div>
      )}
    </motion.section>
  );
};

export default WorklistComponents;
