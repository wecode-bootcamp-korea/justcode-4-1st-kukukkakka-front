import React from 'react';
import style from './OptionList.module.scss';

function OptionList({ optionPrice, optionList, selectItem, notSelectItem }) {
  return (
    <div>
      <ul className={style.toggleList} style={optionList} onClick={selectItem}>
        <li>롱 모던 베이직 화병</li>
        <li>{optionPrice}원</li>
      </ul>
      <ul
        className={style.toggleList}
        style={optionList}
        onClick={notSelectItem}
      >
        <li>선택안함</li>
      </ul>
    </div>
  );
}

export default OptionList;
