import React from 'react'
import study from '../assets/E-learning-animation-video.jpg';

function Export() {
    return (
        <div className='max-w-[1240px] mx-auto my-10 md:grid grid-cols-3 '>

            <div className='col-span-1 md:w-[80%] text-center '>
                <img src={study} className='inline' />
            </div>
            <div className='col-span-2 flex flex-col mx-4'>
                <h4 className='font-bold text-2xl pt-4 md:pt-3'>
                    LEARN FORM EXPORTS
                </h4>

                <p className='font-mono my-2 text-justify '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie in magna tempor fringilla. Praesent ac consectetur lacus, at elementum enim. Vivamus bibendum ipsum et purus malesuada, vel mollis augue pulvinar. Nullam varius euismod massa a rhoncus. Mauris eros diam, facilisis quis felis vitae, porttitor mattis est. Duis congue ante in urna dictum sodales. Sed sed mollis urna, ac maximus leo.
                </p>
                <button className="w-[30%] bg-black text-white p-3 rounded">Start</button>

            </div >

        </div>
    )
}

export default Export
