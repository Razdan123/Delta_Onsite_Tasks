const express = require('express');
const app = express();
const PORT = process.env.PORT || 6006;
const mongoose = require("mongoose");
const url = require('./models/url');


//mongdb connection
mongoose.connect('mongodb://localhost/urlCompressor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`)
});


app.set('view engine','ejs');
app.use(express.urlencoded({extended : false}));

app.get('/',async(req,res)=>{
    const urls = await url.find();
    res.render('home',{
        urls:urls,
    })
});

app.post('/newurls',async(req,res)=>{
await url.create({longurl : req.body.longurl})
res.redirect('/');
});



app.get('/:shorturl',async(req,res) => {
    const shortUrl = await url.findOne({shorturl: req.params.shorturl}) 
    if(shortUrl == null) return res.sendStatus(404)
    shortUrl.clicks++;
    shortUrl.save();
    res.redirect(shortUrl.longurl);
})

app.listen(PORT,() => {
    console.log(`server is running at port number ${PORT}`);
});