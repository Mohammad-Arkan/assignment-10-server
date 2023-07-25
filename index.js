const express = require('express')
const app = express()
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Assignment-10 is running')
});
app.listen(port,()=>{
    console.log(`Assignment-10 API is running on port: ${port} `)
})
