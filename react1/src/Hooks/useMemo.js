// useMemo.js
// 구성요소 랜더링 관리 기법
//  -> props가 전달(변경)이 되지 않으면
//     react가 구성요소 렌더링을 생략

// useMemo, useCallback - 메모장
//  -> 메모리에 값을 등록하여 다시 계산할 필요가 없도록 하는 개념.
// useMemo, callback의 사용이유
//  -> 성능 최적화, 불필요한 실행 방지

// memo - 계산한 값을 기억하는 hook
//  -> 답을 미리 계산해뒀다가 필요할때 꺼내보는 개념
// callback - 함수 자체를 기억하는 hook
//  -> 문제풀이 자체를 기억하는 개념.

// 참조평등(referential equality)
//  -> 같은 컴포넌트에 있는 함수의 이벤트가 발생했을시
//     다른 컴포넌트 함수의 내용도 재랜더링 되는 개념.

// useCallback의 예시
import React, { useCallback, useState } from "react"
import Todos from './useMemoTodo.js';


function Calbak(){
    // count, increment를 활용하여
    // +버튼을 누를때마다 버튼을 누른 횟수자체를 출력할수 있도록 이 코드를 완성.
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);


    const increment = () => {
        setCount(count +1);
    };

    const addTodo = useCallback(() =>{
        setTodos((t) => [...t, "새로운 할일"]);
    }, [todos]);

    return(
        <>
        <Todos todos={todos} addTodo={addTodo}/>
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
        </>
    );
}

export default Calbak;