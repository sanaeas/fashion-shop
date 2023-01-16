import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider';
import CartProduct from './CartProduct';

function Cart() {
    const [{ cart }, dispatch] = useStateValue();

    const [item, setItem] = useState();

    useEffect(() => {
      fetch("https://fakestoreapi.com/products/1")
        .then((response) => response.json())
        .then((json) => setItem(json));
    }, []);

    console.log(item);
  return (
    <div className='bg-gray-100 min-h-screen pt-9 px-3'>
        <div className='max-w-[1200px] mx-auto'>
            <div className='bg-white flex justify-between items-center py-3 px-10 rounded-2xl shadow-md mb-9'>
                <h2 className='text-xl tracking-wider font-light'>Your Shopping Basket</h2>
                <p>{cart.length} Items</p>
                <button className='bg-indigo-600 text-white px-4 py-2 rounded-lg'>Check out ($760.00)</button>
            </div>

            <div className='bg-white py-3 px-10 rounded-2xl shadow-md'>
                <div className='flex w-full border-b text-gray-700 text-sm py-2'>
                    <span className='w-[40%] text-center'>Item</span>
                    <span className='w-[20%] text-center'>Quantity</span>
                    <span className='w-[20%] text-center'>Price</span>
                </div>
                <div>
                {cart?.map((item, i) => (
                    <CartProduct key={i} id={item.id} image={item.image} title={item.title} price={item.price} />
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart