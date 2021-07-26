const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const multiparty = require('connect-multiparty');
const cors = require('cors');

const multipartyMiddelware = multiparty({uploadDir : './images'});
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());


app.get('/',(req,res)=>{
    res.send("ㅎㅇ");
})

app.post('/uploads',multipartyMiddelware,(req,res)=>{
    console.log(req.files.upload);
})

app.listen(3085,()=>{
    console.log("서버 실행 중");
})