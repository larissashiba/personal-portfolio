import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {

    return (
    <section
        className="min-h-screen flex items-center justify-center relative"
    >
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-right">
                Hi, I'm Larissa Shiba
            </h1>
            
            <p className="text-white text-md mb-15 max-w-lg mx-auto">
                I'm a back-end developer passionate about building robust and scalable solutions. 
                My goal is to ensure systems and services operate efficiently and securely, optimizing performance and data integrity. 
                I believe that a strong architecture and clean code are key to ensuring the sustainability
                and continuous evolution of large-scale projects.
            </p>
            <div className="flex justify-center space-x-3">
                <Link
                    to="/my-projects"
                    className="bg-purple-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(138, 85, 246, 0.4)]"
                    >
                        View Projects
                </Link>

                <Link
                    to="/contact"
                    className="border border-blue-700/50 text-blue-600 py-3 px-6 rounded font-medium transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(138, 85, 246, 0.2) hover:bg-purple-500/50]"
                    >
                        Contact Me!
                </Link>
            </div>
        </div>

    </section>
    );
}