import React, { useState } from 'react';
import style from './OptionBtn.module.scss';

function OptionBtn() {
  const [hidden, setHidden] = useState({ display: 'none' });
  const [changeBorder, setChangeBorder] = useState({
    border: '1px solid $gray-color',
  });

  const onClickOptions = () => {
    if (hidden.display === 'none') {
      setHidden({ display: 'block' });
      setChangeBorder({ border: '1px solid #FFCD32' });
    } else {
      setHidden({ display: 'none' });
      setChangeBorder({ border: '1px solid $gray-color' });
    }
    return hidden;
  };

  return (
    <div>
      <div className={style.option_btn_box} style={changeBorder}>
        <button className={style.optionBtn} onClick={onClickOptions}>
          <div>함께하면 좋은 추천상품</div>
          <i className={style.btnDown}>⌵</i>
        </button>
        <ul style={hidden}>
          <li>롱 모던 베이직 화병</li>
          <li>4900원</li>
        </ul>
        <ul style={hidden}>
          <li>선택안함</li>
        </ul>
      </div>
    </div>
  );
}

export default OptionBtn;
