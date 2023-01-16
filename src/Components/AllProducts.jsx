import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import SingleProduct from './SingleProduct';

function AllProducts() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, [category]);

  return (
    <div>
        <div className='max-w-[1200px] mx-auto'>
            <h2 className='text-center text-4xl font-bold mt-14 mb-4'>Products</h2>
            <div className='my-10 px-6 flex gap-x-7'>
                <span className='py-2 px-4 border-2 rounded-3xl cursor-pointer text-gray-600' onClick={() => setCategory("women's%20clothing")}>Women's clothing</span>
                <span className='py-2 px-4 border-2 rounded-3xl cursor-pointer text-gray-600' onClick={() => setCategory("men's%20clothing")}>Men's clothing</span>
                <span className='py-2 px-4 border-2 rounded-3xl cursor-pointer text-gray-600' onClick={() => setCategory('jewelery')} >Jewelery</span>
                <span className='py-2 px-4 border-2 rounded-3xl cursor-pointer text-gray-600' onClick={() => setCategory('electronics')}>Electronics</span>
            </div>
            <div>
                <div className='w-full grid grid-cols-3 py-4 px-5 gap-x-5 gap-y-11 my-20'>
                    {products?.map(({id, title, price, image, rating}) => (
                        <SingleProduct key={id} title={title} price={price} image={image} rating={rating.rate} />
                    ))}
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default AllProducts