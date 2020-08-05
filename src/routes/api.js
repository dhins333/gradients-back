const express = require('express');
const Color = require('../models/Color');

const router = express.Router();

router.post('/api/add',async (req,res) => {

    try{
        const color = new Color(req.body);
        const result = await color.save();
        res.status(200).send(result);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }

})

router.get('/api/get',async (req,res) => {
    try{
        const colorPairs = await Color.find({});
        res.status(200).send(JSON.stringify(colorPairs));
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})

module.exports = router;

