import React from "react";

function Login() {
    return (
        <div className="mt-11">
            <div className="bg-gradient-to-br from-violet-200 to-gray-100 w-2/3 mx-auto flex flex-col py-20 px-11 rounded-3xl max-w-lg">
                <h2 className="font-bold text-2xl mb-2">Hey, hello 👋</h2>
                <p className="text-gray-600 text-sm mb-5">Enter the information you entered while registering.</p>
                <form className="flex flex-col">
                    <label for="email" className="mb-1">Email</label>
                    <input type="email" name="email" id="email" className="outline-none bg-transparent border border-indigo-500 rounded-md p-1 focus:shadow-md mb-4" />
                    <label for="password" className="mb-1">Password</label>
                    <input type="password" name="password" id="password" className="outline-none bg-transparent border border-indigo-500 rounded-md p-1 focus:shadow-md mb-4" />
                    <p className="text-right text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 cursor-pointer">Forgot Password?</p>
                    <button type="submit" className="bg-gradient-to-r from-purple-400 to-indigo-600 text-white my-3 py-2 rounded-lg">Sign In</button>
                </form>
                <div className="flex items-center justify-center">
                    <div className="border-b border-gray-400 w-full h-1"></div>
                    <p className="mx-3 text-gray-600">or</p>
                    <div className="border-b border-gray-400 w-full h-1"></div>
                </div>
                <button className="bg-gradient-to-r from-purple-400 to-indigo-600 text-white my-3 py-2 rounded-lg">Register</button>
                <button className="bg-gradient-to-r from-purple-400 to-indigo-600 text-white my-3 py-2 rounded-lg">Demo</button>
            </div>
        </div>
    );
}

export default Login;
