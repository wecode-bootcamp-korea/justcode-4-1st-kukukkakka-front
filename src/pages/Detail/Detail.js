import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OperationBtns from './OperationBtns/OperationBtns';
import style from './Detail.module.scss';
import OptionBtn from './OptionBtn/OptionBtn';
import AddedOptionBox from './AddedOptionBox/AddedOptionBox';

function Detail() {
  const [totalPrice, setTotalPrice] = useState(45000);
  const [showOptionItem, setShowOptionItem] = useState({ display: 'none' });

  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };

  const onClickOptionItem = () => {
    showOptionItem.display === 'none'
      ? setShowOptionItem({ display: 'block' })
      : setShowOptionItem({ display: 'none' });
  };
  console.log('optionItemBox display: ', showOptionItem.display);

  return (
    <div className={style.container}>
      <header>
        <div className={style.category}>
          HOME > 꽃다발 > 블루 버터플라이 에디션
        </div>
      </header>
      <main className={style.content}>
        <div className={style.imgBox} />
        <article className={style.detailBox}>
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
            <span className={style.contentTittle}>수량</span>
            <OperationBtns props={setTotalPrice} totalPrice={totalPrice} />
          </div>
          <div className={style.inBox}>
            <div className={style.contentTittle}>추가옵션</div>
            <OptionBtn
              addOptionItem={onClickOptionItem}
              optionItem={showOptionItem}
            />
          </div>
          <div className={style.priceBox}>
            <div>상품가격</div>
            <div>{totalPrice}원</div>
          </div>
          <AddedOptionBox changeStyle={showOptionItem} />
          <div className={style.totalPriceBox}>
            <span>총 주문금액</span>
            <span>{totalPrice}원</span>
          </div>
          <div className={style.contentBtnBox}>
            <button onClick={goToCart}>장바구니</button>
            <button>바로 구매</button>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Detail;
