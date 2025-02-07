//useReducer.js
// 쉽게 생각하자면 복잡한 상태관리에서 사용.

import { useReducer } from "react";



// function Machine(){

//     // state : 현재 상태값을 저장 (변수 number의 값을 들고있음)
//     // action : 수행중 동작 (dispatch에서 보낸 파라미터값을 가지고있음)
//     //  -> dispatch를 통해 전달받은 함수
//     const reducer = (state, action) =>{
//         switch(action){
//             case '더하기':
//                 return state + 1;
//             case '빼기':
//                 return state - 1;
//             case '초기화':
//                 return 0;
//             default:
//                 return state;
//         }
//     }
//     // useReducer 훅을 사용하여 상태관리를 준비.
//     // number : 현재 상태값을 저장할 변수
//     // dispatch : 상태 변경을 위한 함수
//     // reducer : 위에 정의한 함수
//     const [number, dispatch] = useReducer(reducer, 0);

//     return (
//         <div>
//           <h2>현재 숫자: {number}</h2>
//           <button onClick={() => dispatch('더하기')}>
//             더하기 버튼
//           </button>
//           <button onClick={() => dispatch('빼기')}>
//             빼기 버튼
//           </button>
//           <button onClick={() => dispatch('초기화')}>
//             초기화 버튼
//           </button>
//         </div>
//       );

// }

// reducer 함수를 바깥으로 분리해두면
// 해당 상태값 state, action에 대한 값들을 다른 컴포넌트와 공유도 가능.
function reducer(state, action) {
    console.log(state);
    console.log(action);
  
    switch (action.type) {
      case "decrement":
        // action의 type이 "decrement"일 때, 현재 state 객체의 count에서 1을 뺀 값을 반환함
        return { count: state.count - 1 };
      case "increment":
        // action의 type이 "increment"일 때, 현재 state 객체의 count에서 1을 더한 값을 반환함
        return { count: state.count + 1 };
      default:
        // 정의되지 않은 action type이 넘어왔을 때는 에러를 발생시킴
        throw new Error("Unsupported action type:", action.type);
    }
  }
  
  function Counter() {
    const [number, dispatch] = useReducer(reducer, { count: 0 });
  
    return (
      <>
        {/* 현재 카운트 값은 state인 number 객체의 count로부터 읽어옴 */}
        <h1>Count: {number.count}</h1>
        {/* 카운트 값의 변경을 위해 각 버튼이 클릭되면 dispatch 함수가 발동되면서 reducer 함수가 실행됨.
            dispatch 함수의 인자로, action 객체가 설정되었는데,
            action 객체의 type에는 어떤 버튼을 클릭하였는지에 따라
            "decrement" 또는 "increment"가 들어감
        */}
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </>
    );
  }

export default Counter;