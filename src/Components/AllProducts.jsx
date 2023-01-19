import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider';
import Footer from './Footer';
import SingleProduct from './SingleProduct';

function AllProducts() {
    const [{ products }, dispatch] = useStateValue();
    const [category, setCategory] = useState('');
    const [prods, setProds] = useState(products);

    useEffect(() => {
        let newArr = products.filter(function (product)
        {
          return product.category ===  category;
        })
        setProds(newArr)
    }, [category])

    useEffect(() => {
        setProds(products)
    }, [])

  return (
    <div>
        <div className='max-w-[1200px] mx-auto'>
            <h2 className='text-center text-4xl font-bold mt-14 mb-4'>Products</h2>
            <div className='my-10 px-6 flex flex-wrap gap-x-7 gap-y-5'>
                <span className='py-2 px-4 border-2 rounded-3xl cursor-pointer text-gray-600' onClick={() => setProds(products)}>All</span>
                <span className='py-2 px-4 border-2 rounded-3xl cursor-pointer text-gray-600' onClick={() => setCategory("women's clothing")}>Women's clothing</span>
                <span className='py-2 px-4 border-2 rounded-3xl cursor-pointer text-gray-600' onClick={() => setCategory("men's clothing")}>Men's clothing</span>
                <span className='py-2 px-4 border-2 rounded-3xl cursor-pointer text-gray-600' onClick={() => setCategory('jewelery')} >Jewelery</span>
                <span className='py-2 px-4 border-2 rounded-3xl cursor-pointer text-gray-600' onClick={() => setCategory('electronics')}>Electronics</span>
            </div>
            <div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4 px-5 gap-x-5 gap-y-11 my-20'>
                    {prods?.map(({id, title, price, image, rating}) => (
                        <SingleProduct key={id} id={id} title={title} price={price} image={image} rating={rating.rate} />
                    ))}
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default AllProducts