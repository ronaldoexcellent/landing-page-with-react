const Hero = ({ theme, h_theme }) => {
    return (
        <div id="home" className={`md:mt-14 flex items-center justify-center h-screen ${theme} text-white`}>
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Product</h1>
                <p className="text-lg mb-8 p-4">Discover the amazing features and benefits that will change your life.</p>
                <a href="#features" className={`bg-gradient-to-r from-white to-white ${h_theme} border-4 border-white text-blue-500 font-semibold p-4 rounded shadow-lg transition duration-300`}>
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default Hero;