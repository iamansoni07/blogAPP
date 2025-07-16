import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to the Blog Platform</h1>
            
            <div className="space-y-4">
                <div className="flex gap-4">
                    <Link 
                        to="/signin" 
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign In
                    </Link>
                    <Link 
                        to="/signup" 
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                        Sign Up
                    </Link>
                </div>
                
                <div className="text-center mt-8">
                    <p className="text-gray-600">
                        Start sharing your thoughts with the world
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Create an account to get started
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;