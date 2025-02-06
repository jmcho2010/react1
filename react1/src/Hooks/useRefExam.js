//useRefExam.js
// ref를 활용하여 input창에 입력한 숫자의 개수를 체크하려했으나
// 내용을 지울때에도 카운트가 올라는것을 확인할수 있었음
//  -> 이유 : Ref의 카운트는 랜더링시 올라감.
import React, { useState, useRef, useEffect } from "react";

// function App() {
//     const [inputValue, setInputValue] = useState("");
//     const count = useRef(0);
  
//     useEffect(() => {
//       count.current = count.current + 1;
//     });
  
//     return (
//       <>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <h1>Render Count: {count.current}</h1>
//       </>
//     );
//   }

//current : 현재값 
// function MagicBox(){
//   // inputRef는 마법 지팡이예요!
//   const inputRef = useRef();

//   const focusInput = () => {
//     // 마법 지팡이로 입력창을 가리키면 반짝!
//     // 전역 event.target과도 유사함.
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//     <h1>퀴즈 버튼을 누를시 focusing을 통해
//         inputbox를 반짝반짝 하는 효과를 줘볼것
//         포커싱은 focus 메서드를 통해 처리가능
//         (vanilaJS에서도 가능)
//     </h1>
//       <input 
//         ref={inputRef} 
//         type="text" 
//         placeholder="여기에 글자를 써보세요"
//       />
//       <button onClick={focusInput}>
//         입력창 반짝이게 하기
//       </button>
//     </div>
//   );
// }

function App() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
  
    useEffect(() => {
      previousInputValue.current = inputValue;
    }, [inputValue]);
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </>
    );
  }
  

export default App;