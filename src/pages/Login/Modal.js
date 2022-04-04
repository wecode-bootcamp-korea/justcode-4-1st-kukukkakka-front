import React from 'react';
import styles from './Modal.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function Modal({ modalClick }) {
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate('/signup');
  };
  return (
    <>
      <div className={styles.modalBackground} />
      <div className={styles.modalContainer}>
        <button onClick={modalClick} className={styles.closeBtn}>
          <AiOutlineClose size="35" color="gray" />
        </button>
        <div className={styles.textWrap}>
          <header className={styles.signupTitle}>꾸꾸까까 회원 가입</header>
          <p className={styles.marketingText}>
            바로 사용할 수 있는 1,000p{' '}
            <span className={styles.blackText}>를 드려요!</span>
          </p>
          <button className={styles.signupBtn} onClick={goToSignup}>
            이메일 회원가입
          </button>
          <hr className={styles.areaLine} />
          <p>SNS 간편 회원가입</p>
          <button className={styles.kakaoBtn}>
            {/* <img
              src="https://ifh.cc/g/O0aF09.png"
              alt="kakaoLogin"
              className={styles.kakaoIcon}
            /> */}
            카카오톡으로 가입하기
          </button>
          <button className={styles.naverBtn}>
            {/* <img
              src="https://ifh.cc/g/5hPH1n.png"
              alt="naverLogin"
              className={styles.naverIcon}
            /> */}
            네이버로 가입하기
          </button>
          <button className={styles.facebookBtn}>
            {/* <img
              src="https://ifh.cc/g/4mMCRP.png"
              alt="facebookLogin"
              className={styles.facebookIcon}
            /> */}
            페이스북으로 가입하기
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
