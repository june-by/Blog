const express = require('express');
const { Post, User } = require('../models');
const router = express.Router();

router.get('/load',async(req,res,next)=>{ //loadpost
    try{
        const posts = await Post.findAll({
            limit : 6,
            order : [
                ['createdAt','DESC'],
            ]
            
        })
        res.status(200).json(posts);
    }catch(error){
        console.error(error);
        next(error);
    }
})

router.get('/load/:category',async(req,res,next)=>{
    try{
        const posts = await Post.findAll({
            where : {category : req.params.category},
            order : [
                ['createdAt','DESC'],
            ]
            
        })
        res.status(200).json(posts);
    }catch(err){
        console.error(err);
        next(err);
    }
})

module.exports = router; 