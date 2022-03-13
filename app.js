const express = require('express');
const mongoose = require('mongoose');
const app = express();

const url = `mongodb+srv://shubh22121:crud22121@cluster0.bdyem.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json()) 

const programmerRouter = require('./routes/programmers')
app.use('/programmers',programmerRouter)

app.listen(3000, () => {
    console.log('Server started')
}) 