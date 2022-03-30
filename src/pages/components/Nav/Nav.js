import React from 'react';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';

function Nav() {
  return (
    <header className={styles.headerWrapper}>
      <ul className={styles.topList}>
        <li className={styles.topMenu}>로그인</li>
        <li className={styles.topMenu}>
          회원가입<span className={styles.pointColor}>(1000포인트 지급!)</span>
        </li>
        <li className={styles.topMenu}>꾸까 고객센터</li>
        <li className={styles.topMenuBold}>기업제휴</li>
      </ul>

      <nav className={styles.navSticky}>
        <div className={styles.navWrapper}>
          <Link to="/">
            <img
              className={styles.mainLogo}
              alt="main-logo"
              src="img/main_logo.png"
              width="200"
            />
          </Link>
          <ul className={styles.navList}>
            <li className={styles.navMenu}>꽃 정기구독</li>
            <Link to="/list" style={{ textDecoration: 'none' }}>
              <li className={styles.navMenu}>꽃다발</li>
            </Link>
            <li className={styles.navMenu}>당일배송</li>
            <li className={styles.navMenu}>플라워클래스</li>
            <li className={styles.navMenu}>소품샵</li>
            <li className={styles.navMenu}>이벤트</li>
          </ul>
          <div>
            <AiOutlineUser size="40" color="#707070" />
            <AiOutlineShopping
              className={styles.iconBlank}
              size="40"
              color="#707070"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
