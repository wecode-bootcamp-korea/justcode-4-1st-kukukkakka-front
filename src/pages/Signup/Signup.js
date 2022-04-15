import React, { useState, useEffect } from 'react';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import styles from './Signup.module.scss';

function Signup() {
  useEffect(() => {
    setInputs({ ...inputs, gender: '1' });
  }, []);

  const navigate = useNavigate();
  const [inputs, setInputs] = useState([
    {
      email: '',
      password: '',
      passwordAgain: '',
      username: '',
      gender: '1',
      checked: false,
    },
  ]);
  //값을 할당
  const { email, password, passwordAgain, username, gender, checked } = inputs;
  const [errtext, setErrtext] = useState({
    text_email: '',
    color_email: false,
    idCheck: false,
    text_pw: '',
    color_pw: false,
    text_pw_again: '',
    color_pw_again: false,
  });

  const [buttonUi, setButtonUi] = useState({
    name: styles.idDuplicateCheck_disabled,
    text: '중복확인',
    disabled: false,
  });

  const emailHandler = e => {
    setInputs({ ...inputs, email: e.target.value });
    let regEmail =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if (e.target.value === '') {
      setErrtext({
        ...errtext,
        text_email: '',

        color_email: false,
        idCheck: false,
      });
      setButtonUi({
        ...buttonUi,
        name: styles.idDuplicateCheck_disabled,
        disabled: true,
      });
    } else if (!regEmail.test(email)) {
      setErrtext({
        ...errtext,
        text_email: '아이디는 이메일형식 이어야 합니다.',
        color_email: false,
        idCheck: false,
      });
      setButtonUi({
        ...buttonUi,
        name: styles.idDuplicateCheck_disabled,
        text: '중복확인',
        disabled: true,
      });
    } else if (regEmail.test(email)) {
      setErrtext({
        ...errtext,
        text_email: '형식에 맞는 아이디입니다.',
        color_email: true,
        idCheck: true,
      });
      setButtonUi({
        ...buttonUi,
        name: styles.idDuplicateCheck_abled,
        disabled: false,
      });
    }
  };

  const passwordHandler = e => {
    setInputs({ ...inputs, password: e.target.value });
    let regPassword = /(?=.*\d)(?=.*[a-zA-ZS]).{8,20}/; // 문자, 숫자 1개이상 포함, 8자리 이상
    if (e.target.value === '') {
      setErrtext({ ...errtext, text_pw: '', color_pw: false });
    } else if (password.length < 8) {
      setErrtext({
        ...errtext,
        text_pw: '비밀번호는 8자리 이상이어야 합니다.',
        color_pw: false,
      });
    } else if (password.length >= 8 && regPassword.test(e.target.value)) {
      setErrtext({
        ...errtext,
        text_pw: '사용가능한 비밀번호 입니다',
        color_pw: true,
      });
    } else if (password.length >= 8 && !regPassword.test(e.target.value)) {
      setErrtext({
        ...errtext,
        text_pw: '영문, 숫자가 모두 포함되어야 합니다',
        color_pw: false,
      });
    }
  };
  const passwordAgainHandler = e => {
    setInputs({ ...inputs, passwordAgain: e.target.value });
    if (e.target.value === '') {
      setErrtext({ ...errtext, text_pw_again: '', color_pw_again: false });
    } else if (e.target.value !== password) {
      setErrtext({
        ...errtext,
        text_pw_again: '비밀번호가 일치하지 않습니다.',
        color_pw_again: false,
      });
    } else if (e.target.value === password) {
      setErrtext({
        ...errtext,
        text_pw_again: '비밀번호가 일치합니다',
        color_pw_again: true,
      });
    }
  };

  const policyAgree = () => {
    setInputs({ ...inputs, checked: !checked });
  };
  const genderChoice = (e, value) => {
    setInputs({ ...inputs, gender: value });
  };

  const usernameHandler = e => {
    setInputs({ ...inputs, username: e.target.value });
  };

  const isPassedSignup =
    errtext.idCheck &&
    errtext.color_email &&
    errtext.color_pw &&
    errtext.color_pw_again &&
    gender &&
    username !== '' &&
    checked &&
    buttonUi.text === '확인완료';

  const duplicatePost = () => {
    fetch('/users/signup/duplicate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(res => {
        if (res.status === 201) {
          alert('가입 가능한 이메일입니다.');
          setButtonUi({
            ...buttonUi,
            name: styles.idDuplicateCheck_finished,
            text: '확인완료',
            disabled: true,
          });
          return res.json();
        } else if (res.status === 400) {
          alert('이미 가입한 이메일입니다. 로그인페이지로 이동합니다.');
          navigate('/login');
          return res.json();
        }
      })
      .then(res => {
        console.log('에러메시지 : ', res.message);
      });
  };

  const signUpPost = () => {
    fetch('/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
        genderId: Number(gender),
        policyAgreed: checked,
      }),
    })
      .then(res => {
        if (res.status === 201) {
          alert('회원가입을 축하드립니다!');
          navigate('/');
          window.scrollTo(0, 0);
        } else if (res.status === 400 || res.status === 500) {
          return res.json();
        }
      })
      .then(res => {
        console.log('에러메시지 : ', res.message);
      });
  };
  return (
    <div>
      <header className={styles.signupHeader}>
        회원가입
        <hr className={styles.bar} />
      </header>
      <section className={styles.boxWrapper}>
        <div className={styles.setWrapperId}>
          <span>아이디(이메일)</span>
          <input
            className={styles.inputBox}
            placeholder="예)kukukkakka@kukukkakka.kr"
            onChange={emailHandler}
            value={email}
          />
          <button
            className={buttonUi.name}
            disabled={buttonUi.disabled}
            onClick={duplicatePost}
          >
            {buttonUi.text}
          </button>
        </div>
        <div
          className={
            errtext.color_email ? styles.validateGuide : styles.unvalidateGuide
          }
        >
          {errtext.text_email}
        </div>
        <div className={styles.setWrapper}>
          <span>비밀번호</span>
          <input
            className={styles.inputBox}
            placeholder="영문,숫자를 포함하여 8자리-20자리"
            onChange={passwordHandler}
            type="password"
            value={password}
          />
        </div>
        <div
          className={
            errtext.color_pw ? styles.validateGuide : styles.unvalidateGuide
          }
        >
          {errtext.text_pw}
        </div>
        <div className={styles.setWrapper}>
          <span> 비밀번호 확인 </span>
          <input
            className={styles.inputBox}
            placeholder="비밀번호를 한 번 더 입력해주세요."
            onChange={passwordAgainHandler}
            value={passwordAgain}
            type="password"
          />
        </div>
        <div
          className={
            errtext.color_pw_again
              ? styles.validateGuide
              : styles.unvalidateGuide
          }
        >
          {errtext.text_pw_again}
        </div>
        <div className={styles.setWrapper}>
          <span>이름</span>
          <input
            className={styles.inputBox}
            placeholder="이름을 입력해주세요."
            onChange={usernameHandler}
            value={username}
          />
        </div>
        <div className={styles.genderWrapper}>
          성별
          <section className={styles.genderWrap}>
            <button
              className={
                gender === '1' ? styles.genderBtn_true : styles.genderBtn_false
              }
              value="1"
              onClick={e => genderChoice(e, e.target.value)}
              type="button"
            >
              여성
            </button>
            <button
              className={
                gender === '2' ? styles.genderBtn_true : styles.genderBtn_false
              }
              value="2"
              onClick={e => genderChoice(e, e.target.value)}
              type="button"
            >
              남성
            </button>
            <button
              type="button"
              className={
                gender === '3' ? styles.genderBtn_true : styles.genderBtn_false
              }
              value="3"
              onClick={e => genderChoice(e, e.target.value)}
            >
              제공안함
            </button>
          </section>
        </div>
      </section>
      <section className={styles.bottonWrapper}>
        <hr />
        이용약관 동의
        <div className={styles.policyCheck}>
          {!checked ? (
            <AiOutlineCheckCircle
              size="30"
              className={styles.checkbox_false}
              onClick={policyAgree}
            />
          ) : (
            <AiFillCheckCircle
              size="30"
              className={styles.checkbox_true}
              onClick={policyAgree}
              value={checked}
            />
          )}
          동의합니다. <span className={styles.redText}>(필수)</span>
        </div>
        <section className={styles.policyBrowse}>
          이용약관보기 · 개인정보처리방침 보기{' '}
        </section>
        <button
          disabled={!isPassedSignup}
          className={
            isPassedSignup === true
              ? styles.signuoBtn_true
              : styles.signuoBtn_false
          }
          onClick={signUpPost}
        >
          회원가입
        </button>
      </section>
    </div>
  );
}

export default Signup;
