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
function MagicBox(){
    const boxRef = useRef();

    const changeColor = () =>{
        //boxRef.current : 요소선택 / style.backgroundColor : DOM traversing
        boxRef.current.style.backgroundColor =
        '#' + Math.floor(Math.random()*16777215).toString(16);
    };

    return(
        <div>
            <div
                ref={boxRef}
                style={{
                    width: '250px',
                    height: '250px',
                    backgroundColor: 'hotpink',
                    margin: '25px'
                }}
            >

            </div>
            <button onClick={changeColor}>
                상자색깔 변경하기
            </button>
        </div>
    )
}

export default MagicBox;