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
        <div className={style.detailBox}>
          <div className={style.imgBox} />
          <div className={style.discriptionBox}>
            <ul>
              <li className={style.description}> 꽃밭에 앉은 나비</li>
              <li className={style.tittle}>블루 버터플라이 에디션</li>
              <li className={style.tittlePrice}>53900원</li>
            </ul>
            <div className={style.eventTittle}>
              3만원 이상 구매 시,
              <span className={style.highlight}>무료배송!</span>
            </div>
            <div className={style.quantityBox}>
              <div className={style.optionTittle}>수량</div>
              <div>
                <button className={style.minusBtn}> - </button>
                <div> 1 </div>
                <button className={style.plusBtn}> + </button>
              </div>
              <div className={style.eventTittle}>
                <div className={style.optionTittle}>추가옵션</div>
                <button>함께하면 좋은 추천상품</button>
              </div>
              <div className={style.priceBox}>
                <div>상품가격상품가격</div>
                <div>53900원</div>
                <div className={style.totalPriceBox}>
                  <div>총 주문금액</div>
                  <div>69300원</div>
                </div>
                <div className={style.btnBox}>
                  <button>장바구니</button>
                  <button>바로 구매</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
