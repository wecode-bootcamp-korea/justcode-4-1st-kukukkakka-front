import React from 'react';
import style from './Detail.module.scss';

function Detail() {
  return (
    <div>
      {/* <header>
        <Nav />
      </header> */}
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
                <button className={style.btns}> - </button>
                <div className={style.num}> 1 </div>
                <button className={style.btns}>+</button>
              </div>
            </div>
            <div className={style.inBox}>
              <div className={style.contentTittle}>추가옵션</div>
              <div className={style.optionBtnBox}>
                <nav className={style.optionBtn}>
                  <div>함께하면 좋은 추천상품</div>
                  <i className={style.btnDown}>⌵</i>
                </nav>
              </div>
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
