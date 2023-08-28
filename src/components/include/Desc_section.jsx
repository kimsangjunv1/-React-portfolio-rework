import ScreenshotComponents from "../common/ScreenshotComponents";
import { useSelector } from "react-redux";

import TitleComponents from "../common/TitleComponents";

const Desc_section = () => {
  const itemInfo = useSelector((state) => state.counter.iteminfo);
  return (
    <div className="desc_section">
      <TitleComponents title={"''"} subTitle={"''"} />

      {Object.keys(itemInfo).length !== 0 ? (
        <div className="desc_item">
          <ScreenshotComponents image={itemInfo.image} />

          <div className="title_container clearfixed">
            <span>{itemInfo.title}</span>
            <span>{itemInfo.date}</span>
          </div>
          <div className="all_container">
            <div className="desc_container">
              <div className="stack_section">
                <p className="sub_title">사용스택</p>
                <div className="stack_container">
                  {itemInfo.skill.map((item, key) => {
                    return (
                      <span className="item" key={key}>
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </div>
              <hr />
              <div className="description_section">
                <p className="sub_title">설명</p>
                <p>{itemInfo.desc}</p>
              </div>
            </div>
            <div className="activity_container">
              <a href={itemInfo.github} target="_blank" rel="noreferrer">
                깃허브
              </a>
              <a href={itemInfo.view} target="_blank" rel="noreferrer">
                보기
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="desc_item">
          <p className="no_selected_item">
            ;ㅅ;
            <br />
            <br />
            왼쪽에서 메뉴를 선택해주세요
          </p>
        </div>
      )}
    </div>
  );
};

export default Desc_section;
