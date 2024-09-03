const express = require('express');
const authRouter =  require('./router/auth.js');



const app  = express();
app.listen(8443 , (req , res) => {

    console.log("server is running hi");

});
app.use(express.json());

app.use(express.json());
app.use('/auth' , authRouter);