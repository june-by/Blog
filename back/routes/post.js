const express = require('express');
const multiparty = require('connect-multiparty');
const router = express.Router();
const {Post, Comment,User} = require('../models');

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

router.get('/load/:postId',async(req,res,next)=>{
    try{
        const post = await Post.findOne({
            where : {id : req.params.postId}
        })
        if(!post){
            return res.status(403).send("게시글이 존재하지 않습니다");
        }
        const fullPost = await Post.findOne({
            where : {id : post.id},
            //order : [
              //  [Comment, 'createdAt', 'DESC']
            //], //최신 작성된것부터 가져온다.
            //inclue : [{
              //  model : Comment,
               // include : [{
                 //   model : User,
                   // attribute : ["id","nickname"]
                //}]
            //}]
        })
        return res.status(201).json(fullPost);
    }catch(err){
        console.error(err);
        next(err);
    }
})

router.delete('/',(req,res)=>{
    res.json({id : 1});
});





module.exports = router; 

