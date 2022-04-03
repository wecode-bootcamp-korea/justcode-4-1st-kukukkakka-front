import React, { useState } from 'react';
import style from './OptionBtn.module.scss';

function OptionBtn({ addOptionItem, optionItem }) {
  const [hidden, setHidden] = useState({ display: 'none' });
  const [changeText, setChangeText] = useState('함께하면 좋은 추천상품');
  const [changeBorder, setChangeBorder] = useState({
    border: '1px solid $gray-color',
  });

  const selectItem = () => {
    addOptionItem();
    setHidden({ display: 'none' });
    setChangeBorder({ border: '1px solid #b1b1b1' });
    optionItem.display === 'block'
      ? setChangeText('함께하면 좋은 추천상품')
      : setChangeText('롱 모던 베이직 화분');
  };

  console.log('optionItemBox display in OptionBtn: ', optionItem.display);

  const notSelectItem = () => {
    setChangeText('선택안함');
    setHidden({ display: 'none' });
    optionItem.display === 'block' && addOptionItem();
  };

  const onClickOptionToggle = () => {
    if (hidden.display === 'none') {
      setHidden({ display: 'block' });
      setChangeBorder({ border: '1px solid #FFCD32' });
    } else {
      setHidden({ display: 'none' });
      setChangeBorder({ border: '1px solid #b1b1b1' });
    }
    return hidden;
  };
  console.log('optionToggle display : ', hidden.display);

  return (
    <div>
      <div className={style.option_btn_box} style={changeBorder}>
        <button className={style.optionBtn} onClick={onClickOptionToggle}>
          <div>{changeText}</div>
          <i className={style.btnDown}>⌵</i>
        </button>
        <ul style={hidden} onClick={selectItem}>
          <li>롱 모던 베이직 화병</li>
          <li>4900원</li>
        </ul>
        <ul style={hidden} onClick={notSelectItem}>
          <li>선택안함</li>
        </ul>
      </div>
    </div>
  );
}

export default OptionBtn;
