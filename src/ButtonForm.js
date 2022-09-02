import { Link } from 'react-router-dom';
function ButtonForm(){
    return(
            <div>
                <Link to="/">
                    <button>아이템 조회</button>
                </Link>

                <Link to="/login">
                    <button>로그인</button>
                </Link>
                <Link to="/signup">
                    <button>회원가입</button>
                </Link>
                <Link to="/userDetail">
                    <button>회원 상세정보</button>
                </Link>
            </div>
    )

}


export default ButtonForm;