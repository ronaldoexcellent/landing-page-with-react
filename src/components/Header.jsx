import { useState } from "react";
import './Header.css';

const E = () => {
    return (<span className="nbars"> &equiv; </span>)
};

const X = () => {
    return (<span className="nbars"> &times; </span>)
};

const Header = ({ theme, h_theme }) => {
    const [slide, down] = useState(false);
    const s = `hover:bg-white hover:text-purple-800 p-4 font-bold rounded-2xl transition duration-300 cursor-pointer select-none`;
    const sm = `${s} w-full select-none`;
    const sl = () => down(false);
    const [sh, setsh] = useState("");

    window.onscroll = () => (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? setsh("shadow-2xl") : setsh("");

    return (
        <header id="header" className={`fixed top w-full z-10 ${theme} text-white md:p-2 ${sh}`}>
            <div className={`container mx-auto relative z-10 ${theme} flex justify-between items-center`}>
                <h1 className="text-3xl flex gap-3 font-bold p-4 md:p-2 cursor-pointer" onClick={() => window.location.hash = 'home'}>
                    <span className="animate-spin">&#8258;</span>
                    <span className="animate-bounce">Nexium</span>
                </h1>
                <nav className="hidden md:flex semibold">
                    <a className={s} href="#home">Home</a>
                    <a className={s} href="#carousel">Pictures</a>
                    <a className={s} href="#features">Features</a>
                    <a className={s} href="#pricing">Pricing</a>
                    <a className={s} href="#testimonials">Testimonials</a>
                    <a className={s} href="#contact">Contact</a>
                </nav>
                <h2 className={`p-4 grid items-center font-bold cursor-pointer text-2xl md:hidden select-none`} onClick={() => down(!slide)}> { slide ? <X /> : <E /> } </h2>
            </div>

            <nav className={`nvm grid w-full ${slide ? "" : "hidden"} md:hidden semibold text-center text-base ${theme}`} onClick={sl}>
                <a className={sm} href="#home">Home</a>
                <a className={sm} href="#carousel">Pictures</a>
                <a className={sm} href="#features">Features</a>
                <a className={sm} href="#pricing">Pricing</a>
                <a className={sm} href="#testimonials">Testimonials</a>
                <a className={sm} href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;