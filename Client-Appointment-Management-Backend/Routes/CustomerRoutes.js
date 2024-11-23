const express=require('express')
const route=express.Router();
const cusrtomer=require('../Services/CustomerServices')
route.route('/').post(cusrtomer.CreateCustomer).get(cusrtomer.GetAllCustomers)
route.route('/customer/:id').get(cusrtomer.GetCustomer).patch(cusrtomer.UpdateCustomer)


module.exports = route;