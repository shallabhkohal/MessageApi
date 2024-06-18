const express = require ("express")
require("./db/connect")

const router = require("./routes/routes")

const app = express()
const PORT = 3000;

app.use(express.json())
app.use(router)

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})