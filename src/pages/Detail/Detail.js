import React, { useState } from 'react';
import style from './Detail.module.scss';
import OptionBtn from '../components/OptionBtn/OptionBtn';

function Detail() {
  const [count, setcount] = useState(1);

  const operationNum = () => {
    if (count - 1 < 1) return;
    return setcount(count - 1);
  };

  return (
    <div>
      <header />
      <div className={style.container}>
        <div className={style.category}>
          HOME > 꽃다발 > 블루 버터플라이 에디션
        </div>
        <ul className={style.content}>
          <li className={style.imgBox} />
          <li className={style.detailBox}>
            <ul className={style.productInfo}>
              <li> 꽃밭에 앉은 파란 나비</li>
              <li>블루 버터플라이 에디션</li>
              <li>53900원</li>
            </ul>
            <div className={style.eventTittle}>
              회원 구매 시,
              <span>적립금 2000원 증정!</span>
            </div>
            <div className={style.inBox}>
              <div className={style.contentTittle}>수량</div>
              <div className={style.operationButtons}>
                <button className={style.btns} onClick={operationNum}>
                  -
                </button>
                <div className={style.num}> {count} </div>
                <button
                  className={style.btns}
                  onClick={() => setcount(count + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className={style.inBox}>
              <div className={style.contentTittle}>추가옵션</div>
              <OptionBtn />
            </div>
            <div className={style.priceBox}>
              <div>상품가격</div>
              <div>53900원</div>
            </div>
            <div className={style.totalPriceBox}>
              <span>총 주문금액</span>
              <span>69300원</span>
            </div>
            <div className={style.contentBtnBox}>
              <button>장바구니</button>
              <button>바로 구매</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Detail;
