// const  mongoose = require('mongoose')


// const DataSchema = mongoose.Schema({
//     content:{
//         type: String,
//         requires: true
//     }
// })

// module.exports = mongoose.model('DataModel', DataSchema)


const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true
    },
    employeeName: {
        type: String,
        required: true
    },
    employeeJob: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('DataModel', DataSchema);
