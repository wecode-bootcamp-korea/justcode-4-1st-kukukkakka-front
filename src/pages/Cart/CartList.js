import React, { useEffect, useState } from 'react';
import styles from '../Cart/CartList.module.scss';
import { IoCloseSharp, IoCheckmark } from 'react-icons/io5';
import { FaPlus, FaMinus } from 'react-icons/fa';

function CartList(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(1);

  useEffect('/', () => {});

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

  const deleteItem = () => {
    console.log('clicked');
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
          <div className={styles.delete} onClick={deleteItem}>
            <IoCloseSharp />
          </div>
        </div>
      </div>
      <div className={styles.optionBox}>
        <ul>
          {[1, 2, 3, 4].map(li => (
            <li>
              편지 2,500원
              <div className={styles.delete}>
                <IoCloseSharp key={li.index} />
              </div>
            </li>
          ))}
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
