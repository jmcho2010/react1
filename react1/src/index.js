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
const el3 = (
  <div>
    <h1>이렇게 써도 되는거 아님?</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(el3);
// root.render(

//    <React.StrictMode>
//      <App />
//    </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
