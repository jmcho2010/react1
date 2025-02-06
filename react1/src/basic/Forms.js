//Forms.js

import React, {useState} from "react";

function Formtest(){
    //const [name, setName] = useState("");
    const [inputs, setInputs] = useState({});


    // const submitTest = (event) => {
    //     event.preventDefault();
    //     alert(`요청하는 값 :  ${name}`);
    // }

    return(
        <form onSubmit={submitTest}>
            <label>
                <input 
                    type="text"
                    value={name}
                    onChange= {(e) => setName(e.target.value)}
                />
            </label>
            <label>
                <input 
                    type="text"
                    value={name}
                    onChange= {(e) => setName(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    );
}

export default Formtest;