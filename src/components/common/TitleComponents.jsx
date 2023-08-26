import React from "react";

const TitleComponents = ({ title, subTitle, setInner }) => {
  return (
    <div className="section_title_container">
      <div className={setInner ? "section_title_container_inner" : ""}>
        <p className="section_title">{title}</p>
        <p className="section_subTitle">{subTitle}</p>
      </div>
    </div>
  );
};

export default TitleComponents;
