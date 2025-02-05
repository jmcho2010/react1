import React from 'react';

// 아래의 코드에서 개선사항이 있는지 확인해볼것.
function Profile(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>나이: {props.age}</p>
      </div>
    );
  }
  
  function App() {
    return (
      <div>
        <Profile name="철수" age="열살" />
      </div>
    );
  }

//퀴즈2 : 이 코드는 동작하지 않는데 그 이유를 설명하고 변경하세요.
  function Greeting({ isLoggedIn }) {
    return (
      <div>
        isLoggedIn ? "환영합니다!" : "로그인해주세요"
      </div>
    );
  }
export default App;