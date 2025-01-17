const express = require('express');
const router = express.Router();

const Posts = require('../models/posts');
const starterPosts = require('../config/posts'); 

//Clear + Repopulate with starter data
router.get('/seed', async (req,res) => {
    try {
        await Posts.deleteMany({});
        await Posts.create(starterPosts);
        res.json(starterPosts);
    } catch (err) {
        console.log(err)
    }
})

router.get('/', async (req,res) => {
    try {
        const allItems = await Posts.find({});
        res.json(allItems);
    } catch (error) {
        res.status(500).json({error});
    }
})

router.get('/:id', async(req, res)=> {
    try {
        const singleItem = await Posts.findById(req.params.id);
        res.json(singleItem);
    } catch (error) {
        res.status(500).json({error})
    }
})

router.post('/', async (req, res) => {
    try{
        console.log(req.body)
        const createdItem = await Posts.create(req.body);
        res.json(createdItem);
        console.log(req.body);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.put('/:id', async(req,res) => {
    try {
        const updatedItem = await Posts.findByIdAndUpdate(req.params.id,req.body);
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const deletedItem = await Posts.findByIdAndDelete(req.params.id);
        res.json(deletedItem)
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;