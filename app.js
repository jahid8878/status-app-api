const express = require('express');
const cors = require('cors');
require('./config/db.js')

const userRouter = require('./routes/user.route');
const statusRouter = require('./routes/status.route');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/status', statusRouter);

app.get('/', (req, res)=>{
    res.sendFile(__dirname+ "/./views/index.html");
});

//route not found
app.use((req, res, next)=>{
    res.status(404).json({
        message: 'page is not found'
    })
})
//server error handaling
app.use((err, req, res, next)=>{
    res.status(500).json({
        message: 'something is broke'
    })
})


module.exports = app;