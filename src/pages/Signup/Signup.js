import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import stylse from './Signup.module.scss';

function Signup() {
  // const [lists, setLists] = useState({
  //   productList: [],
  // });
  // input창에 기입되는 info 상태
  const [inputs, setInputs] = useState([
    {
      id: '',
      password: '',
      passwordAgain: '',
      username: '',
      gender: 'female',
    },
  ]);
  console.log('할당전 : ', inputs, inputs[0].gender);

  const { id, password, passwordAgain, username, gender } = inputs[0];
  const [checked, setChecked] = useState(false);
  console.log(
    '어떻게 찍히나 볼까 :',
    inputs,
    inputs.gender,
    inputs[0].gender,
    gender
  );
  // password, passwordAgain, username, gender, checked

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordAgain, setPasswordAgain] = useState('');
  // const [username, setUsername] = useState('');
  // const [gender, setGender] = useState('female');
  // const [checked, setChecked] = useState(false);

  // input창 내용에 맞게 보여지는 errtext + color
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

  // signup button 활성화를 위한 기입상태 확인
  const [isPassed, setIsPassed] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   isPassedSignup();
  // }, []);

  console.log(isPassed);

  // 회원가입 --> POST fetch로 로직 옮겨야함
  const signupSuccess = () => {
    alert('회원가입을 축하드립니다!');
    navigate('/main');
  };

  //이용약관 동의여부 로직
  const policyAgree = () => {
    setInputs(!checked);
    // { checked: !checked }
  };
  // 성별정보 선택 데이터 로직
  const genderChoice = (e, data) => {
    console.log(data);
    setInputs(gender(data));
    console.log(gender);
  };

  console.log('inputs는 :', inputs[0].gender);
  console.log('gender는: ', gender);

  //
  const emailHandler = e => {
    setInputs((id = e.target.value));
    // setEmail(e.target.value);
    if (e.target.value === '') {
      setErrtext({ text: '', color: false, idCheck: false });
    } else if (!id.includes('@')) {
      setErrtext({
        text: '아이디는 이메일형식 이어야 합니다.',
        color: false,
        idCheck: false,
      });
    } else if (id.includes('@')) {
      setErrtext({
        text: '형식에 맞는 아이디입니다.',
        color: true,
        idCheck: true,
      });
    }
  };
  console.log(id);
  const passwordHandler = e => {
    setInputs((password = e.target.value));
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
    setInputs((passwordAgain = e.target.value));
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
    setInputs((username = e.target.value));
  };

  // const isPassedSignup = () => {
  //   if (
  //     textcolor_id === true &&
  //     textcolor_pw === true &&
  //     textcolor_pwagain === true &&
  //     username !== '' &&
  //     checked === true
  //   ) {
  //     setIsPassed(true);
  //   } else setIsPassed(false);
  // };

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
          {pwAgainErrtext.text}
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
          // className={
          //   // isPassedSignup === true
          //   //   ? stylse.signuoBtn_true
          //   //   : stylse.signuoBtn_false
          // }
          type="submit"
          // disabled={!isPassedSignup}
          onClick={signupSuccess}
        >
          회원가입
        </button>
      </section>
    </div>
  );
}

export default Signup;
