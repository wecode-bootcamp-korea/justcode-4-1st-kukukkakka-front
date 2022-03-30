import React from 'react';
import styles from '../Cart/Cart.module.scss';

function Cart() {
  return (
    <section className={styles.cartSection}>
      <h1 className={styles.title}>장바구니</h1>
      <div className={styles.head}>
        <div className={styles.checkBox}>
          <button className={styles.check} />
        </div>
        <div className={styles.productInfo}>상품정보</div>
        <div className={styles.addItem}>추가상품</div>
        <div className={styles.totalPrice}>합계금액</div>
      </div>
    </section>
  );
}

export default Cart;
