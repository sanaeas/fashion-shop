import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../images/hero.png";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row items-center justify-between py-24 max-w-[1200px] mx-auto p-6">
            <div>
                <p className="text-gray-500">Absolutely hot collections 🔥</p>
                <h1 className="text-3xl md:text-5xl font-bold max-w-lg leading-tight my-5">
                    The Best Place To <br /> Find And Buy <br /> Amazing{" "}
                    <span className="text-indigo-500">Products</span>
                </h1>
                <p className="max-w-md text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae ratione veniam placeat aperiam atque. Suscipit!
                </p>
                <button className="mt-5 px-4 py-3 bg-indigo-500 text-white rounded-lg tracking-wider">
                    <Link to='/products'>
                        Shop Now!
                    </Link>
                </button>
            </div>

            <div>
                <img src={HeroImg} alt="Hero Image" />
            </div>
        </header>
    );
}

export default Header;
