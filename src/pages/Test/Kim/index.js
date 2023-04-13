import React from "react";
import Accordion from "../../../components/Common/Accordion";
import styles from "./test.module.scss";
import ReviewCard from "../../../components/Common/ReviewCard";

const data = [
  {
    title: "선호 장르는 어디서 바꿀 수 있나요?",
    content:
      "마이페이지 - 프로필 에서 하단에 선호장르를 변경 후 저장하시면 변경 됩니다.",
  },
  {
    title: "제가 쓴 리뷰는 어디서 볼수 있나요?",
    content:
      "마이페이지 - 리뷰&댓글 에서 자신이 쓴 리뷰 혹은 댓글 내용을 확인 하실 수 있습니다.",
  },
  {
    title: "프로필 아이콘은 어디서 바꾸나요?",
    content:
      "마이페이지 - 프로필 에서 아이콘 버튼을 클릭 후 원하는 아이콘 혹은 이미지 를 첨부하여 변경 하실수 있습니다.",
  },
  {
    title: "추가 문의사항은 어디로 문의 하나요?",
    content:
      "기타 문의사항은 마이페이지 - 고객센턴 - 문의하기 버튼을 이용하여 작성해주시면 빠른시일내에 답변을 도와드리겠습니다.",
  },
];

function Kim() {
  return (
    <main className={styles.main}>
      {/* //NOTE: inline-style 지양하는 것이 좋다~ */}
      <div style={{ width: "600px", paddingTop: "100px" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "50px",
          }}
        >
          React Accordion
          {/* FAQ 제목 작성 테스트중  */}
        </h1>
        {/* //NOTE: 같은 컴포넌트(같은 구성을 가지고 있는 컴포넌트)를 여러개 렌더 -> 기능에 따라서 "menu+li" or "ul+li" */}
        <ul className={styles.accordionWrapper}>
          {data.map((item, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>
              <Accordion title={item.title} content={item.content} />
            </li>
          ))}
        </ul>
      </div>
            <ReviewCard />
    </main>
  );
}

export default Kim;
