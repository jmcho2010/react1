import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

// jsx를 적용하지 않은 예시
// const el = React.createElement('h1', {}, 'jsx를 쓴걸까?');
// jsx 적용
// const el = <h1>이것은 JSX일까?</h1>;
// jsx의 표현식
// const test = "군침싺싺싺싺"
// const el2 = <h1>리엑트의 신기한 기능 {test} 개 보여줄게요</h1>

// JSX 규칙
// jsx문법을 적용시킬떄 HTML태그가 2줄이상이면 소괄호로 감싸줄것을 권장.
// const el3 = (
//   <div>
//     <h1>이렇게 써도 되는거 아님?</h1>
//   </div>
// );

// JSX가 JS+ html이라 한다면
// JS의 조건과 HTML코드를 융합하는것도 가능?
// 위의 el3변수에는 div이라는 body를 제외한 최상위 부모요소를 통해
// 코드들을 하나로 묶었음. 하지만 부모요소가 body인 경우는 어떻게?
//  -> 그냥 써도 상관x 다만 성능상의 문제점이 발생
//     (DOM에 불필요한 노드가 추가됨.)
//  -> 위의 문제점을 해결하기위해 fragment 라는것을 사용하여 여러줄을 한번에 묶을수있음.
const el4 = (
  <>
    <h1>이렇게 써두면 문제없어요</h1>
    <h1>이렇게 써두면 문제없어요2</h1>
  </>
);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(el4);
// root.render(

//    <React.StrictMode>
//      <App />
//    </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
