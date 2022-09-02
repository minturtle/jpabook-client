import axios from "axios";
import  { useState } from "react";

function SigninForm(){
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");


    return (<>
        <form onSubmit={SendSignInData}>
        <label>
                닉네임
                <input name = "name" type="input" onChange={e=>setUsername(e.target.value)}></input>
            </label>
            <br/>
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
            <label>
                시
                <input name = "city" type="input" onChange={e=>setCity(e.target.value)}></input>
            </label>
            <br/>
            <label>
                거리명
                <input name = "street" type="input" onChange={e=>setStreet(e.target.value)}></input>
            </label>
            <br/>
            <label>
                상세 주소
                <input name = "zipcode" type="input" onChange={e=>setZipcode(e.target.value)}></input>
            </label>
            <br/>
            <button>회원가입</button>
        </form>
    </>)

    function SendSignInData(e){
        e.preventDefault();

        axios.post("http://localhost:8080/member/signIn", {
            username,
            userId,
            password,
            address: {
                city,
                street,
                zipcode
            }
        }).then(res=>{
            window.location.href = '/login'
        }).catch(err=>console.log(err))
    }

}




export default SigninForm;