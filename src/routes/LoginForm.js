import { useState } from 'react';
import axios from 'axios';


function LoginForm(){
    const [userId , setUserId] = useState("");
    const [password, setPassword] = useState("");


return (
    <>
        <form onSubmit={SendLoginData}>
            <label>
                아이디
                <input name = "userId" type="input" onChange={e=>setUserId(e.target.value)}></input>
            </label>
            <br/>
            <label>
                비밀번호
                <input name = "password" type="password" onChange={e=>setPassword(e.target.value)}></input>
            </label>
            <br/>
            <button>로그인</button>
        </form>
    </>

    )

    function SendLoginData(e){
        e.preventDefault();
    
        axios.post("http://localhost:8080/member/login", 
            {   userId,
                password
            },
            {
                withCredentials : true
            }).then(res=>{
                window.location.href="/"
            })
            .catch(res=>{
                alert(res.response.data.message)
            });
    
    }
}




export default LoginForm;