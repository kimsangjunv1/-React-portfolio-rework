import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SkillComponents = ({ information }) => {
  const [title, setTitle] = useState("없음");
  const [desc, setDesc] = useState("설명이 없습니다");
  const test = (name) => {
    switch (name) {
      // 라이브러리
      case "SCSS":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_sass.png?raw=true";
      case "Lenis":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_lenis.png?raw=true";
      case "스와이퍼":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_swiper.png?raw=true";
      case "Framer":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_framer.png?raw=true";

      // 프론트엔드
      case "리액트":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_react.png?raw=true";
      case "스벨트":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_svelte.png?raw=true";
      case "뷰":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_vue.png?raw=true";

      // 백엔드
      case "PHP":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_php.png?raw=true";
      case "MySQL":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_mysql.png?raw=true";

      // 기타
      case "Redux Toolkit":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_redux.png?raw=true";
      case "Styled-components":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_styledcomponents.png?raw=true";
      case "Zustand":
        return "성공";

      // etc
      case "Zeplin":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_zeplin.png?raw=true";
      case "Figma":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_figma.png?raw=true";
      case "Jira":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_jira.png?raw=true";
      case "Slack":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_slack.png?raw=true";
      case "Gitlab":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_gitlab.png?raw=true";
      case "Github":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_github.png?raw=true";

      default:
        return "없음";
    }
  };
  const skillInfo = information;

  // 옵저버
  useEffect(() => {
    // 화면 영역 기준으로 클래스 붙여주는 함수
    const skillEffect = () => {
      const boxes = document.querySelectorAll(".skill_item");
      const option = {
        root: null, //viewport
        rootMargin: "0px",
        threshold: 0.5, // 50%가 viewport에 들어와 있어야 callback 실행
      };
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      };
      const observer = new IntersectionObserver(callback, option);

      boxes.forEach((box) => observer.observe(box));
    };
  });
  return (
    <motion.div
      className="skill_container"
      onViewportEnter={() => {
        document.querySelector("body").classList.add("dark");
      }}
      onViewportLeave={() => {
        document.querySelector("body").classList.remove("dark");
      }}
    >
      <div className="skill_desc_container">
        <h2 className="skill_name">{title}</h2>
        <p className="skill_desc">{desc}</p>
      </div>
      <div className="skill_container_inner">
        <div className="bg_round">
          {skillInfo.map((item, key) => {
            return (
              <>
                {key === 0 || key === 2 ? (
                  <div className="skill_section" key={key}>
                    <p className="skill_category">
                      {key === 0 ? "라이브러리" : "백엔드"}
                    </p>
                    <div className="skill_icon_container">
                      {item.list.map((item, key) => {
                        return (
                          <img
                            className="skill_item"
                            key={key}
                            src={test(item.name)}
                            alt={Object.values(item.name)}
                            onMouseOver={() => {
                              setTitle(item.name);
                              setDesc(item.desc);
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
        <div className="bg_round">
          {skillInfo.map((item, key) => {
            return (
              <>
                {key === 1 ? (
                  <div className="skill_section" key={key}>
                    <p className="skill_category">프론트</p>
                    <div className="skill_icon_container">
                      {item.list.map((item, key) => {
                        return (
                          <img
                            className="skill_item"
                            key={key}
                            src={test(item.name)}
                            alt={Object.values(item.name)}
                            onMouseOver={() => {
                              setTitle(item.name);
                              setDesc(item.desc);
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
        <div className="bg_round">
          {skillInfo.map((item, key) => {
            return (
              <>
                {key === 4 ? (
                  <div className="skill_section" key={key}>
                    <p className="skill_category">{key === 4 ? "기타" : ""}</p>
                    <div className="skill_icon_container">
                      {item.list.map((item, key) => {
                        return (
                          <img
                            className="skill_item"
                            key={key}
                            src={test(item.name)}
                            alt={Object.values(item.name)}
                            onMouseOver={() => {
                              setTitle(item.name);
                              setDesc(item.desc);
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillComponents;
