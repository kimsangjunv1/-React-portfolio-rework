import React from "react";

import { useState } from "react";

const Alert = () => {
  const [timer, setTimer] = useState(3);

  const test = () => {
    alert("클릭되었습니다");
  };
  return (
    <div className="alert">
      <span className="alert_description">이동되었습니다</span>
      <button
        className="close_btn"
        onClick={() => {
          test();
        }}
      >
        닫기
      </button>
    </div>
  );
};

export default Alert;
