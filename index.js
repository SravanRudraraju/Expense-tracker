import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
import pg from "pg";

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
const __dirname = dirname(fileURLToPath(import.meta.url))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/add-expense",(req,res)=>{
    // console.log(req.body.title);
    // console.log(req.body.amount);
    // console.log(typeof req.body.amount);
    const title = req.body.title;
    const amount = parseInt(req.body.amount);
})
app.listen(port,()=>{
    console.log(`listening at ${port}`);
})