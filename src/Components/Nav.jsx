import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/fash.png";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { useStateValue } from "../StateProvider";
import { signOut } from 'firebase/auth';
import { auth } from "../firebase";

function Nav() {
    const [{ user }, dispatch] = useStateValue();

    function signoutBtn() {
        signOut(auth)
            .then(() => {
                console.log('user signed out')
            })
            .catch(err => {
                alert(err.message)
            })
    }

    return (
        <nav className="py-2 px-3 shadow-md md:px-5">
            <div className="flex justify-between items-center w-full mx-auto max-w-[1200px]">
                <Link to="/">
                    <img src={Logo} alt="Fashion Logo" className="h-16 hidden sm:inline-block" />
                </Link>
                <ul className="flex gap-x-3 sm:gap-x-10">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/" className="hidden md:inline-block cursor-not-allowed">Contact Us</Link>
                    </li>
                </ul>

                <div className="flex items-center gap-x-3">
                    <Link to='/cart' className="flex items-center border border-black rounded-full px-3 py-1"><ShoppingCartIcon className="h-7" /><span className="hidden sm:inline-block ml-2">Cart</span></Link>
                    {user ? (
                        <div className="px-3">
                            <p className="font-bold">Hello,</p>
                            <p className="text-sm">{user.email}</p>
                            <p className="cursor-pointer text-sm text-gray-700" onClick={signoutBtn}>Sign Out</p>
                        </div>
                    ) : (
                        <Link to='/login'><UserIcon className="h-7" /></Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Nav;
