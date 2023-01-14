import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from "../firebase";
import { createUser, updateProfile, getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) => {
      e.preventDefault()

      createUserWithEmailAndPassword(auth, email, password)
      .then(async (auth) => {
        console.log(auth);

        if (auth) {
          navigate('/');
        }
      } )
      .catch(error => alert(error.message))
    };

    

  return (
            <div className="my-11 bg-gradient-to-br from-violet-200 to-gray-100 w-2/3 mx-auto flex flex-col pt-16 pb-10 px-11 rounded-3xl max-w-lg">
                <h2 className='font-bold text-2xl mb-9'>Sign Up</h2>
                <form className="flex flex-col">
                    <label htmlFor="email" className="mb-2">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='example@email.com' className="outline-none bg-transparent border border-indigo-500 rounded-md py-2 px-3 focus:shadow-md mb-4" />
                    <label htmlFor="password" className="mb-2">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='**********' className="outline-none bg-transparent border border-indigo-500 rounded-md py-2 px-3 focus:shadow-md mb-4" />
                    <p className='text-sm text-gray-500 font-light mb-4'>By signing up, you're agree to our <span className='cursor-pointer text-blue-600'>Terms & Conditions</span> and <span className='cursor-pointer text-blue-600'>Privacy Policy</span></p>
                    <button type="submit" className="bg-gradient-to-r from-purple-400 to-indigo-600 text-white my-3 py-2 rounded-lg" onClick={register} >Sign Up</button>
                </form>
                <p className='text-center text-sm mt-3 text-gray-500'>Joined us before? <Link to='/login' className='ml-2 text-blue-600'>Login</Link></p>
            </div>
  )
}

export default Signup