import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div>
      <p>M-archive</p>
      <ul>
        <li>
          김희환 | 깃헙주소 https://github.com/BlankCodeStack | 트위터 :
          @blankcodestack | 활동시간 09:00 ~ 03 : 00 | 주말 공휴일 휴무 |
          취업하고 싶다 .{" "}
        </li>
        <li>
          문상희 | 깃헙주소 | 일하고 싶다.... |교육서비스 제공자 : 코드스테이츠
          ABC - Lab 프론트엔드 개발자 양성 부트 캠프
        </li>
        <li>
          임신영 | 깃헙주소 https://github.com/ImSinYeong | 하루 하루 행복하게
          *^_^*
        </li>
        <li>
          조상우 | 깃헙주소 https://github.com/chepchep2 | 모두들 파이팅입니다.
          성우인생굳
        </li>
        <li>
          서진주 | 깃헙주소 https://github.com/jinjuseo | 인생은 즐겁게...
          아침형 인간으로 바뀌는 중 입니다.
        </li>
        <li>
          <a
            href="https://www.flaticon.com/kr/free-icons/"
            title="캐릭터 아이콘"
          >
            캐릭터 아이콘 제작자: Vitaly Gorbachev - Flaticon
          </a>
        </li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
