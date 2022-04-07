import React from 'react';
import style from './OptionList.module.scss';

function OptionList({ list, showOption, selectItem }) {
  // const params = useParams();
  console.log('list: ', list.id);
  return (
    <div>
      <ul className={style.toggleList} style={showOption} onClick={selectItem}>
        <li>{list.name}</li>
        <li>{list.price}원</li>
      </ul>
    </div>
  );
}

export default OptionList;
