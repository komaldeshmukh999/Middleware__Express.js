// Create a Custom Middleware Function:

// Write a middleware function that adds a new property to the req object.
// For example: Add a req.user property with a value of "Guest".
// Set Up Routing for the Middleware:

// Create a route (/welcome) where this middleware is applied.
// In the route handler, respond with a message that includes the req.user value.
// The response should be a heading h1. Example : "Welcome, Guest!"


const express=require("express")
let app=express()
app.use((req,res,next)=>{
req.user="Guest"
next()
})

app.get("/welcome",(req,res,next)=>{
res.send(`<h1>${req.user}!</h1>`)
})


app.listen(5000,()=>{
    console.log("Middleware is created")
})
