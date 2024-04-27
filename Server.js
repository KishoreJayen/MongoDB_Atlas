// const express = require('express')
// const mongoose = require('mongoose')
// const Datamodel = require('./Datamodel')
// const connectDB = require ('./Database')
// const cors = require('cors')

// connectDB();

// const app = express();
// app.use(express.json())
// app.use(cors())

// app.get('/readfromserver', (req, res) => {
//     res.json({message: 'Server Connected'})
// })

// app.post('/writetodatabase', async (req, res) => {
//     try {
//         const { content } = req.body; // Extract 'content' from the request body
//         const newData = new Datamodel({ content }); // Use 'content' when creating a new instance
//         await newData.save();
//         res.json({ message: 'Data Saved successfully' });
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).json({ error: 'Internal Server Error' }); // Send an error response
//     }
// });


// const port = process.env.PORT || 8080
// app.listen(port, () =>{
//         console.log(`server is running on port ${port}`)
// })


const express = require('express');
const Datamodel = require('./Datamodel');
const connectDB = require('./Database'); // Corrected import path
const cors = require('cors');

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/readfromserver', (req, res) => {
    res.json({ message: 'Server Connected' });
});

app.post('/writetodatabase', async (req, res) => {
    try {
        const { content, employeeId, employeeName, employeeJob } = req.body; 
        const newData = new Datamodel({ content, employeeId, employeeName, employeeJob }); 
        await newData.save();
        res.json({ message: 'Data Saved successfully' });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

