import React, { useState } from 'react'
import { useStateValue } from '../StateProvider';

function CartProduct({ id, image, quantity, title, price }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    const updateQuantity = (value) => {
        dispatch({
            type: 'UPDATE_QUANTITY',
            id: id,
            quantity: +value,
        })
    }

    return (
    <div className='flex items-center py-3 border-b'>
        <div className='flex items-center gap-x-2 w-[40%]'>
            <img className='w-14 h-14 object-contain' src={image} alt={title} />
            <div>
                <h4 className='text-sm font-bold mb-2'>{title}</h4>
                <p className='text-sm text-gray-500'>${price}</p>
            </div>
        </div>

        <div className='w-[20%] flex items-center justify-center'>
            <input
                min={1}
                value={quantity}
                onChange={(e) => updateQuantity(e.target.value)}
                type="number"
                className="w-12 pl-3 text-lg outline-none"
            />
        </div>

        <div className='text-center w-[20%] text-indigo-600'>${(price * quantity).toFixed(2)}</div>
        <div className='text-center w-[20%] font-light text-sm text-red-500 cursor-pointer' onClick={removeFromCart}>remove</div>
    </div>
  )
}

export default CartProduct