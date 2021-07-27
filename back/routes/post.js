const express = require('express');
const multiparty = require('connect-multiparty');
const router = express.Router();


const multipartyMiddelware = multiparty({uploadDir : './images'});
router.post('/', (req,res,next)=>{
    console.log(req.body.title);
    console.log(req.body.hashTagSplit);
    console.log(req.body.category);
    console.log(req.body.content);
    res.json(req.body);
});

router.delete('/',(req,res)=>{
    res.json({id : 1});
});



module.exports = router; 

