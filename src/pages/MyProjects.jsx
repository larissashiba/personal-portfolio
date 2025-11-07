import React, { useState, useEffect } from "react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

export function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
            <MyProjects />
            </main>
        </div>
    );
}


export function MyProjects() {
    const [projects, setProjects] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/larissashiba/repos")
        .then((response) => {
            if (!response.ok) {
            throw new Error("Failed to fetch projects");
        }
        return response.json();
        })
        .then((data) => {
            setProjects(data);
            setFilteredProjects(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching GitHub projects:", error);
            setLoading(false);
        });
    }, []);

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearch(value);
        const filtered = projects.filter((project) =>
        project.name.toLowerCase().includes(value)
    );
    setFilteredProjects(filtered);
    };

    return (
        <div className="container mx-auto px-6 py-10 min-h-screen bg-gradient-to-b from-blue-300 to-purple-400">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-white">
            My Projects
            </h1>

        <div className="flex justify-center mb-10 pt-12 pb-7">
            <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={handleSearch}
            className="w-full sm:w-2/3 lg:w-1/2 p-3 rounded-xl border border-blue-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition"
        />
        </div>

        {loading ? (
            <p className="text-center text-gray-600 animate-pulse">
            Loading projects...
            </p>
        ) : filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
                <div
                key={project.id}
                className="p-15 bg-blue-100 rounded-4xl border border-transparent shadow-md hover:shadow-xl cursor-pointer transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >

                    <div className="mb-4">
                        <h3 className="text-xl font-family text-purple-400 truncate pb-10">
                        {project.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                            {project.description || "No description available."}
                        </p>
                    </div>


                <div className="flex flex-wrap justify-between items-center mt-auto gap-2">
                    {project.language && (
                        <span className="bg-purple-200 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        {project.language}
                        </span>
                    )}
                    
                </div>
                <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-800 font-medium"
                >
                <FaGithub size={18} /> View on GitHub
                </a>
                </div>
            ))}
        </div>
        ) : (
        <p className="text-center text-gray-700">No projects found.</p>
        )}
    </div>
    );
}
