import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { saveItemInfo } from "../utils/InfoContainerStore";

import Screenshot from "./../../assets/img/screenshot_01.jpg";

import Data from "../utils/data.json";

const WorklistComponents = () => {
  useEffect(() => {
    fetch("../utils/data.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("rrrressss: ", res);
      });

    // return () => {
    //   second;
    // };
  }, []);
  const dispatch = useDispatch();
  return (
    <div className="worklist_container">
      <div
        className="worklist_item"
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
          <p className="worklist_date">2023.08.18</p>
        </div>
        <div className="used_skill_container">
          <p>React</p>
          <p>Redux Toolkit</p>
        </div>
        <div className="item_desc_container">
          <p>프론트엔드</p>
          <p>꾸다 - PHP 토이프로젝트</p>
        </div>
      </div>
      <div
        className="worklist_item"
        onClick={() => {
          dispatch(saveItemInfo("bad boy"));
          console.log("good 전송");
        }}
      >
        <div className="worklist_screenshot_container">
          <img
            className="worklist_screenshot"
            src={Screenshot}
            alt="미리보기"
          />
          <p className="worklist_date">2023.08.18</p>
        </div>
        <div className="used_skill_container">
          <p>React</p>
          <p>Redux Toolkit</p>
        </div>
        <div className="item_desc_container">
          <p>프론트엔드</p>
          <p>꾸다 - PHP 토이프로젝트</p>
        </div>
      </div>
      <div className="worklist_item">
        <div className="worklist_screenshot_container">
          <img
            className="worklist_screenshot"
            src={Screenshot}
            alt="미리보기"
          />
          <p className="worklist_date">2023.08.18</p>
        </div>
        <div className="used_skill_container">
          <p>React</p>
          <p>Redux Toolkit</p>
        </div>
        <div className="item_desc_container">
          <p>프론트엔드</p>
          <p>꾸다 - PHP 토이프로젝트</p>
        </div>
      </div>
      <div className="worklist_item">
        <div className="worklist_screenshot_container">
          <img
            className="worklist_screenshot"
            src={Screenshot}
            alt="미리보기"
          />
          <p className="worklist_date">2023.08.18</p>
        </div>
        <div className="used_skill_container">
          <p>React</p>
          <p>Redux Toolkit</p>
        </div>
        <div className="item_desc_container">
          <p>프론트엔드</p>
          <p>꾸다 - PHP 토이프로젝트</p>
        </div>
      </div>
      <div className="worklist_item">
        <div className="worklist_screenshot_container">
          <img
            className="worklist_screenshot"
            src={Screenshot}
            alt="미리보기"
          />
          <p className="worklist_date">2023.08.18</p>
        </div>
        <div className="used_skill_container">
          <p>React</p>
          <p>Redux Toolkit</p>
        </div>
        <div className="item_desc_container">
          <p>프론트엔드</p>
          <p>꾸다 - PHP 토이프로젝트</p>
        </div>
      </div>
    </div>
  );
};

export default WorklistComponents;
