const router = require('express').Router();
const User = require("../models/User");

const Post = require('../models/Post');
const { findById } = require('../models/User');

//create POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (error) {
    console.log("problem")
    res.status(500).json(error)

  }
});

//update POST

router.put("/:id", async (req, res) => {
  try {
    const postToUpdate = await Post.findById(req.params.id)

    if (postToUpdate.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedPost)
      } catch (error) {
        res.status(500).json(error)
      }

    }
    else {
      res.status(500).json("not authrised")
    }
  } catch (error) {
    res.status(500).json(error)
  }

})
//delete Post
//update POST

router.delete("/:id", async (req, res) => {
  try {
    const postDel = await Post.findById(req.params.id)

    if (postDel.username === req.body.username) {
      try {
        await postDel.delete()
        res.status(200).json("Deleted")
      } catch (error) {
        res.status(500).json(error)
      }

    }
    else {
      res.status(500).json("not authrised")
    }
  } catch (error) {
    res.status(500).json(error)
  }

})
// 
// get post

router.get('/:id', async (req, res) => {


  try {
    const post = await Post.findById(req.params.id)

    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
})

// Get All POSTS

router.get('/', async (req, res) => {


  try {

    const username = req.query.user
    const catName = req.query.cat
    let posts;
    if (username) {
      posts =await  Post.find({username})
      res.status(200).json(posts)
    } else if (catName) {
      posts =await Post.find({ category: { $in: [catName] } })
      res.status(200).json(posts)
    }else{
      posts =await Post.find()
      res.status(200).json(posts)
    }



  
  } catch (error) {
    res.status(500).json(error)
  }
})
module.exports = router;