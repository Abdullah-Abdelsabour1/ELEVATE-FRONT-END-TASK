import React, { useState, useEffect } from 'react';
import Product from './Product';

function ProductList() {
    let [product, setProduct] = useState([]);
    let [category, setCategory] = useState([]);
    let [error, setError] = useState("");

    let getProduct = () => { 
        fetch('https://fakestoreapi.com/products')
            .then((result) => {
                if (!result.ok) {
                    throw new Error('Failed to fetch products');
                }
                return result.json();
            })
            .then((data) => setProduct(data))
            .catch((err) => setError(err.message));
    };

    let getProductCat = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((result) => {
                if (!result.ok) {
                    throw new Error('Failed to fetch categories');
                }
                return result.json();
            })
            .then((data) => setCategory(["All", ...data]))
            .catch((err) => setError(err.message));
    };

    let getSpecificCat = (cat) => {
        if (cat === "All") {
            getProduct();
            return;
        }
        fetch(`https://fakestoreapi.com/products/category/${cat}`)
            .then((result) => {
                if (!result.ok) {
                    throw new Error('Failed to fetch category');
                }
                return result.json();
            })
            .then((data) => setProduct(data))
            .catch((err) => setError(err.message));
    };

    useEffect(() => {
        getProduct();
        getProductCat();
    }, []);

    let ProductData = product.map((product) => (
        <Product key={product.id} product={product} isShown={true} />
    ));

    let AllCategory = category.map((cat) => (
        <button
            onClick={() => getSpecificCat(cat)}
            key={cat}
            className="bg-danger text-white fs-5 m-2 border-0 rounded-2 p-2"
        >
            {cat}
        </button>
    ));

    return (
        <div className="product-list py-5">
            <div className="container">
                <h2 className="header text-center mb-5">Products</h2>

                {error && AllCategory.length === 0 ? 
                 <div className="text-danger my-3 bg-danger text-white p-1 rounded-1">{error} </div> 
                   : AllCategory.length === 0 ?  <h2>Loading categories...</h2> : AllCategory
                 }
                <div className="row">
        
                    {error && ProductData.length === 0 ? 
                      <div className="text-danger my-3 bg-danger text-white p-1 rounded-1">{error} </div> 
                     : ProductData.length === 0 ?  <h2>Loading categories...</h2> : ProductData
                 }
                </div>
            </div>
        </div>
    );
}

export default ProductList;
