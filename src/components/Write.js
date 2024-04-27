// import {useState} from 'react'
// import axios from 'axios';

// const Write = () => {
//     const [inputValue, setInputValue] = useState()
//     const saveData = async() =>{
//         try{
//             await axios.post('http://localhost:8080/writetodatabase', 
//             {content: inputValue})
//             console.log("Data: ", inputValue)
//             alert('Data Saved: ', inputValue)
//         }
//         catch(err){
//             console.log(err.message)
//         }
//     }
//     return (
//         <div>
//             <input type="text"   value={inputValue}  onChange={(e) => setInputValue(e.target.value)} />
//             <button onClick={saveData}>Saved to DB.....</button>
//         </div>
//     )
// }

// export default Write;


import { useState } from 'react';
import axios from 'axios';

const Write = () => {
    const [inputValue, setInputValue] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [employeeJob, setEmployeeJob] = useState('');

    const saveData = async () => {
        try {
            await axios.post('http://localhost:8080/writetodatabase', {
                content: inputValue,
                employeeId: employeeId,
                employeeName: employeeName,
                employeeJob: employeeJob
            });
            console.log("Data: ", inputValue, employeeId, employeeName, employeeJob);
            alert('Data Saved');
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div>
           Emp Name:<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="FirstName" />
           Emp id: <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} placeholder="Employee ID" />
           SureName: <input type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder="Sure Name" />
           Job Role <input type="text" value={employeeJob} onChange={(e) => setEmployeeJob(e.target.value)} placeholder="Employee Job" />
            <button onClick={saveData}>Save to DB</button>
        </div>
    );
};

export default Write;
