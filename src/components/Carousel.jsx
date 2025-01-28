import { useState } from 'react';
import n1 from './imgs/nexium/n1.jpg';
import n2 from './imgs/nexium/n2.jpg';
import n3 from './imgs/nexium/n3.jpg';

export default function Carousel({ theme, h_theme }) {
    const imgs = [n1, n2, n3];
    const [curr, setCurr] = useState(0);
    const controls = `grid items-center cursor-pointer w-auto h-60 md:h-96 md:p-4 hover:text-white border-4 border-white text-black text-lg font-black transition duration-500 select-none ${h_theme} bg-gradient-to-b from-white to-white`;

    // Auto Slide
    // useEffect(() => {
    //     setInterval(() => setCurr((curr + 1) % imgs.length), 2400)
    // });

    return (
        <div id='carousel' className={`flex justify-between m-auto w-full bg-gray-500 ${h_theme}`}>
            <span className={controls} onClick={() => setCurr((curr - 1 + imgs.length) % imgs.length)}> &lt; </span>
            {/* {
                [n1, n2, n3].map((k, i) => {
                    return <img src={k} alt={`n_pic${i + 1}`} />
                })
            } */}
            <img src={imgs[curr]} alt={`n_pic${curr + 1}`} className='h-60 md:h-96 md:w-auto car' />
            <span className={controls} onClick={() => setCurr((curr + 1) % imgs.length)}> &gt; </span>
        </div>
    )
}