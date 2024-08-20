import express from "express";
import bodyParser from "body-parser";
import bwipjs from 'bwip-js'; 

const app = express();
const port = 4000;


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.render("index.ejs");
})

app.post("/submit", async (req, res) =>{
    const urlText = req.body["text"];
    try {
        const urlImg = await bwipjs.toBuffer({
            bcid: 'code128',       
            text: urlText,         
            scale: 3,              
            height: 10,            
            includetext: true,    
            textxalign: 'center',  
        });
        const base64Image = urlImg.toString('base64');
        const imageDataUri = `data:image/png;base64,${base64Image}`;

        res.render("generate.ejs", {
            generatedBarCode: imageDataUri,
            providedUrl: urlText,
        });
    } catch (err) {
        console.log(err);
    }
})

app.post("/redirect", (req, res) =>{
    res.redirect("/");
})

app.listen(port, (req, res) =>{
    console.log(`Server running on port : ${port}.`);
})