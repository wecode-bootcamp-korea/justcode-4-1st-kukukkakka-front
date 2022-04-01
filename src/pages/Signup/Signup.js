import React from 'react';
import { AiOutlineDownCircle } from 'react-icons/ai';
import stylse from './Signup.module.scss';

function Signup() {
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
          />
          <button className={stylse.idDuplicateCheck}>중복확인</button>
        </div>
        <div className={stylse.setWrapper}>
          <span>비밀번호</span>
          <input
            className={stylse.inputBox}
            placeholder="영문,숫자를 포함하여 8자리-20자리"
          />
        </div>
        <div className={stylse.setWrapper}>
          <span>비밀번호 확인</span>
          <input
            className={stylse.inputBox}
            placeholder="비밀번호를 한 번 더 입력해주세요."
          />
        </div>
        <div className={stylse.setWrapper}>
          <span>이름</span>
          <input
            className={stylse.inputBox}
            placeholder="이름을 입력해주세요."
          />
        </div>
        <div className={stylse.setWrapper}>
          성별
          <section classNsme={stylse.genderWrap}>
            <button className={stylse.genderBtn_true}>여성</button>
            <button className={stylse.genderBtn_false}>남성</button>
            <button className={stylse.genderBtn_false}>제공안함 </button>
          </section>
        </div>
      </section>
      <section className={stylse.bottonWrapper}>
        <hr />
        이용약관 동의
        <div className={stylse.policyCheck}>
          <AiOutlineDownCircle
            size="25"
            color="gray"
            className={stylse.checkbox}
          />
          동의합니다. <span className={stylse.redText}>(필수)</span>
        </div>
        <section className={stylse.policyBrowse}>
          이용약관보기 · 개인정보처리방침 보기{' '}
        </section>
        <button className={stylse.signuoBtn_false}>회원가입</button>
      </section>
    </div>
  );
}

export default Signup;
