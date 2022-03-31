import React from 'react';
import styles from '../List/ListCard.module.scss';
function ListCard({ list }) {
  console.log(list, '!!!!!!!');

  return (
    <div className={styles.listContainer}>
      <div className={styles.listBox}>
        <div className={styles.listImg}>
          <img src={list.image_url} alt={list.name} />
        </div>
        <p className={styles.desc}>{list.description}</p>
        <span className={styles.title}>{list.name}</span>
        <span className={styles.price}>
          {Math.floor(parseInt(list.price / 100) * 100)}
        </span>
        <div className={styles.tags}>
          <span className={styles.size}>{list.size}</span>
          <em>size</em>
          <span className={styles.freeDeveliery}>무료배송</span>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
