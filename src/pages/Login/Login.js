import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import Modal from './Modal';

function Login() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const idInput = e => {
    setId(e.target.value);
  };
  const pwInput = e => {
    setPassword(e.target.value);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const servicePreparing = () => {
    alert('꾸꾸까까가 열심히 서비스를 준비중입니다!');
  };

  // 버튼활성화를 위한 정규식 체크
  let regEmail =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  let regPassword = /(?=.*\d)(?=.*[a-zA-ZS]).{8,20}/; // 문자, 숫자 1개이상 포함, 8자리 이상
  const isValid = regEmail.test(id) && regPassword.test(password);

  const loginSuccess = () => {
    alert('로그인 성공!');
    navigate('/signup');
  };

  const postLogin = () => {
    fetch('http://localhost:8000/users/login', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then(res => {
        if (res.status === 201) {
          loginSuccess();
          return res.json();
        } else if (res.status === 400) {
          alert('아이디와 비밀번호를 다시 확인해주세요 :)');
          return res.json();
        } else if (res.statuse === 500) {
          alert('서버 점검중입니다. 불편을 드려 죄송합니다.');
        } else return res.json();
      })
      .then(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          console.log('저장되었냐', res.token);
        } else {
          console.log('에러발생 : ', res.message);
        }
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
      <button
        className={isValid ? styles.loginBtn_true : styles.loginBtn_false}
        onClick={postLogin}
        disabled={!isValid}
      >
        로그인
      </button>
      <section className={styles.searchLoginInfo}>
        <span className={styles.searchId} onClick={servicePreparing}>
          아이디 찾기
        </span>
        <span className={styles.searchPw} onClick={servicePreparing}>
          비밀번호 찾기
        </span>
      </section>
      <hr className={styles.line} />
      <span className={styles.noticeText}> SNS계정으로 간편 로그인</span>
      <section className={styles.snsIcon} onClick={servicePreparing}>
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
      <button
        className={styles.signupBtn}
        onClick={() => {
          modalHandler();
          scrollToTop();
        }}
      >
        회원가입
      </button>
      {modalOpen && <Modal modalHandler={modalHandler} />}
      <span className={styles.nonMemberOrder} onClick={servicePreparing}>
        비회원 주문조회
      </span>
      <div className={styles.btnWrap} />
    </section>
  );
}

export default Login;
