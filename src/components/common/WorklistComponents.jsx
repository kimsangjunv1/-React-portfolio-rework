import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { saveItemInfo } from "../utils/InfoContainerStore";

import Screenshot from "./../../assets/img/screenshot_01.jpg";

import Data from "../utils/data.json";

const WorklistComponents = () => {
  const [workInfo, setWorkInfo] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kimsangjunv1/-React-portfolio-rework/main/src/components/utils/data.json",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("rrrressss: ", res.webstandards);
        setWorkInfo(res.webstandards);
      });
    // .catch((error) => console.log("error", error));
  }, []);
  const dispatch = useDispatch();
  return (
    <div className="worklist_container">
      {workInfo.map((item, key) => {
        return (
          <div
            className="worklist_item"
            key={key}
            onClick={() => {
              dispatch(saveItemInfo("good"));
              console.log("good 전송");
            }}
          >
            <div className="worklist_screenshot_container">
              <img
                className="worklist_screenshot"
                src={Screenshot}
                alt="미리보기"
              />
              <p className="worklist_date">{item.date}</p>
            </div>
            <div className="used_skill_container">
              {/* {item.skill.map((item, key) => {
                return <p key={key}>{item.name}</p>;
              })} */}
              <p></p>
              <p>Redux Toolkit</p>
            </div>
            <div className="item_desc_container">
              <p>{item.category ? item.category : "설정 값 없음"}</p>
              <p>{item.title ? item.title : "설정 값 없음"}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorklistComponents;
