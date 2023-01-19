import React from 'react'
import PaymentProduct from './PaymentProduct';
import moment from 'moment';

function Order({ order }) {
    console.log(order)
  return (
    <div className='mb-6 bg-gray-300 max-w-[1000px] mx-auto py-3 px-5 rounded-xl shadow-lg'>
        <div className='flex flex-col items-center justify-center my-4'>
            <h2 className='text-xl mr-4 font-bold text-gray-700 tracking-wide'>Order</h2>
            <p className='text-sm mt-1 font-light'>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        </div>
        {
            order.data.cart?.map(item => (
                <PaymentProduct image={item.image} quantity={item.quantity} title={item.title} price={item.price} />
            ))
        }
    </div>
  )
}

export default Order