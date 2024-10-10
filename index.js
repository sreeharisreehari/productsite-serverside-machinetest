require('dotenv').config()
const express=require('express')


const cors=require('cors')

const router=require('./router/router')

require('./DB/connection')

const productserver=express()

productserver.use(cors())

productserver.use(express.json()) 

productserver.use(router)

productserver.use('/uploads',express.static('./uploads'))




const PORT=4000 || process.env


productserver.listen(PORT, ()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
})

productserver.get('/',(req,res)=>{
    res.send(`product running succesfuly and ready to accept request`)
})

// // post request
// pfserver.post('/',(req,res)=>{
//     res.send(`post request`)
// })


