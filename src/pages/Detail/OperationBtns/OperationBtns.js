import React, { useState } from 'react';
import style from './OperationBtns.module.scss';

function OperationBtns({ props, totalPrice }) {
  const [count, setCount] = useState(1);

  const minusPrice = () => {
    if (count - 1 < 1) return;
    setCount(count - 1);
    props(totalPrice / count);
  };

  const plusPrice = () => {
    setCount(count + 1);
    props((count + 1) * totalPrice);
  };

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
