import React, { useState } from 'react';
import OperationBtns from '../OperationBtns/OperationBtns';
import style from './AddedOptionBox.module.scss';

function AddedOptionBox({ changeStyle, deleteItem, optionPrice }) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <div className={style.priceBox} style={changeStyle}>
        <ul>
          <li>추가상품: </li>
          <li className={style.closeBox}>
            <button className={style.closeBtn} onClick={deleteItem}>
              X
            </button>
          </li>
        </ul>
        <ul>
          <OperationBtns count={count} />
          <li>{optionPrice}원</li>
        </ul>
      </div>
    </div>
  );
}
export default AddedOptionBox;
