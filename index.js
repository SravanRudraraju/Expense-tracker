import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user : "postgres",
    host : "localhost",
    database : "expense-tracker",
    password : "varma0408",
    port : "5432"
})
db.connect();

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
    // console.log(title, amount);
    db.query("insert into expenses (title,amount) values($1,$2)",[title,amount])
    res.redirect("/")
})
app.listen(port,()=>{
    console.log(`listening at ${port}`);
})