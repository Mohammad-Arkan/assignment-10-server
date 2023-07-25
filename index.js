const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const meals = require('./data/meals.json')
app.use(cors());

app.get('/', (req, res) => {
    res.send('Assignment-10 is running')
});
app.get('/meals', (req, res)=> {
    res.send(meals)
})

app.listen(port,()=>{
    console.log(`Assignment-10 API is running on port: ${port} `)
})
