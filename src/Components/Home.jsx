import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";

function Home() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-gray-100">
                    <div className="max-w-[1200px] mx-auto flex items-center px-7 py-3 gap-x-4">
                        <div className="sm:flex-grow">
                            <h2 className="max-w-md text-lg sm:text-2xl">
                                Trusted by over 300,000+ Clients worldwide since
                                2015
                            </h2>
                        </div>

                        <div className="flex flex-col items-center p-2">
                            <h3 className="text-2xl sm:text-3xl font-bold">4.6</h3>
                            <p className="flex py-1">
                                <StarIcon className="w-4 sm:w-5 text-yellow-400" />
                                <StarIcon className="w-4 sm:w-5 text-yellow-400" />
                                <StarIcon className="w-4 sm:w-5 text-yellow-400" />
                                <StarIcon className="w-4 sm:w-5 text-yellow-400" />
                                <StarIcon className="w-4 sm:w-5 text-yellow-400" />
                            </p>
                            <p className="text-gray-500 text-sm sm:text-base text-center">4,200 Ratings</p>
                        </div>

                        <div className="flex flex-col p-2">
                            <h3 className=" text-2xl sm:text-3xl text-center font font-semibold tracking-wider">
                                4M+
                            </h3>
                            <p className="py-1 text-gray-500 text-center md:text-left">Worldwide Product</p>
                            <p className="text-gray-500 text-center md:text-left">sale per year</p>
                        </div>
                    </div>
                </section>

                <Products />
            </main>

            <Footer />
        </>
    );
}

export default Home;
