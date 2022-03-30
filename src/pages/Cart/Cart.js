import React from 'react';
import styles from '../Cart/Cart.module.scss';

function Cart() {
  return (
    <section className={styles.cartSection}>
      <h1 className={styles.title}>장바구니</h1>
      <div className={styles.cartHead}>
        <input type="checkbox" className={styles.checkbox} />
        <p className={styles.info}>상품정보</p>
        <p className={styles.option}>추가상품</p>
        <p className={styles.price}>합계금액</p>
      </div>
      <div className={styles.cartCenter}>
        <input type="checkbox" className={styles.checkbox} />
        <div className={styles.info}>
          <div className={styles.productImg}>
            <img src="" alt="product" />
          </div>
          <div className={styles.productDetail}>
            <h2 className={styles.name}>플라워 샤워 에디션</h2>
            <p className={styles.dueDate}>수령일: 2022-04-01</p>
            <span className={styles.price}>17,000원</span>
            <div className={styles.quantityBox}>
              <button>-</button>
              <span>1</span>
              <button className={styles.plus}>+</button>
            </div>
            <button className={styles.delete}>X</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
