import React, { useState, useEffect } from 'react';
import styles from '../Cart/CartList.module.scss';
import { IoCloseSharp, IoCheckmark } from 'react-icons/io5';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Option from '../Cart/Option';

function CartList({ cart, refreshData }) {
  const [isChecked, setIsChecked] = useState(false);
  let quantity = cart.productQuantity;
  const [count, setCount] = useState(quantity);
  const productPrice = cart.productPrice * count;
  const totalPrice = productPrice + cart.addOptionPrice[0];
  const token = localStorage.getItem('token');
  let id = cart.id;

  const handleDelete = async () => {
    await fetch('/carts', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
      body: JSON.stringify({
        id: id,
        quantity: count,
        totalPrice: totalPrice,
      }),
    })
      .then(res => res.json())
      .then(data => data);
  };
  // console.log(cartData)

  useEffect(() => {
    fetch('/carts', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
      body: JSON.stringify({
        id: id,
        quantity: count,
        totalPrice: totalPrice,
      }),
    })
      .then(response => response.json())
      .then(result => result);
  }, [count]);

  const checkProduct = () => {
    setIsChecked(prev => !prev);
  };

  function plusCount() {
    setCount(prev => prev + 1);
  }

  function minusCount() {
    if (count === 1) {
      return 1;
    }
    setCount(prev => prev - 1);
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
            <button className={styles.minus} onClick={minusCount}>
              <FaMinus />
            </button>
            <span className={styles.count}>{count}</span>
            <button className={styles.plus} onClick={plusCount}>
              <FaPlus />
            </button>
          </div>
          <div
            className={styles.delete}
            onClick={async () => {
              await handleDelete();
              await refreshData();
            }}
          >
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
