// 로그인 ?
// 어떻게 구현하지?
// 일단 참고해보니 화면에 사용자가 입력을 하면
// 이것을 어딘가에서 검사하는거같음....

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // 프로그래매틱 라우팅을 위한 훅
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(Login(username, password)){
            navigate('/admin');
        }else{
            setError('로그인 실패!');
        }
    };

    return(
        <form onSubmit={handleSubmit} style={{ padding: '20px'}}>
            <div>
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <h1 style={{ color: 'red'}}>{error}</h1>}
            <button type="submit">로그인</button>

        </form>
    )

}

export default Login;