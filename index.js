import express from "express";
import axios from 'axios'

const port = 3000;
const app = express();
const API_URL = "http://localhost:4000/"


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
    
    try {
        let response = await axios.get(API_URL+"posts")
        res.render("index.ejs",{
            posts : response.data
            
        })
        console.log(data.data)
        
    } catch (error) {
        console.log(error)
    }
   
});


app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/delete",(req,res)=>{
    res.redirect("/")
})

app.post("/add", async (req, res) => {
    try {
        let response = await axios.post(API_URL+"posts",req.body)
        console.log(response.data)
        res.redirect("/"); // Redirect to the home page
    } catch (error) {
        console.log(error)
    }
    
});



// Start the server
app.listen(port, () => {
    console.log(`Sailing on port ${port}, Captain ⛵︎`);
});
