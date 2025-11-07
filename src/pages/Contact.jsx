import React, { useState } from "react";

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e) {
        e.preventDefault();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields");
            return;
        }

        alert("Sent successfully!");
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-300 to-purple-400 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full bg-blue-100 px-8 py-4 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-black mb-6">Contact me!</h1>
                <form className="space-y-6" onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="mt-1 block w-full px-1 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="mt-1 block w-full px-1 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="4"
                            className="mt-1 block w-full px-1 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your message..."
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-1 px-2 bg-purple-400 text-white font-semibold rounded-md shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}



