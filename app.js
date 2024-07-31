


// const express = require('express');
// const morgan = require('morgan');
// const app = express();

// app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());


// app.use((err, req, res, next) => {
//     res.status(err.status || 500).json({ error: err.message });
// });

// module.exports = app;






const express = require('express');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const {sequelize,User} = require('./models')
const app = express();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.urlencoded({extended: true})) // if nested request like user array containing name,email inside an array is sent this allows it to have this kind of request
app.use(bodyParser.json())


app.use((req,err,res,next)=>{
    res.status(err.status || 500).json({error:err.message})
})

app.post('/users', async(req,res)=>{
    const {name,email,password}  = req.body

    try{
        const user = await User.create({name,email,password})
        return res.json(user)
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

module.exports= app;
