
# Ecom-Products-review

This Ecommerce website


## FrontEnd Features

- Products Listing 
- Can add products to cart
- Can remove product from cart
- Can be remove all products from cart
- Can read and write are reviews from each product
- Can can delete review of product
- Resposive website

## BackEnd Features

- API created by Nodejs
- Data stored in json file 
- CRUD REST api for products data
- Creat, Read, Delete api for Reviews data 
- Product data store inforamtion like- name, id, price, createdAt, updatedAt
- Reviews data store information like- userId, review, id, productId, createdAt




## Tech Stack

**Client:** React, Redux, BootStap, CSS

**Server:** Node, Express, Json


## Installation

Install **ecom-products-review** with npm

```bash
  npm install my-project
  cd my-project
```
    
## Run Locally

Clone the project

```bash
  https://github.com/airKing05/ecom-products-review.git
```

Go to the project directory

```bash
  cd ecom-products-review
```

Install dependencies

```bash
  npm install
```

**Start the frontend/Rectjs**

```bash
  npm start
```

**Start the server**

Go to the services directory

```bash
  cd services
```

Install dependencies

```bash
  npm install
```

```bash
  nodemon index.js 
  or
  node index.js
```
## Screenshots
### Products data Api testing 

- post api - just need to add name and price of product
![App Screenshot](https://github.com/airKing05/ecom-products-review/blob/master/assets/Screenshot%202022-08-26%20at%2010.52.11%20AM.png?raw=true)

- put api - just need to changeable product id into url and id place holder
![App Screenshot](https://github.com/airKing05/ecom-products-review/blob/master/assets/Screenshot%202022-08-26%20at%2010.54.11%20AM.png?raw=true)

- get api - it contained created and updated date with products data
![App Screenshot](https://github.com/airKing05/ecom-products-review/blob/master/assets/Screenshot%202022-08-26%20at%2010.55.31%20AM.png?raw=true)

- delete api - just paas the product id to url
![App Screenshot](https://github.com/airKing05/ecom-products-review/blob/master/assets/Screenshot%202022-08-26%20at%2010.55.53%20AM.png?raw=true)

- get api - see your data is delete
![App Screenshot](https://github.com/airKing05/ecom-products-review/blob/master/assets/Screenshot%202022-08-26%20at%2010.56.14%20AM.png?raw=true)

### Reviews Data Api test

reviews could be differnt for each products so it will be dippendet on the products id
- Add review - you should pass your urserId with reviews
![App Screenshot](https://github.com/airKing05/ecom-products-review/blob/master/assets/Screenshot%202022-08-26%20at%2011.03.17%20AM.png?raw=true)

- List of reviews last reviews would be appear at the top of list
![App Screenshot](https://github.com/airKing05/ecom-products-review/blob/master/assets/Screenshot%202022-08-26%20at%2011.06.42%20AM.png?raw=true)

- Can be delete any rviews
![App Screenshot](https://github.com/airKing05/ecom-products-review/blob/master/assets/Screenshot%202022-08-26%20at%2011.07.11%20AM.png?raw=true)

- get api - you have to pass productId to usr to get reviews data, we are just adding a data so do not need to pas updated date to req.body
![App Screenshot](https://github.com/airKing05/ecom-products-review/blob/master/assets/Screenshot%202022-08-26%20at%2011.08.13%20AM.png?raw=true)
