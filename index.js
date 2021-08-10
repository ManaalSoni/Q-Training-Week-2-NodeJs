// run this file with command: node index.js
const express = require('express')
require('dotenv').config() // will take all the variables from .env file and store in process.env
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/api/users"));
app.listen(3000, () => console.log('Server started'));

// app.get('/',(req, res) => {
//     res.status(200).json({
//         success:true,
//         message:messageService.getUserMessage('GET')
//     })
// })

// app.post('/',(req, res)=>{
//     res.status(200).json({
//         success:true,
//         message:messageService.getUserMessage('POST')
//     })
// })