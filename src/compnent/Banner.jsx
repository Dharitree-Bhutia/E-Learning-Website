import React from 'react'
import { ReactTyped } from "react-typed";

function Banner() {
    return (
        <div className='bg-gray-900 w-full  py-[50px]'>
            <div className='max-w-[1240px] mx-auto text-center py-[100px] '>
                <div className='text-xl md:text-3xl text-white font-bold mb-2'>
                    Learn with us
                </div>
                <h2 className='text-3xl md:text-6xl text-slate-300 font-bold md:p-[24px]'>Grow with us.</h2>
                <div className='text-xl md:text-5xl font-bold md:p-[24px] text-white ' >
                    Learn<ReactTyped className='pl-3 text-white'
                        strings={["Full Stack Development", "UI/UX Designing", "IoT", "Cyber Security"]}
                        
                        typeSpeed={100}
                        loop={true}
                        backSpeed={50}
                    ></ReactTyped>
                </div>
                <button className='p-3 mt-4 rounded-lg md:text-xl text-2xl bg-white text-black'>Get Started</button>
          

            </div>
        </div>
    )
}

export default Banner
