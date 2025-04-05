import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {app} from '../firebase'

const auth = getAuth(app)

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((value) => alert("sucess"))
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-4 mb-6 font-bold text-3xl">Sign Up</h1>
            <div className="grid gap-6 mb-6 md:grid-cols-2 w-5/6">
                <div>
                    <label 
                        className="block mb-2 text-sm font-medium text-gray-900"
                        htmlFor="">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="email" required placeholder="Enter your email here ..."/>
                </div>
                <div>
                    <label 
                        className="block mb-2 text-sm font-medium text-gray-900 "
                        htmlFor="">Password</label>
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="password" required placeholder="Enter your password here ..."/>
                </div>
                <div>
                    <button
                        onClick={createUser} 
                        type="button" 
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        SignUp
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default SignupPage;