require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.json())

const users = [
    {email : "alice@example.com",password:"alice@123"},
    {email : "bob@example.com",password : "bob123"},
    {email : "charlie@example.com",password : "charlie123"},
]


app.put('/update/:email',async(req,res)=>{
    try {
        const id = req.params.email
        const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true})
        if(!updateUser){
            res.status(200).json("Email.not Found")
        }
        res.json(updateUser)
    } catch (error) {
        res.status(400).json(error)
    }
    

})


app.delete("/user/:email",async(req,res)=>{
    try {
        const id = req.params.email
        const deleteUser = await users.findByIdAndDelete(id)
        if(!deleteUser){
            res.status(404).json("Email not Found")
        }
        res.status(200).json("User has been deleted successfully")
    } catch (error) {
        res.status(400).json(error)
    }
})


const PORT = 3000

app.listen(PORT,()=>{
    console.log(`Server is running on : http://localhost:${PORT}`)
})