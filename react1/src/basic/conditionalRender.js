//conditionalRender.js
import React, {useState} from "react";
// 조건부 랜더링
// react는 조건부의 랜더링 기준이 컴포넌트 단위도 가능.

function MissedGoal(){
    return <h1>아이고 ㄲㅂㄲㅂ ㅋㅋㅋㅋ</h1>
}

function MadeGoal(){
    return <h1>골골골!!!! 끼얏호우</h1>
}

function App(props){
    let isGoal = props.isGoal;
    if(isGoal){
        return <MadeGoal />;
    }
    return <MissedGoal />
}



export default App;