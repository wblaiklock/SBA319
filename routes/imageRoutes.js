const express = require('express');
const router = express.Router();
const Images = require('../models/images');

const starterImages = require('../config/images'); 

router.get('/seed', async (req,res) => {
    try {
        await Images.deleteMany({});
        await Images.create(starterImages);
        res.json(starterImages);
    } catch (err) {
        console.log(err)
    }
})

router.get('/', async (req,res) => {
    try {
        const allItems = await Images.find({});
        res.json(allItems);
    } catch (error) {
        res.status(500).json({error});
    }
})

router.get('/:id', async(req, res)=> {
    try {
        const singleItem = await Images.findById(req.params.id);
        res.json(singleItem);
    } catch (error) {
        res.status(500).json({error})
    }
})

router.post('/', async (req, res) => {
    try{
        console.log(req.body)
        const createdItem = await Images.create(req.body);
        res.json(createdItem);
        console.log(req.body);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.put('/:id', async(req,res) => {
    try {
        const updatedItem = await Images.findByIdAndUpdate(req.params.id,req.body);
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const deletedItem = await Images.findByIdAndDelete(req.params.id);
        res.json(deletedItem)
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;