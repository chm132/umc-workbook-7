import React from "react";
import { Link } from "react-router-dom";
import LoginControl from "./LoginControl";

export default function Header() {
  return (
    <div className='Header_container'>
      <div className='In_header'>
        <Link to="/">
          <img
            style={{ width: "154px", height: "20px" }}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="로고"
          />
        </Link>
        <ul>
          <li>
            <Link to="/Movies">영화</Link>
          </li>
          <li>
            <Link to="/TV">TV프로그램</Link>
          </li>
          <li>
            <Link to="/Celebirity">인물</Link>
          </li>
            <>
              <LoginControl></LoginControl>
            </>   
        </ul>
      </div>
    </div>
  );
}