import React, { useState, useEffect } from 'react';
import styles from '../Cart/CartList.module.scss';
import { IoCloseSharp, IoCheckmark } from 'react-icons/io5';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Option from '../Cart/Option';
function CartList({ cart }) {
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(1);

  let value = cart.productPrice;
  let value2 = cart.addOptionPrice[0];

  const [productPrice, setProductPrice] = useState(value);
  const [sumPrice, setSumPrice] = useState(value2);
  const token = localStorage.getItem('token');
  console.log(token);
  const handleCartChange = () => {
    fetch('http://localhost:8000/carts', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
      body: JSON.stringify({
        id: cart.id,
        productQuantity: count,
        totalPrice: sumPrice,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  const checkProduct = () => {
    setIsChecked(prev => !prev);
  };
  useEffect(() => {
    setProductPrice(value);
    setSumPrice(value + value2);

    // setTotalPrice(value);
  }, [value, value2]);
  const plusCount = () => {
    setCount(prev => prev + 1);
    setProductPrice((count + 1) * value);
    setSumPrice((count + 1) * value + value2);
  };
  const minsCount = () => {
    if (count === 1) {
      return 1;
    }
    setCount(prev => prev - 1);
    setProductPrice((count - 1) * value);
    setSumPrice((count - 1) * value + value2);
  };

  useEffect(() => {}, [cart]);
  return (
    <div className={styles.cartItem} onClick={handleCartChange}>
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
            {/* {cart.productPrice.toLocaleString('en')}원 */}
            {productPrice}
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
        <p className={styles.price}>{sumPrice}</p>
        <span className={styles.delivery}>무료배송</span>
      </div>
    </div>
  );
}

export default CartList;
