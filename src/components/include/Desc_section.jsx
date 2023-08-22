import Screenshot_Container from "../common/Screenshot_Container";
import { useSelector } from "react-redux";

const Desc_section = () => {
  const itemInfo = useSelector((state) => state.counter.iteminfo);

  console.log(Object.keys(itemInfo).length === 0);
  return (
    <div className="desc_section">
      {Object.keys(itemInfo).length !== 0 ? (
        <div className="desc_item">
          <Screenshot_Container />

          <div className="title_container clearfixed">
            <span>{itemInfo.title}</span>
            <span>{itemInfo.date}</span>
          </div>
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
            <a href="#">깃허브</a>
            <a href="#">보기</a>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Desc_section;
