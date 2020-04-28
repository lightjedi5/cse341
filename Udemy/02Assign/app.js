const http = require('http')
const express = require('express')
const app = express()
/* part 2 of the assignment however it duplicates the console.log twice
app.use((req,res,next) => {
    console.log("Roses are red,")
    next()
})

app.use((req,res,next)=>{
    console.log("Sunflowers are yellow,")
    next()
})

app.use((req,res,next)=>{
    res.send("And so are you?")
})
*/

app.use('/users',(req,res,next)=>{
    res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
})

app.use('/',(req,res,next)=>{
    res.redirect("https://www.youtube.com/watch?v=FGBhQbmPwH8")
})

app.listen(3000)