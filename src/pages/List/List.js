import React, { useEffect } from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import styles from '../List/List.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import ListCard from '../List/ListCard';
function List() {
  return (
    <>
      {/* <Nav /> */}
      <section className={styles.listBanner}>
        <div className={styles.bannerContainer}>
          <p>꾸꾸까까 꽃다발</p>
          <span>계절을 가득 담은 꽃다발로</span>
          <span>당신의 일상을 특별한 날로 만들어보세요.</span>
        </div>
      </section>
      <section className={styles.listTop}>
        <div className={styles.container}>
          <div className={styles.searchContainer}>
            <input
              className={styles.searchBox}
              type="text"
              placeholder="검색어를 입력하세요"
            />
            <div className={styles.icons}>
              <AiOutlineSearch size="1.5em" color="#ddd" />
            </div>
          </div>

          <div className={styles.filterBox}>
            <ul>
              <li>사이즈순</li>
              <li>가격 낮은 순</li>
            </ul>
          </div>
        </div>
      </section>
      <ListCard />
      {/* <Footer /> */}
    </>
  );
}

export default List;
