// 실습예시1
// 1. "안녕하세요" 버튼을 만드세요
// 2. 버튼을 클릭하면 메시지가 "안녕히가세요"로 변경되어야 해요
// 3. 다시 클릭하면 "안녕하세요"로 돌아가야 해요

import React, {useState} from "react";



function Quiz(){

    //hook
    const [msg, setMsg] = useState("하이용");

    let quizEvt = () =>{
        if(msg ==="하이용"){
            setMsg("안녕히가세요");
        }else{
            setMsg("하이용");
        }
    }

    return(
        <button onClick={quizEvt}>
            {msg}
        </button>
    );
}

//실습예시2
// 요구사항:
// 1. 특문(☆) 이모티콘과 숫자를 보여주는 컴포넌트를 만드세요
// 2. 이모티콘을 클릭할 때마다 숫자가 1씩 증가해야 해요
// 3. 숫자가 10이 되면 "최대 클릭 수에 도달했습니다!"라는 메시지를 표시하세요

function Quiz2(){
    // 배열의 비구조화 할당 문법
    const [count, setCount] = useState(1);

    const clickCnt = () =>{
        if (count <10){
            setCount(count + 1);
        }
    }

    return(
        <div>
            <div onClick={clickCnt}>
               ♥ {count}
            </div>
            {count === 10 && <p>최대 클릭수에 도달함</p>}
        </div>
    );
}


export default Quiz2;