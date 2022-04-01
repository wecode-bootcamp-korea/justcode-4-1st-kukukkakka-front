import React, { useState } from 'react';
import OperationBtns from '../OperationBtns/OperationBtns';
import style from './AddedOptionBox.module.scss';

function AddedOptionBox(display) {
  return (
    <div>
      <div className={style.priceBox} style={display.display}>
        <ul>
          <li>추가상품: </li>
          <li className={style.closeBox}>
            <button className={style.closeBtn}>X</button>
          </li>
        </ul>
        <ul>
          <OperationBtns />
          <li>2500 원</li>
        </ul>
      </div>
    </div>
  );
}
export default AddedOptionBox;
