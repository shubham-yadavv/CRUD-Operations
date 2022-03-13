const express = require('express');
const router = express.Router();
const Programmer = require('../models/programmer');

router.get('/', async(req, res) => {
    try{
            const programmers =  await Programmer.find();
            res.json(programmers);
    }
    catch(err){
        res.send('Erroe' + err)
}});

router.get('/:id', async(req, res) => {
    try{
            const programmer =  await Programmer.findById(req.params.id);
            res.json(programmer);
    }
    catch(err){
        res.send('Erroe' + err)
}});

router.post('/', async(req, res) => {
    const programmer = new Programmer({
        name: req.body.name,
        tech: req.body.tech,
        internship: req.body.internship
    });
    try{
        const savedProgrammer = await programmer.save();
        res.json(savedProgrammer);
    }
    catch(err){
        res.send('Error' + err)
    }
});


router.put('/:id', async(req, res) => {
    try{
        const updatedProgrammer = await Programmer.findById(req.params.id);
        updatedProgrammer.name = req.body.name;
        updatedProgrammer.tech = req.body.tech;
        updatedProgrammer.internship = req.body.internship;
        await updatedProgrammer.save();
        res.json(updatedProgrammer);
    }
    catch(err){
        res.send('Error' + err)
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const removedProgrammer = await Programmer.remove({_id: req.params.id});
        res.json(removedProgrammer);
    }
    catch(err){
        res.send('Error' + err)
    }
    
});

 
module.exports = router;