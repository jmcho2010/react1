//usingCss.js
import React from "react";
//import styles from "./test.module.css";
// sass/scss 인식을 못하면 npm i sass
import './test.scss'
function App(){

    const freeStyle = {
        color: "white",
        backgroundColor: "crimson",
        padding: "15px",
        fontFamily: "Sans-Serif" 
    };

    return(
        <>
            {/* <h1 style={freeStyle}>떠...떳냐?</h1> */}
            {/* <h1 className={styles.test}>모듈css를 붙일떄는 클래스네임을 작성시 규칙이 있음</h1> */}

            <h1>비교용</h1>
        </>
    )
}


export default App;