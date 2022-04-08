import React from 'react';
import style from './OptionList.module.scss';

function OptionList({ list, showOption }) {
  return (
    <div>
      <ul className={style.toggleList} style={showOption}>
        <li>{list.name}</li>
        <li>{list.price}원</li>
      </ul>
    </div>
  );
}

export default OptionList;
