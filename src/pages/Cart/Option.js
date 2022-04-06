import React from 'react';
import styles from '../Cart/Option.module.scss';
import { IoCloseSharp } from 'react-icons/io5';

function Option(props) {
  return (
    <li className={styles.optionList}>
      <span>{props.option.addOptionName.map(title => title)}</span>
      {props.option.addOptionPrice.map(price => price)}원
      <div className={styles.optionDelete}>
        <IoCloseSharp />
      </div>
    </li>
  );
}

export default Option;
