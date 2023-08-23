import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { saveItemInfo } from "../utils/InfoContainerStore";

import Screenshot from "./../../assets/img/screenshot_01.jpg";

const WorklistComponents = ({ information }) => {
  const data = information;

  const dispatch = useDispatch();
  return (
    <div className="worklist_container">
      {data ? (
        data.map((item, key) => {
          return (
            <div
              className="worklist_item"
              key={key}
              onClick={() => {
                dispatch(saveItemInfo(item));
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
                {item.skill.map((item, key) => {
                  return <p key={key}>{item.name}</p>;
                })}
              </div>
              <div className="item_desc_container">
                <p>{item.category ? item.category : "설정 값 없음"}</p>
                <p>{item.title ? item.title : "설정 값 없음"}</p>
              </div>
            </div>
          );
        })
      ) : (
        <>데이터가 없습니다.</>
      )}
    </div>
  );
};

export default WorklistComponents;
