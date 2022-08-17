import express from 'express'
const app = express()
import 'dotenv/config'
import connectDB from './config/db.js';
import cors from 'cors'

app.use(express.json({limit:'30mb', extended:true}))
app.use(express.urlencoded({limit:'30mb', extended:true}))
app.use(cors())
app.use((err, req, res, next)=>{
    res.status(err.status).send(err.message)
})

app.listen(process.env.PORT, ()=>{
    console.log('Server connected')
    connectDB()
})