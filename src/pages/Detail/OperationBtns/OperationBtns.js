import React from 'react';
import style from './OperationBtns.module.scss';

function OperationBtns({ plusPrice, count, minusPrice }) {
  return (
    <div className={style.operationButtons}>
      <button className={style.btns} onClick={minusPrice}>
        -
      </button>
      <div className={style.num}> {count} </div>
      <button className={style.btns} onClick={plusPrice}>
        +
      </button>
    </div>
  );
}

export default OperationBtns;
