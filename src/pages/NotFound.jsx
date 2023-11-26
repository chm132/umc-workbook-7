import {useNavigate} from "react-router-dom"

export default function NotFound(){
  const navigate = useNavigate();

  return(
    <div className ='NotFound_container'>
      <div className ='NotFound_msg'>
        <h1>해당 페이지를 찾지 못했습니다.</h1>
        <h2>주소가 잘못되었거나 더 이상 존재하지 않는 페이지입니다.</h2>
      </div>
      <div className ='Back_main'>
        <h2 onClick={() => {navigate("/")}}>메인 페이지로 이동</h2>
      </div>
    </div>
  );
}