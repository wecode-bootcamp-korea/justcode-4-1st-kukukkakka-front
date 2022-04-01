import React from 'react';
import styles from './MainListCard.module.scss';
import ListCard from '../List/ListCard';

function MainListCard({
  lists,
  bgColor,
  containerMargin,
  title,
  subTitle,
  text,
  linkTo,
}) {
  return (
    <section
      className={styles.mainContainer}
      style={{
        backgroundColor: bgColor,
        margin: containerMargin,
      }}
    >
      <div className={styles.mainSubContainer}>
        <div className={styles.mainSubFlex}>
          <h2 className={styles.mainSubTitle}>
            {title} <strong>{subTitle}</strong>
          </h2>
          <span className={styles.viewMore} onClick={linkTo}>
            {text}
          </span>
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
