import React from "react";

import { useState } from "react";

const Alert = (props) => {
  console.log("알림창 온 : ", props);
  const [show, setShow] = useState(false);

  const test = () => {
    setTimeout(() => {
      setShow(false);
    }, props.timer * 1000);
  };
  return (
    <div className={`alert ${show ? `show` : `hide`}`}>
      <span className="alert_description">{props.message}</span>
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
