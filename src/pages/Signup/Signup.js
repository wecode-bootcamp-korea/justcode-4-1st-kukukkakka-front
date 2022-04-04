import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import stylse from './Signup.module.scss';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('1');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const [errtext, setErrtext] = useState({
    text: '',
    color: false,
    idCheck: false,
  });
  const [pwErrtext, setPwErrtext] = useState({
    text: '',
    color: false,
  });
  const [pwAgainErrtext, setPwAgainErrtext] = useState({
    text: '',
    color: false,
  });

 const signupHandler = () => {

  useEffect(() => {
    fetch('회원가입 API url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
        gender_id : Number(gender),
        policyAgree: checked,
      }),
    })
      .then(res =>  {
        if (res.status === 201) {
          alert('회원가입을 축하드립니다!');
          navigate ('/main')
        }
        else if (res. status === 400) {
        return res.json()}
      })
      .then(res => {console.log("에러메시지 : " , res.message)});
  }, []);

  const policyAgree = () => {
    setChecked(!checked);
  };
  const genderChoice = (e, data) => {
    setGender(data);
  };

  const emailHandler = e => {
    setEmail(e.target.value);
    if (e.target.value === '') {
      setErrtext({ text: '', color: false, idCheck: false });
    } else if (!email.includes('@')) {
      setErrtext({
        text: '아이디는 이메일형식 이어야 합니다.',
        color: false,
        idCheck: false,
      });
    } else if (email.includes('@')) {
      setErrtext({
        text: '형식에 맞는 아이디입니다.',
        color: true,
        idCheck: true,
      });
    }
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
    let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
    if (e.target.value === '') {
      setPwErrtext({ text: '', color: false });
    } else if (password.length < 8) {
      setPwErrtext({
        text: '비밀번호는 8자리 이상이어야 합니다.',
        color: false,
      });
    } else if (password.length >= 8 && regExp.test(password)) {
      setPwErrtext({ text: '사용가능한 비밀번호 입니다', color: true });
    } else if (password.length >= 8 && !regExp.test(password)) {
      setPwErrtext({
        text: '영문, 숫자가 모두 포함되어야 합니다',
        color: false,
      });
    }
  };

  const passwordAgainHandler = e => {
    setPasswordAgain(e.target.value);
    if (e.target.value === '') {
      setPwAgainErrtext({ text: '', color: false });
    } else if (e.target.value !== password) {
      setPwAgainErrtext({
        text: '비밀번호가 일치하지 않습니다.',
        color: false,
      });
    } else if (e.target.value === password) {
      setPwAgainErrtext({ text: '비밀번호가 일치합니다', color: true });
    }
  };

  const usernameHandler = e => {
    setUsername(e.target.value);
  };

  const isPassedSignup =
    errtext.idCheck === true &&
    pwErrtext.color === true &&
    pwAgainErrtext.color === true &&
    username !== '' &&
    checked === true;

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
              errtext.idCheck
                ? stylse.idDuplicateCheck_true
                : stylse.idDuplicateCheck_false
            }
          >
            중복확인
          </button>
        </div>
        <div
          className={
            errtext.color ? stylse.validateGuide : stylse.unvalidateGuide
          }
        >
          {errtext.text}
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
            pwErrtext.color ? stylse.validateGuide : stylse.unvalidateGuide
          }
        >
          {pwErrtext.text}
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
            pwAgainErrtext.color ? stylse.validateGuide : stylse.unvalidateGuide
          }
        >
          {' '}
          {pwAgainErrtext.text}{' '}
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
                gender === '1'
                  ? stylse.genderBtn_true
                  : stylse.genderBtn_false
              }
              value="1"
              onClick={e => genderChoice(e, e.target.value)}
            >
              여성
            </button>
            <button
              className={
                gender === "2"
                  ? stylse.genderBtn_true
                  : stylse.genderBtn_false
              }
              value = "2"
              onClick={e => genderChoice(e, e.target.value)}
            >
              남성
            </button>
            <button
              className={
                gender === '3'
                  ? stylse.genderBtn_true
                  : stylse.genderBtn_false
              }
              value="3"
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
          onClick={signupHandler}
        >
          회원가입
        </button>
      </section>
    </div>
  );
}

export default Signup;
