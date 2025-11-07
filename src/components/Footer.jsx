import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

export function Footer() {  
    return (
    <footer className="flex flex-row items-center justify-between w-full px-6 py-3 bg-purple-400">
        <p className="text-xs text-white">
        &copy; {new Date().getFullYear()} Developed by Larissa Shiba
        </p>
        
        <div className="flex items-center gap-3">
            <a
            href="https://github.com/larissashiba"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-400 text-base"
            >
            <FaGithub />
            </a>

            <a
            href="https://www.linkedin.com/in/larissa-shiba-felix-38a526365/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-400 text-base"
            >
            <FaLinkedin />
            </a>

            <a
            href="https://www.youtube.com/@larissashiba"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-400 text-base"
            >
            <FaYoutube />
            </a>

            <a
            href="https://www.instagram.com/larixba/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-400 text-base"
            >
            <TiSocialInstagram />
        </a>
        </div>
    </footer>
    );
}
