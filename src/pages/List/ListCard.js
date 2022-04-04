import React from 'react';
import styles from '../List/ListCard.module.scss';
function ListCard({ list }) {
  return (
    <div className={styles.listBox}>
      <div className={styles.listImg}>
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
