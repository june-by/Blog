const express = require('express');
const { Post, User } = require('../models');
const router = express.Router();

router.get('/load',async(req,res,next)=>{ //loadpost
    try{
        const posts = await Post.findAll({
            limit : 10,
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

module.exports = router; 