import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import Modal from './Modal';

function Login() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const loginSuccess = () => {
    navigate('/signup');
  };

  const idInput = e => {
    setId(e.target.value);
  };
  const pwInput = e => {
    setPassword(e.target.value);
  };
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };

  const postLogin = () => {
    fetch('http://localhost:8000/users/login', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        password: password,
      }),
    })
      .then(res => {
        if (res.status === 200) {
          loginSuccess();
        } else if (res.status === 400 || 500) return res.json();
      })
      .then(res => {
        console.log('에러발생 : ', res.message);
      });
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
      <button className={styles.loginBtn} onClick={postLogin}>
        로그인
      </button>
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
        지금 회원가입 하시면 <span className={styles.signupPoint}>1,000p</span>
        바로 지급!
      </span>
      <button className={styles.signupBtn} onClick={modalClose} Link to="0">
        회원가입
      </button>
      {modalOpen && <Modal modalClose={modalClose} />}
      <span className={styles.nonMemberOrder}>비회원 주문조회</span>
      <div className={styles.btnWrap}>
        <button className={styles.scrollToTopBtn} onClick={scrollToTop}>
          <img
            className={styles.scrollToTopImg}
            src="https://ifh.cc/g/lxlmg7.png"
            alt="crollToTopButton"
          />
        </button>
      </div>
    </section>
  );
}

export default Login;
