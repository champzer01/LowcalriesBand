const product = require('../models/productadd')

module.exports = (req,res) =>{
    const {price,name,image} = req.body
    product.create({price,name,image})
    .then((res)=>{res.json(res)})
    .catch((error)=>{res.status(400).json({error})})
}
