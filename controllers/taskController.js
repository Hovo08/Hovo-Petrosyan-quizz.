import express from "express";
import { v4 as uuid } from "uuid";
import checkRegexp from "../utils/validator.js";
const app = express();
const posts = [];


async function newPosts(req, res) {
  try{
    const postData = req.body
    
    if (
      checkRegexp.titleValidation(postData.title) &&
      checkRegexp.descriptionValidation(postData.description) === true
    ) {
      postData.id = uuid();
      postData.taskDate = new Date();
      res.statusCode = 200;
      posts.push(postData.taskDate);
      console.log(posts);
      res.json({ message: "Post created successfully", post: postData });
      
    } else {
      res.statusCode = 400;
      res.send( "Invalid data");
    }
  } catch(err){
    res.statusCode = 404;
    res.send( err.message)
  }
}


async function getPosts(req, res) {
  try{
    res.json(posts);
  } catch(err){
    res.statusCode = 404;
    res.json({ message: "Error getting posts", error: err });
  }
}

async function getId (req, res){
   try{
    let  checkId = posts.find((params) => {
      return params.id === req.params.id;
    });
    if(checkId){
      res.send("Okay codes")
      res.statusCode = 200;
    } else {
      res.send("Not Found")
      res.statusCode = 404;
    }
   } catch(err){
    res.statusCode = 404;
    res.json({ message: "Error getting post", error: err });
   }
};

async function updatePost(req, res){
  try{
    let  checkId = posts.find((params) => {
      return params.id === req.params.id;
    });
    if(checkId){
      checkId.title = req.body.title || checkId.title;
      checkId.description = req.body.description || checkId.description;
      res.send("Post updated")
      res.statusCode = 200;
    } else {
      res.send("Not Found")
      res.statusCode = 404;
    }
   } catch(err){
    res.statusCode = 404;
    res.json({ message: "Error updating post", error: err });
   }
}
 
export default {
    newPosts,
    getPosts,
    getId,
    updatePost
}