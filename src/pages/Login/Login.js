import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

function Login() {
  // const [modal, setModal] = useState(false);

  // const openUp = () => {
  //   setModal(true);
  // };
  // const onClose = () => {
  //   setModal(false);
  // };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const loginSuccess = () => {
    navigate('/');
  };

  const idInput = e => {
    setId(e.target.value);
  };
  const pwInput = e => {
    setPw(e.target.value);
  };

  const preparing = () => {
    alert('준비중입니다! 조금만 기다려주세요');
  };

  return (
    <section className={styles.wrap}>
      <header className={styles.header}> 로그인 </header>
      <input
        className={styles.idBox}
        placeholder="아이디(이메일)"
        type="text"
        onChange={idInput}
      />
      <input
        className={styles.pwBox}
        placeholder="비밀번호"
        type="password"
        onChange={pwInput}
      />
      <button className={styles.loginBtn}>로그인</button>
      <section className={styles.searchLoginInfo}>
        <span className={styles.searchId}>아이디 찾기</span>
        <span className={styles.searchPw}>비밀번호 찾기</span>
      </section>
      <hr className={styles.line} />
      <span className={styles.noticeText}> SNS계정으로 간편 로그인</span>
      <section className={styles.snsIcon} onClick={preparing}>
        <img
          className={styles.facebookIcon}
          src="https://ifh.cc/g/4mMCRP.png"
          alt="facebookLogin"
        />
        <img
          className={styles.naverIcon}
          src="https://ifh.cc/g/5hPH1n.png"
          alt="naverLogin"
        />
        <img
          className={styles.kakaoIcon}
          src="https://ifh.cc/g/O0aF09.png"
          alt="kakaoLogin"
        />
      </section>
      <span className={styles.noticeText}>
        지금 회원가입 하시면{' '}
        <span className={styles.signupPoint}> 1,000p </span>바로 지급!
      </span>
      <button className={styles.signupBtn}>회원가입</button>
      <span className={styles.nonMemberOrder}>비회원 주문조회</span>
      {/* <modal> 모달창이 뜨나? </modal> */}
    </section>
  );
}

export default Login;
