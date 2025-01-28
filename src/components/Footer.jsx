import { useState } from "react";
import PrivacyPolicy from './docs/PrivacyPolicy';
import TermsOfService from './docs/TermsOfService';

const Footer = ({ theme, h_theme }) => {
    const [ppts, setP] = useState("pp");
    const [show, doShow] = useState(false);

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className={`text-justify p-4 mb-8 border-b-2 ${show ? "" : "hidden"}`}>
                { (ppts === "pp") ? <PrivacyPolicy /> : <TermsOfService /> }
                <button className={`w-full bg-gradient-to-r hover:from-white hover:to-white border-4 border-white text-white hover:text-blue-700 font-bold p-2 rounded transition duration-300`} onClick={() => doShow(false)}>&times; Close</button>
            </div>
            <div className="container mx-auto text-center">
                <p className="mb-4">© {new Date().getFullYear()} Your Company. <i>All rights reserved.</i></p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="#privacypolicy"
                        className="hover:text-gray-400 hover:underline"
                        onClick={() => {
                            setP("pp");
                            doShow(true);
                        }}
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#termsofservice"
                        className="hover:text-gray-400 hover:underline"
                        onClick={() => {
                            setP("ts");
                            doShow(true);
                        }}
                    >
                        Terms of Service
                    </a>
                    <a href="#contact" className="hover:text-gray-400 hover:underline">Contact Us</a>
                </div>
                <div className="mt-4">
                    <a href="https://fb.com/kingrex1212" className="fa fab-facebook hover:text-gray-400">Facebook</a>
                    <a href="https://x.com/king_rex1212" className="fa fab-twitter hover:text-gray-400 mx-4">Twitter</a>
                    <a href="https://instagram.com/kingrex1212" className="fa fab-instagram hover:text-gray-400">Instagram</a>
                </div>
                <div className="mt-4">
                    <a href="#home" className="fa fa-uparrow hover:text-gray-400">Back to top</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;