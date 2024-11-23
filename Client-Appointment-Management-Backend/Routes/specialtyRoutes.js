const express=require('express');
const router=express.Router();
const specialty=require('../Services/specialtyServices')
router.route('/createspecialty').post(specialty.Createspecialty)
router.route('/').get(specialty.findspecialty)
router.route('/deleteupdate/:id').delete(specialty.findspecialty).patch(specialty.Updatespecialty)
module.exports = router