import { useEffect, useState } from "react";

export default function LoginPage(){

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  
  const [emailVaild, setEmailVaild] = useState(false);
  const [pwVaild, setPwVaild] = useState(true); 

  const [cantClick, setcantClick] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if(regex.test(email)){
      setEmailVaild(true);
    } else {
      setEmailVaild(false);
    }
  }

  const handlePw = (e) =>{
    setPw(e.target.value);
    const regex = pw.length < 0;
    if (regex.test(pw)){
      setPwVaild(true);
    } else{
      setPwVaild(false);
    }
  }

  useEffect (() => {
    if(emailVaild && pwVaild){
      setcantClick(false);
      return;
    }
      setcantClick(true);
  }, [emailVaild, pwVaild]);

  return(
    <div className='Login_container'>
      <div className='Login_title'>
        이메일과 비밀번호를 <br />
        입력해주세요
      </div>

    <div className='Login_content'>
        <div className='Input_title'>
          이메일 주소
        </div>
      <div className='inputWrap'>  
        <input className='Login_input' 
              placeholder="umc@gmail.com" 
              value={email}
              onChange={handleEmail} />
      </div>
        <div className='Error_msg'>
          {
            !emailVaild && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요</div>
            )
          }
        </div>

      <div className='Input_title'>
        비밀번호
      </div>
      <div className='inputWrap'>  
        <input type="password"
              className='Login_input' 
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
               />
      </div>

      <button disabled={cantClick}
      className='bottmButton'>확인</button>

      </div>
    </div>
  );
}
