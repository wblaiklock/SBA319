const express = require('express');
const router = express.Router();
const Users = require('../models/users');

const starterUsers = require('../config/users'); 

router.get('/seed', async (req,res) => {
    try {
        await Users.deleteMany({});
        await Users.create(starterUsers);
        res.json(starterUsers);
    } catch (err) {
        console.log(err)
    }
})

router.get('/', async (req,res) => {
    try {
        const allItems = await Users.find({});
        res.json(allItems);
    } catch (error) {
        res.status(500).json({error});
    }
})

router.get('/:id', async(req, res)=> {
    try {
        const singleItem = await Users.findById(req.params.id);
        res.json(singleItem);
    } catch (error) {
        res.status(500).json({error})
    }
})

router.post('/', async (req, res) => {
    try{
        console.log(req.body)
        const createdItem = await Users.create(req.body);
        res.json(createdItem);
        console.log(req.body);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.put('/:id', async(req,res) => {
    try {
        const updatedItem = await Users.findByIdAndUpdate(req.params.id,req.body);
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const deletedItem = await Users.findByIdAndDelete(req.params.id);
        res.json(deletedItem)
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;