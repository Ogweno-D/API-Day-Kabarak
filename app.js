const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express();

const PORT = process.env.PORT || 5001;
app.get('/api/v1/')

app.listen(PORT,()=>{

})
