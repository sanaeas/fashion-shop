import React from 'react'
import { StarIcon } from "@heroicons/react/24/solid";
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';

function SingleProduct({ id, title, price, image, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        quantity: 1,
      },
    })
  }

  function existOnCart() {
    return cart.find(product => product.id === id)
  }

  return (
    <div className='flex flex-col items-center justify-between rounded-2xl hover:shadow-lg p-4'>
        <img src={image} alt={title} className="w-52 h-52 object-contain" />
        <div className='w-full flex items-center p-4 justify-between'>
            <div>
              <h3 className='max-w-[200px] font-bold py-2'>{title}</h3>
              <p className='flex gap-x-1'><StarIcon className='h-5 text-yellow-400' /> {rating}</p>
            </div>
            <div className='py-1 px-2 rounded-md text-white bg-gradient-to-r from-violet-400 to-fuchsia-400'>${price}</div>
        </div>
        {
            existOnCart() ? (
                <Link to={`/cart`}>
                    <button className='border-2 border-indigo-400 text-indigo-500 px-3 py-2 rounded-lg hover:bg-indigo-400 hover:text-white'>Checkout</button>
                </Link>
            ) : (
              <button className='border-2 border-indigo-400 text-indigo-500 px-3 py-2 rounded-lg hover:bg-indigo-400 hover:text-white' onClick={addToCart}>Add To Cart</button>
            )
        }
    </div>
  )
}

export default SingleProduct