const { request } = require('express');
const Statuses = require('../models/status.model');
const {v4: uuid} = require('uuid');

const createStatus = async(req, res)=>{
   try {
    const newStatus = new Statuses({
        id: uuid(),
        content: req.body.content,
        liked: Number(req.body.liked)
    })
      await newStatus.save();
      res.status(201).json(newStatus)
   } catch (error) {
    res.status(500).json(error.message)
   }}

   const getAllStatus = async(req, res)=>{
    try {
        const status = await Statuses.find();
       res.status(200).json(status)
     }
      catch (error) {
     res.status(500).json(error.message)
    }}

    const updateStatus = async(req, res)=>{
        try {
            const updatedStatus = await Statuses.findOne({id: req.params.id});
            updatedStatus.content = req.body.content;
            updatedStatus.liked = updatedStatus.liked;
            await updatedStatus.save();
           res.status(201).json(updatedStatus)
         }
          catch (error) {
         res.status(500).json(error.message)
 }}

 const updateStatusLiked = async(req, res)=>{
  try {
      const updatedStatus = await Statuses.findOne({id: req.params.id});
      updatedStatus.content = updatedStatus.content;
      updatedStatus.liked = req.body.liked;
      await updatedStatus.save();
     res.status(201).json(updatedStatus)
   }
    catch (error) {
   res.status(500).json(error.message)
}}

 const deleteStatus = async(req, res)=>{
    try {
        await Statuses.deleteOne({id: req.params.id});
       res.status(201).json({message: 'status is deleted successfull'})
     }
      catch (error) {
     res.status(500).json(error.message)
}}
     
 


module.exports = {createStatus, getAllStatus, updateStatus, deleteStatus, updateStatusLiked}