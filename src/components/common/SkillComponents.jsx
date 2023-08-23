import React from "react";

const SkillComponents = ({ information }) => {
  const test = (name) => {
    switch (name) {
      // 라이브러리
      case "SCSS":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_sass.png?raw=true";
      case "lenis":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_lenis.png?raw=true";
      case "스와이퍼":
        return "https://github.com/kimsangjunv1/-React-portfolio-rework/blob/main/src/assets/img/skill_swiper.png?raw=true";

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
  console.log("스킬 : ", information);
  const skillInfo = information;
  return (
    <div className="skill_container">
      {skillInfo.map((item, key) => {
        return (
          <div className="skill_section" key={key}>
            <p className="skill_category">{key}라이브러리</p>
            <div className="skill_icon_container">
              {item.list.map((item, key) => {
                return (
                  <img
                    className="skill_item"
                    key={key}
                    src={test(item.name)}
                    alt={Object.values(item.name)}
                  />
                );
                // return <p key={key}>{test(item.name)}</p>;
              })}
            </div>
            {/* 
        <div className="skill_icon_container">
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
        </div> */}
          </div>
        );
      })}

      {/* <div className="skill_section">
        <p className="skill_category">프론트엔드</p>
        <div className="skill_icon_container">
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
        </div>
      </div>
      <div className="skill_section">
        <p className="skill_category">백엔드</p>
        <div className="skill_icon_container">
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
        </div>
      </div>
      <div className="skill_section">
        <p className="skill_category">기타</p>
        <div className="skill_icon_container">
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
        </div>
      </div> */}
    </div>
  );
};

export default SkillComponents;
