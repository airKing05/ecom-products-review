const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const app = express();

app.use(express.json());



const getProducts = async function (req, res) {
    let productsData = await fs.readFileSync("db1.json");
    productsData = JSON.parse(productsData)
    console.log("productsData", productsData.products)
    res.send(productsData.products)

};


const postProducts = async function (req, res) {
    let productsData = await fs.readFileSync('db1.json');
    productsData = JSON.parse(productsData);
   // console.log("productsData", productsData.products)
    let newId = uuidv4();
    let date = new Date();
    // console.log("date", date)

    const productToAdd = { ...req.body, id: newId, createdAt: date };

    if (productToAdd.name !== undefined & productToAdd.price !== undefined) {
        productsData.products.push({
            ...productToAdd
        });
        await fs.writeFile('db1.json', JSON.stringify(productsData), err => {
            if (err) throw err;
        });
        res.send("ok done");
    } else {
        console.log('all fields required')
    }
};

const putProducts = async function (req, res) {
    const {name,price} = req.body;
    const {productId} = req.params;

    if (typeof name === 'undefined' && typeof price === 'undefined') {
        const data = {
            meta: {
                code: 400,
                success: false,
                message: "bad request , name and price are must"
            },
            data: null,
        };
        return res.send(data);
    }

    let productsData = await fs.readFileSync('db1.json');
    productsData = JSON.parse(productsData);
    
    //find product by Id
    let isProductIdAlreadyPresent = false;
    for (let i = 0; i < productsData.products.length; i++) {
        let product = productsData.products[i];
        if (product.id === productId) {
            isProductIdAlreadyPresent = true;
            let editedObj = {
                ...product,
                ...req.body,
                updatedAt: new Date(),
            };
            productsData.products[i] = editedObj;
            break;
        }
    }


    if (!isProductIdAlreadyPresent) {
        productsData.products.push({
            ...req.body, 
            updatedAt: new Date(),
        });
    }


    await fs.writeFile('db1.json', JSON.stringify(productsData), err => {
        if (err) throw err;
    });
    res.send("ok done");
   
};


const deleteProducts = async function (req, res) {
    const {productId} = req.params;
  
    let data = await fs.readFileSync("db1.json");
    data = JSON.parse(data);
    const productsData = data.products;
  
    const filteredProductsData = productsData.filter((item) => item.id !== productId);
    console.log("filteredProductsData", filteredProductsData)
    await fs.writeFile('db1.json', JSON.stringify({
        ...data,
        products: [
            ...filteredProductsData,
        ],
    }), err => {
        if (err) throw err;
    });

    res.send("done")
};



module.exports = { getProducts, postProducts, putProducts, deleteProducts};
