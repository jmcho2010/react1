// 이 코드는 서버단에서 어떻게 처리되는지를 간략하게 작성한 코드.

const AuthProvider = () =>{

    // 로그인시, 로그아웃시 상태
    return(
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
};