import React, {useState} from 'react';

// 아래의 코드에서 개선사항이 있는지 확인해볼것.
// 개선사항 : 타입을 잘 맞춰주세요. 문자는 문자. 숫자는 숫자로.
//  -> 숫자형 데이터는 중괄호를 사용하여 JS 표현식으로 전달하는것을
//     권장함
function Profile(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>나이: {props.age}</p>
      </div>
    );
  }
  
  // function App() {
  //   return (
  //     <div>
  //       <Profile name="철수" age={10} />
  //     </div>
  //   );
  // }

//퀴즈2 : 이 코드는 동작하지 않는데 그 이유를 설명하고 변경하세요.
// JSX 문법위반
  function Greeting({ isLoggedIn }) {
    return (
      <div>
        {isLoggedIn ? "환영합니다!" : "로그인해주세요"}
      </div>
    );
  }

//퀴즈
// 요구사항:
// 1. 숫자와 + - 버튼을 만드세요
// 2. 숫자가 양수면 파란색, 음수면 빨간색, 0이면 검정색으로 표시하세요
// 3. 버튼 클릭 시 1씩 증가/감소하도록 만드세요

function App(){
  const [count, setCount] = useState(0);

  const getColor = () => {
    if(count > 0){
      return 'blue';
    }else if(count < 0){
      return 'red';
    }
    return 'black';

  }

  return(
    <div>
      <button onClick={() =>setCount(count - 1)}>
          -
      </button>
      <span style={{ color: getColor(), margin: '0 10px', fontSize:'40px' }}>
        {count}
      </span>
      <button onClick={() => setCount(count + 1)}>
          +
      </button>

    </div>
  );
}
// 버튼 숫자 버튼


export default App;