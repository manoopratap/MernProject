const router = require('express').Router();
const user = require('../model/user');

router.get( "/" ,  (req,res) =>{
    user.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('error ' + err ))
})


module.exports=router;