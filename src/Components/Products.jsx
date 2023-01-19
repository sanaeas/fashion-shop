import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import SingleProduct from './SingleProduct';

function Products() {
  const [{ products }, dispatch] = useStateValue();

  return (
    <section className='py-20'>
      <div className='max-w-[1200px] mx-auto flex flex-col items-center'>
        <h2 className='text-4xl font-bold'><span className='text-indigo-500'>Exclusive</span> Products</h2>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-4 px-5 gap-x-5 gap-y-11 my-20'>
          {products?.slice(0, 6).map(({id, title, price, image, rating}) => (
            <SingleProduct key={id} id={id} title={title} price={price} image={image} rating={rating.rate} />
          ))}
        </div>

        <button className='bg-indigo-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-500 active:scale-95'><Link to='/products'>Explore More</Link></button>
      </div>
    </section>
  )
}

export default Products