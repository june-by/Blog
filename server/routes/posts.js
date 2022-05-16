const express = require('express');
const { Post, User,Comment } = require('../models');
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;

router.get('/load/main/:page',async(req,res,next)=>{ //loadpost
    try{
        const posts = await Post.findAll({
            order : [
                ['createdAt','DESC'],
            ],
            limit : 11,
            offset : (req.params.page-1) * 11,
            attributes : ['id','title','category','createdAt']
        })

        res.status(200).json(posts);
    }catch(error){
        console.error(error);
        next(error);
    }
})

router.get('/load/length/:category',async(req,res,next)=>{
    try{
        let posts;
        if(req.params.category !== "main"){
            posts = await Post.findAll({
                where : {category : req.params.category},
                attributes : ['id']
            })
        }
        else{
            posts = await Post.findAll({
                attributes : ['id']
            })
        }
        res.status(200).json({length : posts.length});
    }catch(err){
        console.error(err);
        next(err);
    }
})

router.get('/load/:category/:page',async(req,res,next)=>{
    try{
        const posts = await Post.findAll({
            where : {category : req.params.category},
            order : [
                ['createdAt','DESC'], 
            ],
            limit : 11,
            offset : (req.params.page-1)*11,
            attributes : ['id','title','category','createdAt']
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
        res.status(200).json(posts);
    }catch(err){
        console.error(err);
        next(err);
    }
})


module.exports = router; 