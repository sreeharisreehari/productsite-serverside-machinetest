const schemas = require('../model/schema');

// for adding single products
exports.AddProduct = async (req, res) => {
    const { name, description, price,modelNumber } = req.body;

    try {
        const existingProduct = await schemas.findOne({ modelNumber });

        if (existingProduct) {
            return res.status(406).json('Product already exists. Please add a new product.');
        } else {
            const newProduct = new schemas({
                name,
                description,
                price,
                modelNumber
            });

            await newProduct.save();
            return res.status(200).json(newProduct);
        }
    } catch (err) {
        return res.status(500).json(`Request failed due to ${err}`);
    }
};

// for adding bulk number of products as files
exports.BulkAddProducts = async (req, res) => {
    const products = req.body; 

    try {
        const insertedProducts = [];

        for (let product of products) {
            const { name, description, price,modelNumber } = product;

            const existingProduct = await schemas.findOne({ modelNumber });

            if (!existingProduct) {
                const newProduct = new schemas({
                    name,
                    description,
                    price,
                    modelNumber
                });

                await newProduct.save();
                insertedProducts.push(newProduct);
            }
        }

        return res.status(200).json({
            message: 'Products added successfully',
            products: insertedProducts
        });
    } catch (err) {
        return res.status(500).json(`Bulk request failed due to ${err}`);
    }
};


// ggetting products

exports.GetAllProduct=async(req,res)=>{
   
    try{
        const allproduct=await schemas.find()
        res.status(200).json(allproduct)
    }
    catch(err){
        res.status(401).json(`Request failed due to ${err}`)
    }
} 
