import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './OptionList.module.scss';

function OptionList({ optionPrice, optionList, selectItem, notSelectItem }) {
  const params = useParams();
  // const [optionItem, setOptionItem] = useState({
  //   optionList: [],
  // });

  // useEffect(() => {
  //   fetch(`http://localhost:8000/`)
  //     .then(res => res.json())
  //     .then(res => {
  //       setOptionItem(res);
  //     });
  // }, []);

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
