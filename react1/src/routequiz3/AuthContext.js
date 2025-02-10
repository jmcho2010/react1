// 이 코드는 서버단에서 어떻게 처리되는지를 간략하게 작성한 코드.

import { createContext, useEffect, useState } from "react";

// 인증관련 데이터를 저장할 Context를 생성.
const AuthContext = createContext(null);

const AuthProvider = ({children}) =>{
    // 로그인 상태 관리가 필요
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // 토큰이 있으면 로그인 처리
        // 추후에는 로컬스토리지 대신 우리가 구축한 DB에서 정보를 가져오거나
        // was에 저장해둔후 해당 토큰정보를 로딩.
        const token = localStorage.getItem('token');
        // 토큰을 위에서 불러왔을때 있으면 상시 로그인 처리.
        if(token){
            setIsLoggedIn(true);
        }
    }, []);

    // 처음 로그인 한번 할때만 실행해주면됨.
    const login = (username, password) =>{
        // 당연히 실제로는 서버의 인증이 필요하지만
        // 지금은 서버구현은 아직 배우지 않아 형식적으로만 처리.
        // 로그인 기준 : 
        // username : gunchim
        // password : 1234
        if(username === 'gunchim' && password === '1234'){
            localStorage.setItem('token', 'test-token');
            setIsLoggedIn(true);
            return true;
        }
        return false;
    }


    // 로그인시, 로그아웃시 상태
    return(
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthContext;