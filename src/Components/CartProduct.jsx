import React from 'react'
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

function CartProduct({ image, title, price }) {
    console.log(image)
  return (
    <div className='flex items-center py-3 border-b'>
        <div className='flex items-center gap-x-2 w-[40%]'>
            <img className='w-14 h-14 object-contain' src={image} alt={title} />
            <div>
                <h4 className='text-sm font-bold mb-2'>{title}</h4>
                <p className='text-sm text-gray-500'>${price}</p>
            </div>
        </div>

        <div className='flex gap-x-2 w-[20%] items-center justify-center'>
            <button><MinusIcon className="h-5 text-indigo-500" /></button>
            <p className='text-lg'>1</p>
            <button><PlusIcon className="h-5 text-indigo-500" /></button>
        </div>

        <div className='text-center w-[20%] text-indigo-600'>${price}</div>
        <div className='text-center w-[20%] font-light text-sm text-red-500 cursor-pointer'>remove</div>
    </div>
  )
}

export default CartProduct