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
                        <div className="flex-grow">
                            <h2 className="max-w-md text-2xl">
                                Trusted by over 300,000+ Clients worldwide since
                                2015
                            </h2>
                        </div>

                        <div className="flex flex-col items-center p-2">
                            <h3 className="text-3xl font-bold">4.6</h3>
                            <p className="flex py-1">
                                <StarIcon className="w-5 text-yellow-400" />
                                <StarIcon className="w-5 text-yellow-400" />
                                <StarIcon className="w-5 text-yellow-400" />
                                <StarIcon className="w-5 text-yellow-400" />
                                <StarIcon className="w-5 text-yellow-400" />
                            </p>
                            <p className="text-gray-500">4,200 Ratings</p>
                        </div>

                        <div className="flex flex-col items-center p-2">
                            <h3 className="text-3xl font font-semibold tracking-wider">
                                4M+
                            </h3>
                            <p className="py-1 text-gray-500">Worldwide Product</p>
                            <p className="text-gray-500">sale per year</p>
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
