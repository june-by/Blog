const express = require('express');
const multiparty = require('connect-multiparty');
const router = express.Router();
const {Post} = require('../models');

const multipartyMiddelware = multiparty({uploadDir : './images'});
router.post('/', async(req,res,next)=>{
    try{
        const post = await Post.create({
            title : req.body.title,
            category : req.body.category,
            hashTag : req.body.hashTag,
            content : req.body.content
        })
        res.json(post);
    }catch(err){
        console.error(err);
        next(err);
    }
});


router.delete('/',(req,res)=>{
    res.json({id : 1});
});





module.exports = router; 

