import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className='py-20'>
      <div className='max-w-[1200px] mx-auto flex flex-col items-center'>
        <h2 className='text-4xl font-bold'><span className='text-indigo-500'>Exclusive</span> Products</h2>

        <div className='w-full grid grid-cols-3 py-4 px-5 gap-x-5 gap-y-11 my-20'>
          {products?.slice(0, 6).map(({id, title, price, image, rating}) => (
            <SingleProduct key={id} title={title} price={price} image={image} rating={rating.rate} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products