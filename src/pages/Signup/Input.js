import React, { useEffect, useState } from 'react';
import stylse from './Signup.module.scss';

import React from 'react';

function Input() {
  return (
    <div>
      <div
        className={textcolor_id ? stylse.validateGuide : stylse.unvalidateGuide}
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
    </div>
  );
}

export default Input;
