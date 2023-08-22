import React from "react";

const TitleComponents = ({ title, subTitle }) => {
  return (
    <div className="section_title_container">
      <p className="section_title">{title}</p>
      <p className="section_subTitle">{subTitle}</p>
    </div>
  );
};

export default TitleComponents;
