import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginControl = () => {
  const navigate = useNavigate();
  const [Logindo, Logindone] = useState(true);
  const handleToggleClick = () => {
    Logindone((logindone) => !logindone);
    navigate(Logindo ? '/' : '/LoginPage');
  };

  return (
    <>
      {Logindo ? (
        <div>
          <button className="LoginButton" onClick={handleToggleClick}>로그아웃</button>
          <a>환영합니다!</a>
        </div>
      ) : (
        <div>
          <button className="LoginButton" onClick={handleToggleClick}>로그인</button>
          <a>로그인 해주세요!</a>
        </div>
      )}
    </>
  );
}


export default LoginControl;