const express= require('express');
const path= require('path');
const app = express();
const artical= require('./mod/artical');



app.use(express.static(path.join(__dirname, 'public'))); // Serve

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", function(req, res) {
    //   console.log("Server received
    res.sendFile(path.join(__dirname,'views', 'skybook.html'));
});

app.post("/addartical",async(req, res) => {
    const articalP=req.body.artical;
    const newArtical =new artical({title: articalP});
    await newArtical.save();
    res.sendFile(path.join(__dirname,'views', 'skybook.html'));
    


 } )

 app.get("/posts", async(req, res) => {
    const articals= await artical.find();
    res.send(articals);
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});
