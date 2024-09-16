import express,{Request,Response} from "express";
const app = express()

app.get("/", (req:Request, res:Response)=>{
    res.status(200).json("Hello, im eunice99x")
})

const PORT = 3333;

app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`)
})