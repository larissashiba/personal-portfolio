import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineFundProjectionScreen, AiOutlinePhone } from "react-icons/ai";
import { BiHomeHeart } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";


export function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
    { name: "Home", path: "/", icon: <BiHomeHeart /> },
    { name: "About", path: "/about", icon: <FaRegCircleUser /> },
    { name: "My Projects", path: "/my-projects", icon: <AiOutlineFundProjectionScreen /> },
    { name: "Contact", path: "/contact", icon: <AiOutlinePhone /> },
    ];

    return (
    <nav className="w-full flex justify-between items-center px-6 py-4 ml-15">
        <div className="text-xl font-mono ml-4">
        <a className="text-white">Larissa<span className="text-purple-400"> Developer </span></a>
        </div>

        <ul className="flex gap-10 mr-40">
        {links.map((link) => (
            <li key={link.name} className="relative group">
            <NavLink
                to={link.path}
                className={({ isActive }) =>
                `flex items-center gap-2 text-white dark:text-white transition-colors duration-300   ${
                    isActive ? "text-black dark:text-black" : ""
                }`
                }
            >
                {link.icon}
                {link.name}
            </NavLink>

            <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
            </li>
        ))}
        </ul>
    </nav>
    );
}