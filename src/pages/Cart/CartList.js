import React, { useState, useEffect } from 'react';
import styles from '../Cart/CartList.module.scss';
import { IoCloseSharp, IoCheckmark } from 'react-icons/io5';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Option from '../Cart/Option';
function CartList({ cart }) {
  const [isChecked, setIsChecked] = useState(false);
  let quantity = cart.productQuantity;

  const [count, setCount] = useState(quantity);

  let value = cart.productPrice;
  let value2 = cart.addOptionPrice[0];

  const [productPrice, setProductPrice] = useState(value);
  const [totalPrice, setTotalPrice] = useState(value2);
  const [userId, setUserId] = useState(cart.productId);
  const token = localStorage.getItem('token');
  const handleCartChange = () => {
    fetch('http://localhost:8000/carts', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
      body: JSON.stringify({
        productId: userId,
        quantity: count + 1,
        totalPrice: totalPrice,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  const checkProduct = () => {
    setIsChecked(prev => !prev);
  };

  useEffect(() => {
    setCount(count);
    setProductPrice(value * count);
    setTotalPrice(value * count + value2);
  }, [count, productPrice, totalPrice]);

  console.log(
    `작동전 count ${count}, productPrice ${productPrice}, totalPrice ${totalPrice}`
  );
  async function plusCount() {
    await setCount(prev => prev + 1);
    console.log('Plus 작동후:', count);
    await setProductPrice(prevPrice => prevPrice + value);
    console.log('productprice 작동후', productPrice);
    await setTotalPrice(prev => prev + value2);
    console.log('totalPrice작동후', totalPrice);
  }
  async function minsCount() {
    if (count === 1) {
      return 1;
    }
    await setCount(prev => prev - 1);
    await setProductPrice(prevPrice => prevPrice + value);
    await setTotalPrice(prevTotal => prevTotal + value + value2);
  }

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
            {productPrice.toLocaleString('en')}
          </span>
          <div className={styles.quantityBox}>
            <button
              className={styles.minus}
              onClick={() => {
                minsCount();
                handleCartChange();
              }}
            >
              <FaMinus />
            </button>
            <span className={styles.count}>{count}</span>
            <button
              className={styles.plus}
              onClick={() => {
                plusCount();
                handleCartChange();
              }}
            >
              <FaPlus />
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
        <p className={styles.price}>{totalPrice.toLocaleString('en')}</p>
        <span className={styles.delivery}>무료배송</span>
      </div>
    </div>
  );
}

export default CartList;
