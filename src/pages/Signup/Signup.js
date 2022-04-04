import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import stylse from './Signup.module.scss';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('female');
  const [checked, setChecked] = useState(false);

  const [errtext, setErrtext] = useState('');
  const [idCheck, setIdCheck] = useState(false);
  const [textcolor_id, setTextcolor_id] = useState(false);

  const [pwErrtext, setPwErrtext] = useState('');
  const [textcolor_pw, setTextcolor_pw] = useState(false);

  const [pwAgainErrtext, setPwAgainErrtext] = useState('');
  const [textcolor_pwagain, setTextcolor_pwagain] = useState(false);

  const [isPassed, setIsPassed] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   isPassedSignup();
  // }, []);

  console.log(isPassed);

  const signupSuccess = () => {
    alert('회원가입을 축하드립니다!');
    navigate('/main');
  };
  const policyAgree = () => {
    setChecked(!checked);
  };
  const genderChoice = (e, data) => {
    setGender(data);
  };

  const emailHandler = e => {
    setEmail(e.target.value);
    if (e.target.value === '') {
      setErrtext('');
      setTextcolor_id(false);
      setIdCheck(false);
    } else if (!email.includes('@')) {
      setErrtext('아이디는 이메일형식 이어야 합니다.');
      setTextcolor_id(false);
      setIdCheck(false);
    } else if (email.includes('@')) {
      setErrtext('형식에 맞는 아이디입니다.');
      setTextcolor_id(true);
      setIdCheck(true);
    }
  };
  const passwordHandler = e => {
    setPassword(e.target.value);
    let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
    if (e.target.value === '') {
      setPwErrtext('');
      setTextcolor_pw(false);
    } else if (password.length < 8) {
      setPwErrtext('비밀번호는 8자리 이상이어야 합니다.');
      setTextcolor_pw(false);
    } else if (password.length >= 8 && regExp.test(password)) {
      setPwErrtext('사용가능한 비밀번호 입니다');
      setTextcolor_pw(true);
    } else if (password.length >= 8 && !regExp.test(password)) {
      setPwErrtext('영문, 숫자가 모두 포함되어야 합니다');
      setTextcolor_pw(false);
    }
  };

  const passwordAgainHandler = e => {
    setPasswordAgain(e.target.value);
    if (e.target.value === '') {
      setPwAgainErrtext('');
      setTextcolor_pwagain(false);
    } else if (e.target.value !== password) {
      setPwAgainErrtext('비밀번호가 일치하지 않습니다.');
      setTextcolor_pwagain(false);
    } else if (e.target.value === password) {
      setPwAgainErrtext('비밀번호가 일치합니다');
      setTextcolor_pwagain(true);
    }
  };

  const usernameHandler = e => {
    setUsername(e.target.value);
  };

  const isPassedSignup = () => {
    if (
      textcolor_id === true &&
      textcolor_pw === true &&
      textcolor_pwagain === true &&
      username !== '' &&
      checked === true
    ) {
      setIsPassed(true);
    } else setIsPassed(false);
  };

  console.log(textcolor_id);
  console.log(textcolor_pw);
  console.log(textcolor_pwagain);
  console.log(username !== '');
  console.log(checked);
  console.log('ispassed값 : ', isPassed);

  return (
    <div>
      <header className={stylse.signupHeader}>
        회원가입
        <hr className={stylse.bar} />
      </header>
      <section className={stylse.boxWrapper}>
        <div className={stylse.setWrapperId}>
          <span>아이디(이메일)</span>
          <input
            className={stylse.inputBox}
            placeholder="예)kukukkakka@kukukkakka.kr"
            onChange={emailHandler}
          />
          <button
            className={
              idCheck
                ? stylse.idDuplicateCheck_true
                : stylse.idDuplicateCheck_false
            }
          >
            중복확인
          </button>
        </div>
        <div
          className={
            textcolor_id ? stylse.validateGuide : stylse.unvalidateGuide
          }
        >
          {errtext}
        </div>
        <div className={stylse.setWrapper}>
          <span>비밀번호</span>
          <input
            className={stylse.inputBox}
            placeholder="영문,숫자를 포함하여 8자리-20자리"
            onChange={passwordHandler}
            type="password"
          />
        </div>
        <div
          className={
            textcolor_pw ? stylse.validateGuide : stylse.unvalidateGuide
          }
        >
          {pwErrtext}
        </div>
        <div className={stylse.setWrapper}>
          <span> 비밀번호 확인 </span>
          <input
            className={stylse.inputBox}
            placeholder="비밀번호를 한 번 더 입력해주세요."
            onChange={passwordAgainHandler}
          />
        </div>
        <div
          className={
            textcolor_pwagain ? stylse.validateGuide : stylse.unvalidateGuide
          }
        >
          {' '}
          {pwAgainErrtext}{' '}
        </div>
        <div className={stylse.setWrapper}>
          <span>이름</span>
          <input
            className={stylse.inputBox}
            placeholder="이름을 입력해주세요."
            onChange={usernameHandler}
          />
        </div>
        <div className={stylse.genderWrapper}>
          성별
          <section className={stylse.genderWrap}>
            <button
              className={
                gender === 'female'
                  ? stylse.genderBtn_true
                  : stylse.genderBtn_false
              }
              value="female"
              onClick={e => genderChoice(e, e.target.value)}
            >
              여성
            </button>
            <button
              className={
                gender === 'male'
                  ? stylse.genderBtn_true
                  : stylse.genderBtn_false
              }
              value="male"
              onClick={e => genderChoice(e, e.target.value)}
            >
              남성
            </button>
            <button
              className={
                gender === 'no_reply'
                  ? stylse.genderBtn_true
                  : stylse.genderBtn_false
              }
              value="no_reply"
              onClick={e => genderChoice(e, e.target.value)}
            >
              제공안함
            </button>
          </section>
        </div>
      </section>
      <section className={stylse.bottonWrapper}>
        <hr />
        이용약관 동의
        <div className={stylse.policyCheck}>
          {!checked ? (
            <AiOutlineCheckCircle
              size="30"
              className={stylse.checkbox_false}
              onClick={policyAgree}
            />
          ) : (
            <AiFillCheckCircle
              size="30"
              className={stylse.checkbox_true}
              onClick={policyAgree}
            />
          )}
          동의합니다. <span className={stylse.redText}>(필수)</span>
        </div>
        <section className={stylse.policyBrowse}>
          이용약관보기 · 개인정보처리방침 보기{' '}
        </section>
        <button
          className={
            isPassedSignup === true
              ? stylse.signuoBtn_true
              : stylse.signuoBtn_false
          }
          type="submit"
          disabled={!isPassedSignup}
          onClick={signupSuccess}
        >
          회원가입
        </button>
      </section>
    </div>
  );
}

export default Signup;
