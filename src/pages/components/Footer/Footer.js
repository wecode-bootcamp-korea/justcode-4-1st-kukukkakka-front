import React from 'react';
import styles from './Footer.module.scss';
// import { Link } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <section className={styles.iconWrapper}>
        <AiFillFacebook size="40" color="white" />
        <AiFillInstagram size="40" color="white" />
        <AiFillYoutube size="40" color="white" />
      </section>

      <section className={styles.serviceWrapper}>
        <div className={styles.serviceSubWrapper}>
          <p className={styles.serviceContent}>꾸꾸까까 고객센터</p>
          <p className={styles.serviceContent}>1661-1031</p>
          <div className={styles.serviceTime}>
            (평일 10:00 - 13:00, 14:00 - 18:00 / 주말&공휴일 제외)
          </div>
          <button className={styles.serviceButton}>
            꾸꾸까까 고객센터{'>'}
          </button>
        </div>
        <img alt="main-logo" src="img/main_logo_white.png" width="200" />
      </section>

      <section className={styles.infoWrapper}>
        <article className={styles.infoContent}>
          <div>상호명: 꾸꾸까까(kukukkakka)</div>
          <div className={styles.infoContentMiddle}>
            사업자 등록번호: 264-81-32592
          </div>
          <div>대표자: 차은우</div>
        </article>
        <article className={styles.infoContent}>
          <div>
            소재지: 서울특별시 서초구 명달로 9 방배빌딩 지하 1층 kukukkakka
          </div>
          <div className={styles.infoContentMiddle}>기업공시</div>
          <div>통시판매신고번호 2018-서울서초-1690</div>
        </article>
        <article className={styles.infoRights}>
          <div>© 2014-2021 kukukkakka, Inc. All rights reserved</div>
          <div className={styles.infoTermsOfUse}>
            <div>이용약관</div>
            <div>개인정보 처리방침</div>
            <div>제휴안내</div>
          </div>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
