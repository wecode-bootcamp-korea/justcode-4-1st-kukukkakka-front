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
  const checkProduct = () => {
    setIsChecked(prev => !prev);
  };
  return <section />;
}

export default Cart;
