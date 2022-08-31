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

            </div>
    )

}


export default ButtonForm;