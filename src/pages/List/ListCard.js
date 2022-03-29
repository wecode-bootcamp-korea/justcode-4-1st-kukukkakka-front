import React from 'react';
import styles from '../List/ListCard.module.scss';
function ListCard() {
  return (
    <div className={styles.listContainer}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((list, index) => {
        return (
          <div className={styles.listBox} key={index}>
            <div className={styles.listImg}>
              <img
                src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9zZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="listImg"
              />
            </div>
            <p className={styles.desc}>꽃밭에 앉은 파란 나비</p>
            <span className={styles.title}>블루 버터플라이 데이션</span>
            <span className={styles.price}>53,900원</span>
            <div className={styles.tags}>
              <span className={styles.size}>XL</span>
              <em>size</em>
              <span className={styles.freeDeveliery}>무료배송</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListCard;
