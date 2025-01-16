const express = require('express');
const router = express.Router();
const Fruit = require('../models/fruit');



router.get('/', async (req,res) => {
    try {
        const allFruit = await Fruit.find({});
        res.json(allFruit);
    } catch (error) {
        res.status(500).json({error});
    }
})

router.get('/:id', async(req, res)=> {
    try {
        const singleFruit = await Fruit.findById(req.params.id);
        res.json(singleFruit);
    } catch (error) {
        res.status(500).json({error})
    }
})

router.post('/', async (req, res) => {
    try{
        const createdFruit = await Fruit.create(req.body);
        res.json(createdFruit);
        console.log(req.body);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.put('/:id', async(req,res) => {
    try {
        const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id,req.body);
        res.json(updatedFruit);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const deletedFruit = await Fruit.findByIdAndDelete(req.params.id);
        res.json(deletedFruit)
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;