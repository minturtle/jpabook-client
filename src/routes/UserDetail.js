import axios from "axios"
import {useEffect, useState} from "react";


function UserDetail(){
    const [name, setName] = useState(""); 
    const [address, setAddress] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:8080/member/detail",{
            withCredentials : true,
            Cookie : document.cookie
        })
        .then(res=>{
            setName(res.data.name);
            setAddress(res.data.address);
        })
        .catch(err=>console.log(err));
    });


return (
    <>
        닉네임 : {name}
        <br></br>
        주소 : {address}
    </>
)

}










export default UserDetail