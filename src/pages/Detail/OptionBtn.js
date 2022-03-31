import React, { useState } from 'react';
import style from './OptionBtn.module.scss';

function OptionBtn() {
  const [hidden, setHidden] = useState({ display: 'none' });

  function onClickOptions() {
    hidden === { display: 'block' }
      ? setHidden({ display: 'none' })
      : setHidden({ display: 'block' });
  }
  console.log('hidden : ', hidden);
  return (
    <div>
      <div className={style.option_btn_box}>
        <button className={style.optionBtn} onClick={onClickOptions}>
          <div>함께하면 좋은 추천상품</div>
          <i className={style.btnDown}>⌵</i>
        </button>
        <ul style={hidden}>
          <li>롱 모던 베이직 화병</li>
          <li>4900원</li>
        </ul>
        <ul style={hidden}>
          <li>롱 모던 베이직 화병</li>
          <li>4900원</li>
        </ul>
      </div>
    </div>
  );
}

export default OptionBtn;
