const { json } = require('express');
const User = require('../models/user.model');
const {v4: uuid} = require('uuid');

const createUser = async(req, res)=>{
   try {
    const newUser = new User({
        id: uuid(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        gender: req.body.gender,
        address: req.body.address,
    })
      await newUser.save();
      res.status(201).json(newUser)
   } catch (error) {
    res.status(500).json(error.message)
   }}

const getAllUsers = async(req, res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json(error.message)
    }
}
const getOneUser = async(req, res)=>{
    try {
        const user = await User.findOne({id: req.params.id});
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json(error.message)
    }
}
const loginUser = async(req, res)=>{
    try {
        const user = await User.findOne({email: req.body.email});
         
        if(user){
            if(user.email=== req.body.email){
                if(user.password === req.body.password){
                    res.status(200).json(user);
                }else{
                    res.status(401).json({message: 'Invalid login information'})
                }
             }
        }else{
            res.status(404).json({message: 'User not found'})
        }
        
    } catch (error) {
        res.status(404).json(error.message)
    }
}
const updateUser = async(req, res)=>{
    try {
        const user = await User.findOne({id: req.params.id});
              user.name = req.body.name || user.name,
              user.email = req.body.email || user.email,
              user.password = req.body.password || user.password,
              user.age = req.body.age || user.age,    
              user.gender = req.body.gender || user.gender,
              user.address = req.body.address || user.address
          await user.save();
          res.status(200).json(user)
       } catch (error) {
        res.status(500).json(error.message)
       }
}
const deleteUser = async(req, res)=>{
    try {
        await User.deleteOne({id: req.params.id});
        res.status(200).json({message: 'user is deleted'})
    } catch (error) {
        res.status(404).json(error.message)
    }
}




module.exports = {createUser, getAllUsers, getOneUser, updateUser, deleteUser, loginUser}