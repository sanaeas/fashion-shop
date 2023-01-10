import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/fash.png";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

function Nav() {
    return (
        <nav className="py-2 px-3 shadow-md md:px-5">
            <div className="flex justify-between items-center w-full mx-auto max-w-[1200px]">
                <Link to="/">
                    <img src={Logo} alt="Fashion Logo" className="h-16" />
                </Link>
                <ul className="flex gap-x-10">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                    <li>
                        <Link to="/">Story</Link>
                    </li>
                    <li>
                        <Link to="/">Contact Us</Link>
                    </li>
                </ul>

                <div className="flex items-center gap-x-3">
                    <Link to='/' className="flex border border-black rounded-full px-3 py-1"><ShoppingCartIcon className="h-7 mr-2" />Cart</Link>
                    <Link to='/'><UserIcon className="h-7" /></Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
