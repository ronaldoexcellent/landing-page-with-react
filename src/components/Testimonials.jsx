import d1 from './imgs/doctors/d1.jpg';
import d2 from './imgs/doctors/d2.jpg';
import d3 from './imgs/doctors/d3.webp';

const testimonials = [
  {
    name: "John Doe",
    avatar: d1,
    feedback: "This product has changed my life for the better!",
    position: "CEO, Company A"
  },
  {
    name: "Jane Smith",
    avatar: d2,
    feedback: "An amazing experience! Highly recommend to everyone.",
    position: "CTO, Company B"
  },
  {
    name: "Michael Johnson",
    avatar: d3,
    feedback: "Fantastic service and support. Will use again!",
    position: "Manager, Company C"
  }
];

const Testimonials = ({ theme, h_theme }) => {
  return (
    <section id='testimonials' className={`py-12 bg-gray-200 bg-gradient-to-r ${h_theme}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <h4 className="text-xl font-bold mb-6 underline italic">What Our Customers Say</h4>
        <div className="flex flex-wrap justify-center hover:text-black">
          {testimonials.map((testimonial, index) => (
            <figure key={index} className="max-w-xs mx-4 mb-8 bg-white rounded-3xl shadow-xl duration-300 md:hover:border-gray-700 md:border-4 hover:scale-110 transform-gpu hover:text-black grid justify-center">
              <figcaption className={`rounded-t-3xl bg-gradient-to-r ${theme} w-full h-60 flex justify-center p-4`}>
                <img className='rounded-full' src={testimonial.avatar} alt={`avatar_${index}`} />
              </figcaption>
              <p className="italic mt-4 px-4 pb-4 text-gray-700">"{testimonial.feedback}"</p>
              <h3 className="mt-4 font-bold text-xl">{testimonial.name}</h3>
              <p className="text-gray-800 font-semibold pb-4 mb-2">{testimonial.position}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;