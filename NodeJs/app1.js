const express = require("express");
const path = require("path");

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Hi Hello',
        status:"success"
     });
});

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'));
});

app.get("/user/:id", (req, res) => {
    res.json({
        userId: req.params.id
    });
});
 

app.listen(3000, () => console.log("App is ready"));