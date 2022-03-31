import React, { useState } from 'react';
import style from './OptionBtn.module.scss';

function OptionBtn() {
  return (
    <div>
      <div className={style.optionBtnBox}>
        <button className={style.optionBtn}>
          <div>함께하면 좋은 추천상품</div>
          <i className={style.btnDown}>⌵</i>
        </button>
        <button className={style.hidden_option_btn}>롱 모던 베이직 화병</button>
        <button className={style.hidden_option_btn}>롱 모던 베이직 화병</button>
        <button className={style.hidden_option_btn}>롱 모던 베이직 화병</button>
        <button className={style.hidden_option_btn}>롱 모던 베이직 화병</button>
      </div>
    </div>
  );
}

export default OptionBtn;
