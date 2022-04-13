import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../List/ListCard.module.scss';
function ListCard({ list }) {
  const navigate = useNavigate();
  const clickImage = () => {
    navigate(`/detail/${list.id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div className={styles.listBox}>
      <div className={styles.listImg} onClick={clickImage}>
        <img src={list.image_url} alt={list.name} />
      </div>
      <p className={styles.desc}>{list.description}</p>
      <span className={styles.title}>{list.name}</span>
      <span className={styles.price}>{list.price.toLocaleString('en')}원</span>
      <div className={styles.tags}>
        <span className={styles.size}>{list.sizename}</span>
        <em>size</em>
        <span className={styles.freeDeveliery}>무료배송</span>
      </div>
    </div>
  );
}

export default ListCard;
