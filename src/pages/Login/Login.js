import React from 'react';
import styles from './Login.module.scss';

function Login() {
  return (
    <section className={styles.wrap}>
      <header className={styles.header}> 로그인 </header>
      <input
        className={styles.idBox}
        placeholder="아이디(이메일)"
        type="text"
      />
      <input className={styles.pwBox} placeholder="비밀번호" type="password" />
      <button className={styles.loginBtn}>로그인</button>
      <section className={styles.searchLoginInfo}>
        <span className={styles.searchId}>아이디 찾기</span>
        <span className={styles.searchPw}>비밀번호 찾기</span>
      </section>
      <hr className={styles.line} />
      <span className={styles.noticeText}> SNS계정으로 간편 로그인</span>
      <section className={styles.snsIcon}>
        <img
          className={styles.facebookIcon}
          src="https://ifh.cc/g/4mMCRP.png"
        />
        <img className={styles.naverIcon} src="https://ifh.cc/g/5hPH1n.png" />
        <img className={styles.kakaoIcon} src="https://ifh.cc/g/O0aF09.png" />
      </section>
      <span className={styles.noticeText}>
        지금 회원가입 하시면 1,000p 바로 지급!
      </span>
      <button className={styles.signupBtn}>회원가입</button>
      <span>비회원 주문조회</span>
    </section>
  );
}

export default Login;
