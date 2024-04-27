// import {useState, useEffect} from 'react'
// import axios from 'axios'


// const Read = () =>{
//     const [serverData, setServerData] = useState()
//     useEffect(() =>{
//         const fetchData = async() =>{
//             try{
//                 const response = await axios.get('http://localhost:8080/readfromserver')
//                 const dataFromServer = response.data.message
//                 setServerData(dataFromServer)
//             }
//             catch(err){
//                 console.log(err.message)
//             }
//         }
//         fetchData()
//     },[])
//     return(
//         <>
//         {serverData}
//         </>
//     )
// }
// export default Read;

import { useState, useEffect } from 'react';
import axios from 'axios';

const Read = () => {
    const [serverData, setServerData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/readfromserver');
                const dataFromServer = response.data;
                setServerData(dataFromServer);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <p>Data from server: {serverData}</p>
        </div>
    );
};

export default Read;
