import React, { useState } from 'react';
import styles from '../Cart/Cart.module.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
  IoCloseSharp,
  IoCheckmark,
  IoAlertCircleOutline,
} from 'react-icons/io5';

function Cart() {
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(1);
  const checkProduct = () => {
    setIsChecked(prev => !prev);
  };

  const plusCount = () => {
    setCount(prev => prev + 1);
    console.log(count);
  };

  const minsCount = () => {
    if (count === 1) {
      return 1;
    }
    setCount(prev => prev - 1);
  };
  return (
    <section className={styles.cartSection}>
      <h1 className={styles.title}>장바구니</h1>
      <div className={styles.cartHead}>
        <div className={styles.totalCheck}>
          <IoCheckmark className={styles.unchecked} />
        </div>
        <p className={styles.info}>상품정보</p>
        <p className={styles.option}>추가상품</p>
        <p className={styles.price}>합계금액</p>
      </div>
      <div className={styles.cartCenter}>
        <div className={styles.cartItem}>
          <div className={styles.checkbox}>
            <IoCheckmark
              onClick={checkProduct}
              className={
                isChecked ? `${styles.checked}` : `${styles.unchecked}`
              }
            />
          </div>
          <div className={styles.infoBox}>
            <div className={styles.productImg}>
              <img src="https://ifh.cc/g/2zkV3j.jpg" alt="product" />
            </div>
            <div className={styles.productDetail}>
              <h2 className={styles.name}>코랄 로즈 에디션</h2>
              <p className={styles.dueDate}>수령일: 2022-04-01</p>
              <span className={styles.price}>17,000원</span>
              <div className={styles.quantityBox}>
                <button>
                  <FaMinus onClick={minsCount} />
                </button>
                <span className={styles.count}>{count}</span>
                <button className={styles.plus}>
                  <FaPlus onClick={plusCount} />
                </button>
              </div>
              <div className={styles.delete}>
                <IoCloseSharp />
              </div>
            </div>
          </div>
          <div className={styles.optionBox}>
            <ul>
              <li>
                편지 2,500원
                <div className={styles.delete}>
                  <IoCloseSharp />
                </div>
              </li>
              <li>
                편지 2,500원
                <div className={styles.delete}>
                  <IoCloseSharp />
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.priceBox}>
            <p className={styles.price}>69,300원</p>
            <span className={styles.delivery}>무료배송</span>
          </div>
        </div>
      </div>
      <div className={styles.noticeBox}>
        <span>
          <IoAlertCircleOutline />
          구매전 확인해주세요
        </span>
        <p>
          - 구매 금액 합산 30,000원 이상일 경우, 배송비는 무료입니다. (단,
          [정기구독], [무료배송] 상품은 구매금액 합산에 포함되지 않습니다.)
        </p>
        <p>
          - [정기구독] 상품의 첫 번째 발송일에 일반 택배 상품을 함께 구매하실
          경우, 중복 배송비는 부분 환불 처리해 드립니다.
        </p>
      </div>
      <div className={styles.totalBox}>
        <p className={styles.amount}>
          총 주문금액<span>69,300원</span>
          <em>+</em>
        </p>
        <p className={styles.amount}>
          배송비 <span>0원</span>
          <em>=</em>
        </p>
        <p className={styles.totalPrice}>총 결제금액 69,300원</p>
      </div>

      <div className={styles.purchase}>구매하기</div>
    </section>
  );
}

export default Cart;
