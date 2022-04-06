import React, { useEffect, useState } from 'react';
import styles from '../Cart/CartList.module.scss';
import { IoCloseSharp, IoCheckmark } from 'react-icons/io5';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Option from '../Cart/Option';
function CartList({ cart }) {
  console.log(cart);
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(1);
  console.log(cart.addOptionName);
  // const mytoken =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjksImlhdCI6MTY0OTIzMDQyMn0.XYN20e8Kv1xMCMx4nzSn0MtaM87ehaYEEZrevAEfsfA';
  // const handleCartChange = () => {
  //   fetch('/carts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: mytoken,
  //     },
  //     body: JSON.stringify({
  //       productQuantity: count,
  //       totalPrice: '',
  //       addOptionPrice: '',
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log('result : ', result));
  // };

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
    <div className={styles.cartItem}>
      <div className={styles.checkbox}>
        <IoCheckmark
          onClick={checkProduct}
          className={isChecked ? `${styles.checked}` : `${styles.unchecked}`}
        />
      </div>
      <div className={styles.infoBox}>
        <div className={styles.productImg}>
          <img src={cart.imageUrl} alt="product" />
        </div>
        <div className={styles.productDetail}>
          <h2 className={styles.name}>{cart.productName}</h2>
          <p className={styles.dueDate}>수령일: 2022-04-01</p>
          <span className={styles.price}>
            {cart.productPrice.toLocaleString('en')}원
          </span>
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
          <Option option={cart} />
        </ul>
      </div>
      <div className={styles.priceBox}>
        <p className={styles.price}>69,300원</p>
        <span className={styles.delivery}>무료배송</span>
      </div>
    </div>
  );
}

export default CartList;
