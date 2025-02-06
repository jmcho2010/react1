//Forms.js

// 퀴즈
// 요구사항:
// 1. 이름과 나이를 입력받는 폼을 만드세요
// 2. 제출 버튼을 누르면 입력된 정보를 화면에 표시하세요
// 3. 제출 후에는 입력창을 비우고, 나이가 0보다 작으면 제출되지 않게 하세요


import React, {useState} from "react";

//select box
function SelectBoxTest(){
    const [sel, setSel] = useState("test3");

    const selChange = (event) =>{
        setSel(event.target.value);
    }

    return(
        <form>
            <select value={sel} onChange={selChange}>
                <option value="test1">test1</option>
                <option value="test2">test2</option>
                <option value="test3">test3</option>
            </select>
        </form>
    )
}


// function UserForm(){
//     const [name, setName] = useState("");
//     const [age, setAge] = useState("");
//     const [submittedData, setSubmittedData] = useState(null);

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         console.log(`전송받은 데이터 ${submittedData}`);
//         if(age >0){
//             setSubmittedData({ name, age });
//             console.log(`전송받은 데이터2222222 ${submittedData}`);
//             setName("");
//             setAge("");
//         }else{
//             alert("나이는 0 이상 입력해주세요");
//         }
//         console.log(`전송받은 데이터3333333 ${submittedData}`);
//     }

//     return(
//         <>
//         <form onSubmit={handleSubmit}>
//             <label> 이름을 입력하세요:
//                 <input 
//                     type="text"
//                     name="username"
//                     value={name}
//                     onChange= {(e) => setName(e.target.value)}
//                 />
//             </label>
//             <label> 나이를 입력하세요:
//                 <input 
//                     type="number"
//                     name="age"
//                     value={age}
//                     onChange= {(e) => setAge(e.target.value)}
//                 />
//             </label>
//             <button type="submit">제출</button>
//         </form>

//         {submittedData && (
//          <div>
//             <h3>제출된 정보 : </h3>
//             <p>이름 : {submittedData.name}</p>
//             <p>나이 : {submittedData.age}</p>
//          </div>   
//         )}
//     </>
//     );


// }

// function Formtest(){
//     //const [name, setName] = useState("");
//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]:value}))
//     }

//     const submitTest = (event) => {
//         event.preventDefault();
//         console.log(inputs);
//         console.log(event.value);
//         console.log(`요청하는 값 :  ${inputs}`);
//     }

//     return(
//         <form onSubmit={submitTest}>
            // <label> 이름을 입력하세요:
            //     <input 
            //         type="text"
            //         name="username"
            //         value={inputs.username || ""}
            //         onChange= {handleChange}
            //     />
            // </label>
            // <label> 나이를 입력하세요:
            //     <input 
            //         type="number"
            //         name="age"
            //         value={inputs.age || ""}
            //         onChange= {handleChange}
            //     />
            // </label>
            // <input type="submit" />
//         </form>
//     );
// }

export default SelectBoxTest;
//export default Formtest;