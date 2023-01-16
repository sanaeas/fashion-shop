import React from 'react'

function CartProduct({ image, title, price }) {
    console.log(image)
  return (
    <div className='flex items-center py-3 border-b'>
        <div className='flex items-center gap-x-2 w-[40%]'>
            <img className='w-14 h-14 object-contain' src={image} alt={title} />
            <div>
                <h4>{title}</h4>
                <p>${price}</p>
            </div>
        </div>

        <div className='flex w-[20%] items-center justify-center'>
            <button>-</button>
            <p>1</p>
            <button>+</button>
        </div>

        <div className='text-center w-[20%]'>${price}</div>
        <div className='text-center w-[20%] font-light text-sm text-red-500 cursor-pointer'>remove</div>
    </div>
  )
}

export default CartProduct