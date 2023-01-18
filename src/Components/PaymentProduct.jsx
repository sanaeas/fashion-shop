import React from 'react'

function PaymentProduct({ image, title, price, quantity}) {
  return (
    <div className='flex items-center py-4 px-3 bg-white rounded-2xl mb-5'>
        <div className='flex items-center gap-x-4'>
            <img className='w-24 h-24 object-contain' src={image} alt={title} />
            <div>
                <h4 className='font-light text-lg mb-2'>{title}</h4>
                <p className='text-sm text-gray-600 mb-2'>Quantity: {quantity}</p>
                <p className='text-sm text-gray-600'>${price} / Total: ${price * quantity}</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentProduct