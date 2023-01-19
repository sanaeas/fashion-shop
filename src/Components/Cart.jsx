import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import CartProduct from './CartProduct';

function Cart() {
    const [{ cart, user }, dispatch] = useStateValue();
    const [total, setTotal] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        let total = cart.reduce(
            (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0
          );
        setTotal(total)
    }, [cart])

  return (
    <div className='bg-gray-100 min-h-screen pt-9 px-3'>
        <div className='max-w-[1200px] mx-auto'>
            <div className='bg-white flex flex-wrap justify-between items-center py-3 px-10 rounded-2xl shadow-md gap-y-3'>
                <h2 className='text-xl w-full text-center sm:w-auto tracking-wider font-light'>Your Shopping Basket</h2>
                <p>{cart.length} Items</p>
                {!!total && 
                <button className='bg-indigo-600 text-white px-4 py-2 rounded-lg' disabled={!user} onClick={e => navigate('/payment')}>Check out (${total})</button>
                }
            </div>
            <p className='mb-9 mt-2 px-3 text-sm font-light text-gray-500 text-right'>To continue with the payment, please make sure you are logged in.</p>

            <div className='bg-white py-3 px-10 rounded-2xl shadow-md'>
                <div className='flex w-full border-b text-gray-700 text-sm py-2'>
                    <span className='w-[40%] text-center'>Item</span>
                    <span className='w-[20%] text-center'>Quantity</span>
                    <span className='w-[20%] text-center'>Price</span>
                </div>
                <div>
                {cart?.map((item, i) => (
                    <CartProduct key={i} id={item.id} image={item.image} quantity={item.quantity} title={item.title} price={item.price} />
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart