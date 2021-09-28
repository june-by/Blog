const express = require('express');
const { Post, User,Comment } = require('../models');
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;

router.get('/load',async(req,res,next)=>{ //loadpost
    try{
        const posts = await Post.findAll({
            limit : 12,
            order : [
                ['createdAt','DESC'],
            ],
            include : [{
                model : Comment,
                include : [{
                    model : User,
                    attributes : ["id"]
                 }]
             }]
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

router.get('/search/:keyword',async(req,res,next)=>{
    try{
        const posts = await Post.findAll({
            where : { 
                title: {
                    [Op.like]: "%" + decodeURIComponent(req.params.keyword) + "%"
                }
            },
            order : [
                ['createdAt','DESC'],
            ]
        })
        console.log("posts : ", posts);
        res.status(200).json(posts);
    }catch(err){
        console.error(err);
        next(err);
    }
})


module.exports = router; 