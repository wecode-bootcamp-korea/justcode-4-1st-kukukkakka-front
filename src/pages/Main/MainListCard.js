import React from 'react';
import styles from './MainListCard.module.scss';
import ListCard from '../List/ListCard';

function MainListCard({ lists, bgColor, text1, text2 }) {
  return (
    <section
      className={styles.mainContainer}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.mainSubContainer}>
        <div className={styles.mainSubFlex}>
          <h2 className={styles.mainSubTitle}>
            {text1} <strong>{text2}</strong>
          </h2>
          <span className={styles.viewMore}>더보기</span>
        </div>
        <div className={styles.flowerList}>
          {lists.map(list => (
            <ListCard key={list.id} list={list} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainListCard;
