import React, { useState } from 'react';
import style from './OptionBtn.module.scss';

function OptionBtn() {
  const [option, setOption] = useState({});
  return (
    <div>
      <div className={style.optionBtnBox}>
        <button className={style.optionBtn}>
          <div>함께하면 좋은 추천상품</div>
          <i className={style.btnDown}>⌵</i>
        </button>
      </div>
    </div>
  );
}

export default OptionBtn;
