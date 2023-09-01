import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { useDispatch } from "react-redux";
import { saveItemInfo } from "../utils/infoContainerStore";

import Screenshot from "./../../assets/img/screenshot_01.jpg";

const WorklistComponents = ({ information }) => {
  const data = information;

  const dispatch = useDispatch();

  return (
    <div className="worklist_container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="worklist_container_inner"
      >
        {data ? (
          data.map((item, key) => {
            return (
              <SwiperSlide
                className="worklist_item"
                key={key}
                onClick={() => {
                  dispatch(saveItemInfo(item));
                }}
              >
                <div className="worklist_screenshot_container">
                  <img
                    className="worklist_screenshot"
                    src={item.image[0].url}
                    alt="미리보기"
                  />
                  <div className="info_container">
                    <p className="category">
                      {item.category ? item.category : "설정 값 없음"}
                    </p>
                    <p className="date">{item.date}</p>
                  </div>
                  {/* <p className="worklist_date">{item.date}</p> */}
                </div>
                <div className="item_desc_container">
                  <h2 className="title">
                    {item.title ? item.title : "설정 값 없음"}
                  </h2>

                  <div className="used_skill_container">
                    {item.skill.map((item, key) => {
                      return <p key={key}>{item.name}</p>;
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <>데이터가 없습니다.</>
        )}
      </Swiper>
    </div>
  );
};

export default WorklistComponents;
