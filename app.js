const express = require('express');
let app = express();

var PORT = process.env.PORT || 3001;

app.set('view engine','ejs');
app.use(express.static("./public"));

app.get('/',(req,res)=>{
    res.render('todonew.ejs');
});

app.listen(PORT,process.env.IP,()=>{
    console.log('Todo List has started');
})