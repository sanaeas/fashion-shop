import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/fash.png";

function Footer() {
  return (
    <footer className='bg-gray-200 py-24 flex flex-col items-center'>
        <div className='w-full ml-20 max-w-[1200px] mx-auto grid grid-cols-4 px-7'>
            <div>
                <h4 className='font-bold mb-3'>Quick links</h4>
                <p className='text-sm mb-2 text-gray-600'>Category</p>
                <p className='text-sm mb-2 text-gray-600'>Promo</p>
                <p className='text-sm mb-2 text-gray-600'>Men Product</p>
                <p className='text-sm mb-2 text-gray-600'>Women Product</p>
            </div>
            
            <div>
                <h4 className='font-bold mb-3'>Services</h4>
                <p className='text-sm mb-2 text-gray-600'>Men Product</p>
                <p className='text-sm mb-2 text-gray-600'>Women Product</p>
                <p className='text-sm mb-2 text-gray-600'>Accessories</p>
                <p className='text-sm mb-2 text-gray-600'>Promo</p>
            </div>

            <div>
                <h4 className='font-bold mb-3'>Social Media</h4>
                <p className='text-sm mb-2 text-gray-600'>Facebook</p>
                <p className='text-sm mb-2 text-gray-600'>Instagram</p>
                <p className='text-sm mb-2 text-gray-600'>Twitter</p>
                <p className='text-sm mb-2 text-gray-600'>Youtube</p>
            </div>

            <div>
                <h4 className='font-bold mb-3'>About</h4>
                <p className='text-sm mb-2 text-gray-600'>Company</p>
                <p className='text-sm mb-2 text-gray-600'>Careers</p>
                <p className='text-sm mb-2 text-gray-600'>Legal</p>
                <p className='text-sm mb-2 text-gray-600'>Help</p>
            </div>
        </div>
        <div>
            <Link to='/'>
                <img src={Logo} alt="Footer Logo" className='h-20 my-7' />
            </Link>
        </div>
        <div className='mt-3 text-gray-600 tracking-wider text-sm'>&copy; Copyright 2023 - Fashion Shop</div>
    </footer>
  )
}

export default Footer