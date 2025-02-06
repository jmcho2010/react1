//Forms.js

// 퀴즈
// 요구사항:
// 1. 이름과 나이를 입력받는 폼을 만드세요
// 2. 제출 버튼을 누르면 입력된 정보를 화면에 표시하세요
// 3. 제출 후에는 입력창을 비우고, 나이가 0보다 작으면 제출되지 않게 하세요


import React, {useState} from "react";

function UserForm(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    <form onSubmit={handleSubmit}>
        <label>
        <input />
        </label>

        <label>
        <input />
        </label>

    </form>

}

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
//             <label> 이름을 입력하세요:
//                 <input 
//                     type="text"
//                     name="username"
//                     value={inputs.username || ""}
//                     onChange= {handleChange}
//                 />
//             </label>
//             <label> 나이를 입력하세요:
//                 <input 
//                     type="number"
//                     name="age"
//                     value={inputs.age || ""}
//                     onChange= {handleChange}
//                 />
//             </label>
//             <input type="submit" />
//         </form>
//     );
// }

export default Formtest;