import React from 'react';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';

function Nav() {
  return (
    <header>
      <ul className={styles.topList}>
        <li className={styles.topMenu}>로그인</li>
        <li className={styles.topMenu}>
          회원가입<span>1000포인트 지급!</span>
        </li>
        <li className={styles.topMenu}>꾸까 고객센터</li>
        <li className={styles.topMenuBold}>기업제휴</li>
      </ul>

      <nav className={styles.navWrapper}>
        <Link to="/">
          <img alt="main-logo" src="../Images/main_logo.jpg" width="200" />
        </Link>
        <ul className={styles.navList}>
          <li className={styles.navMenu}>꽃 정기구독</li>
          <li className={styles.navMenu}>꽃다발</li>
          <li className={styles.navMenu}>당일배송</li>
          <li className={styles.navMenu}>플라워클래스</li>
          <li className={styles.navMenu}>소품샵</li>
          <li className={styles.navMenu}>이벤트</li>
        </ul>
        <div className={styles.iconWrapper}>
          <AiOutlineUser size="40" color="gray" />
          <AiOutlineShopping size="40" color="gray" />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
