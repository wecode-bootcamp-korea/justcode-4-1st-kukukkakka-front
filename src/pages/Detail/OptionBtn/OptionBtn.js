import React, { useState } from 'react';
import style from './OptionBtn.module.scss';

function OptionBtn({
  optionPrice,
  text,
  changeBorder,
  optionList,
  onClickOptionToggle,
  selectItem,
  notSelectItem,
}) {
  return (
    <div>
      <div className={style.option_btn_box} style={changeBorder}>
        <button className={style.optionBtn} onClick={onClickOptionToggle}>
          <div>{text}</div>
          <i className={style.btnDown}>⌵</i>
        </button>
        <ul style={optionList} onClick={selectItem}>
          <li>롱 모던 베이직 화병</li>
          <li>{optionPrice}원</li>
        </ul>
        <ul style={optionList} onClick={notSelectItem}>
          <li>선택안함</li>
        </ul>
      </div>
    </div>
  );
}

export default OptionBtn;
