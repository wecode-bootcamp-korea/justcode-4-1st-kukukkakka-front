import React, { useEffect, useState } from 'react';
import styles from '../Cart/Cart.module.scss';
import { IoCheckmark, IoAlertCircleOutline } from 'react-icons/io5';
import CartList from './CartList';

function Cart() {
  const token = localStorage.getItem('token');
  const [cartData, setCartData] = useState({ userCart: [] });

  // const deleteItem = () => {
  //   fetch('http://localhost:8000/carts', {
  //     method: 'delete',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       token: token,
  //     },
  //     body: JSON.stringify({
  //       productId: productId,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => setProductId(data));
  // };

  // const deleteSelectedItem = id => {
  //   const filterItem = cartData.userCart.filter(item => item.id !== id);
  //   setProductId(filterItem);
  // };
  useEffect(() => {
    fetch('http://localhost:8000/carts', {
      headers: {
        token: token,
        headers: {
          'Content-Type': 'application/json',
          token: token,
        },
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartData(data);
      });
  }, []);

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
        {cartData.userCart.map(cart => (
          <CartList key={cart.id} cart={cart} cartData={cartData} />
        ))}
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
