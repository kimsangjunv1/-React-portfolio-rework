import Screenshot_Container from "../common/Screenshot_Container";
import { useSelector } from "react-redux";

const Desc_section = () => {
  const itemInfo = useSelector((state) => state.counter.iteminfo);
  // console.log("artistid : ", artistid);
  return (
    <div className="desc_section">
      <Screenshot_Container />

      <div className="title_container clearfixed">
        <span>넷마블 리워크</span>
        <span>2022.09.09</span>
      </div>
      <div className="desc_container">
        <div className="stack_section">
          <p className="sub_title">사용스택</p>
          <div className="stack_container">
            <span className="item">React</span>
            <span className="item">Redux Toolkit</span>
          </div>
        </div>
        <hr />
        <div className="description_section">
          <p className="sub_title">설명</p>
          <p>
            넷마블은 변화하는 홈페이지 이용 환경에 맞춘 이번 개편으로 사용자가
            원하는 정보와 서비스를 제공하고 더욱 넓어진 화면 및 심플한
            디자인으로 보다 편리하게 이용할 수 있도록 했다. 또한 게임을 보다
            쉽게 찾을 수 있도록 온라인게임과 모바일게임 영역을 구분하고 게임정보
            및 이벤트 등 다양한 소식을 한눈에 확인할 수 있는 넷마블 소식 코너를
            신설했다. 특히 친구 초대, 게임별 게시판 등을 적용해 모바일 게임에
            대한 커뮤니케이션을 강화했다. 모바일 사용자를 위한 최적화 작업도
            끝마쳤다. 모바일 이용자가 급증하고 있는 환경에 있어서 방문자들은
            데스크톱, 스마트폰, 태블릿 PC 등 접속 방법에 상관없이 각 기기에
            최적화 된 홈페이지 이용이 가능하다.
          </p>
        </div>
      </div>
      <div className="activity_container">
        {itemInfo ? itemInfo : ""}
        <a href="#">깃허브</a>
        <a href="#">보기</a>
      </div>
    </div>
  );
};

export default Desc_section;
