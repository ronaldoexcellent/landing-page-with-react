const Pricing = ({ theme, h_theme }) => {
    const plans = [
        {
            title: 'Basic',
            price: '$10/month',
            features: [
                'Free membership form',
                '3 free bottles',
                'Free checkup (2 weeks)'
            ],
        },
        {
            title: 'Pro',
            price: '$20/month',
            features: [
                'Free membership form',
                '5 free bottles',
                'Free checkup (1 month)',
                'Free medical appointment (2 days)'
            ],
        },
        {
            title: 'Enterprise',
            price: '$30/month',
            features: [
                'Free membership form',
                '7 free bottles',
                'Free checkup (2 month)',
                'Free medical appointment (3 days)',
                '1 month free participation in Health Empowerment Program(HEP)'
            ],
        },
    ];

    return (
        <section id='pricing' className="text-center p-4 bg-gray-100">
            {/* <div className=""> */}
                <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
                <div className="flex flex-wrap justify-center gap-4 p-2">
                    {plans.map((plan, index) => (
                        <div key={index} className={`bg-white shadow-lg rounded-2xl p-6 w-11/12 md:w-96 bg-gradient-to-r ${h_theme} duration-500`}>
                            <h3 className={`text-xl font-semibold mb-4 ${theme} text-white p-2`}>{plan.title}</h3>
                            <p className="text-2xl font-bold mb-4">{plan.price}</p>
                            <ul className="my-4 text-left ml-6 text-justify list-disc">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="text-yellow-500 font-semibold hover:text-white">{feature}</li>
                                ))}
                            </ul>
                            <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded">Choose Plan</button>
                        </div>
                    ))}
                {/* </div> */}
            </div>
        </section>
    );
};

export default Pricing;