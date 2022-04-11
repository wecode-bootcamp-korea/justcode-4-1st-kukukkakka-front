import React from 'react';
import style from './DetailModal.module.scss';
import { useNavigate } from 'react-router-dom';

function DetailModal({ openModal, postToCart }) {
  const navigate = useNavigate();
  const goToCart = () => {
    postToCart();
    navigate('/Cart');
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className={style.modalBackground} />
      <div className={style.modalContainer}>
        <div className={style.message}>상품을 장바구니에 담았습니다 :-)</div>
        <div>
          <button className={style.yellowBtn} onClick={openModal}>
            계속 쇼핑하기
          </button>
          <button className={style.whiteBtn} onClick={goToCart}>
            장바구니 가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
