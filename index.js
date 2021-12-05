const express=require('express')
require('dotenv').config()
const db=require('./database/connection')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const expressValidator=require('express-validator')
const cookieParser=require('cookie-parser')


const categoryRoute=require('./routes/categoryRoute')
const productRoute=require('./routes/productRoute')
const authRoute=require('./routes/authRoute')
const orderRoute=require('./routes/orderRoute')

const app=express()


//middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/public/uploads',express.static('public/uploads'))
app.use(expressValidator())
app.use(cookieParser())
// app.get('/',(req,res)=>{
//     res.send('welcome to express js')
// })


//routes
app.use('/api',categoryRoute)
app.use('/api',productRoute)
//localhost:8000/api/.....
app.use('/api',authRoute)
app.use('/api',orderRoute)


const port=process.env.PORT || 8000 

app.listen(port,()=>{
    console.log(`Server Started on port ${port}`)
})