import a from './imgs/features/a.png';
import b from './imgs/features/b.png';
import c from './imgs/features/c.png';
import d from './imgs/features/d.jpg';

const Features = ({ theme, h_theme }) => {
    const featuresList = [
        {
            title: 'Spend Less',
            description: 'Buy now for $15 instead of $26.66.',
        },
        {
            title: 'Healthy Tissue',
            description: 'Removes inflamatory diseases.',
        },
        {
            title: 'Day & Night',
            description: 'Keeps you healthy day/night.',
        },
        {
            title: '24/7 Protection',
            description: 'Get 24hrs protection with 1 pill/day.',
        },
    ];

    return (
        <section id='features' className="py-20 bg-gray-300">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 hover:bg-gray-600 p-2 rounded-xl">
                    {featuresList.map((feature, index) => (
                        <div key={index} className={`bg-white p-6 rounded-xl shadow-lg duration-300 bg-gradient-to-r ${h_theme} hover:font-bold border-b-4 border-white md:hover:translate-y-1/4 transform-gpu`}>
                            <div className='flex justify-center p-4 mb-2'>
                                <img alt={`img_${['a', 'b', 'c', 'd'][index]}`} src={[a,b,c,d][index]} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="hover:text-white hover:font-bold">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;