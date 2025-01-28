import { useState } from "react";

const Contact = ({ theme, h_theme }) => {
    const [msg, validate] = useState("");
    const [msgBoxErr, set] = useState("");

    return (
        <div id='contact' className="bg-white p-6 w-full flex justify-center hover:bg-gray-300 transition duration-300">
            <div className={`border w-screen md:w-2/3 h-full shadow-xl rounded-2xl p-6 m-2 bg-gray-300 bg-gradient-to-r ${h_theme} hover:font-bold`}>
                <h2 className="underline text-2xl font-bold p-4 mb-2 text-center">Contact Us</h2>
                <form onSubmit={() => (msg === "") ? set("* Message box cannot be empty *") : set("")}>
                    <div className="mb-6">
                        <label className="block text-black font-bold text-lg" for="your_name">Your Name:</label>
                        <input type="text" id="username" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-black font-bold text-lg" for="email">Email:</label>
                        <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-black font-bold text-lg" for="message">Message:</label>
                        <textarea
                            autoCorrect="true"
                            autoComplete='true'
                            autoCapitalize='true'
                            onChange={ (e) => {
                                validate(e.target.value);
                                if (e.target.value !== "") {
                                    set("");
                                } else {
                                    set("* Message box cannot be empty *");
                                }
                            } }
                            id="msg"
                            rows="9"
                            resizeable="false"
                            className="mt-1 block w-full p-4 border border-gray-300 rounded"
                        ></textarea>
                        <div className='italic text-red-600 font-bold text-md pt-4'>{ msgBoxErr }</div>
                    </div>
                    <button type="submit" className={`w-full ${theme} text-white border-2 border-gray-200 font-bold p-2 mb-6 hover:from-black hover:to-black`}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;