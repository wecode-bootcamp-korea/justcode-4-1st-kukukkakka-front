import React from 'react';
import OperationBtns from '../OperationBtns/OperationBtns';
import style from './AddedOptionBox.module.scss';

function AddedOptionBox({ list, showItemBox, deleteItem }) {
  const count = 1;

  return (
    <div>
      <div className={style.priceBox} style={showItemBox}>
        <ul>
          <li>추가상품: {list.name}</li>
          <li className={style.closeBox}>
            <button
              className={style.closeBtn}
              onClick={() => {
                deleteItem(list.price);
              }}
            >
              X
            </button>
          </li>
        </ul>
        <ul>
          <OperationBtns count={count} />
          <li>{list.price.toLocaleString('en')}원</li>
        </ul>
      </div>
    </div>
  );
}
export default AddedOptionBox;
