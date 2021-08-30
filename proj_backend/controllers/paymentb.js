const express = require('express');
const router = express.Router();
const braintree = require("braintree");
const jwt = require("express-jwt");



const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "fbxwc7d9c8q8tkjd",
  publicKey: "5n2jf6hjm5r7rm59",
  privateKey: "c4b57c06c488d11946b584f68b5cf1ca"
});

exports.getToken = (req,res) =>{
    gateway.clientToken.generate({},function(err, response){
        if(err){
            res.status(500).json(err)
        }else{
            res.send(response); 
        }
      });

}

exports.processPayment = (req,res) =>{
    let nonceFromTheClient = req.body.paymentMethodNonce
    let amount = req.body.amount
    gateway.transaction.sale({
        amount: amount,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true
        }
      }, function(err, result) {
        if(err){
            res.status(500).json(err)
        }else{
            res.json(result ); 
        }
      });

}