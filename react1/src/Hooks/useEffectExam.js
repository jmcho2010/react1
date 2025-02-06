import React, {useState, useEffect} from "react";

// useEffect
// 주로 관리하는 예시는
// 1. 데이터 가져오기시 사용
// 2. DOM direct update
// 3. timer

// useEffect의 기본양식
// useEffect(() =>{
// 언제나 랜더링
// 
// })

// useEffect는 모든 랜더링에서 실행됨.
// useEffect는 실행의 기준을 개발자가 잡아줄 필요가있음
// ex) 마운트 될때만 실행시킨다던지, 마운트 업데이트때만 실행시킨다던지.
// Effect 실행 제어 방법.
// 1. 빈 배열선언
// useEffect(() =>{
// 처음만 실행.
//  
// }, [])
// 2. 상태값 추가.
// useEffect(() =>{
// 처음 랜더링시 실행
// 값이 변경될때마다 실행. 
// }, [])

// 화면을 킨지 ~초 지났습니다 메세지를 1초마다 갱신하여 보여주세요
// function Timer(){

//     const [count, setCount] = useState(0);

//     useEffect(() =>{
//         setTimeout(() =>{
//             setCount((count) => count + 1);
//         }, 1000);
//     })

//     return <h1>화면을 킨지 {count}초 지났습니다.</h1>

// }

// 상태값까지 추가하여 Effect를 제어하는 예시

// function Counter(){
//     const [count, setCount] = useState(0);
//     const [cal, setCal] = useState(0);

//     // 마운트시 실행
//     useEffect(() => {
//         setCal(() => count * 2);
//         console.log("test111111");

//         //컴포넌트 언마운트를 제어할수도 있음
//         return () =>{
//             console.log("계산완료");
//         }

//     }, [count]);

//     // 컴포넌트가 사라질때 실행.
//     return(
//         <>
//             <p>Count : {count}</p>
//             <button onClick={() => setCount((c) => c+1)}>+</button>
//             <p>*2한값 : {cal}</p>
//         </>
//     )
// }

// 데이터를 요청하여 응답받은후 처리할때 Effect를 활용


// 퀴즈
// jsonplaceholder에서 데이터 로딩
// id, name, email 정보를 화면에 view
// 힌트 : 여러건이다 보니 view 할때는 map 함수를 활용.
//   정보를 받아올 배열은 
//   const [users, setUsers] = useState([]);
//   예를들어 이런식으로 setUsers(Array.isArray(data) ? data : []);

function UserData(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUser(){
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/');
                const data = await response.json();
                setUsers(Array.isArray(data) ? data : []);    
            } catch (error) {
                console.error("에러발생", error);
            }
        }
        fetchUser();
    }, []);

    return (
        <div>
            {users.map(user =>(
                <div key={user.id}>
                    {user.id}
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                </div>
                
            ))}
        </div>
    )

}

export default UserData;

