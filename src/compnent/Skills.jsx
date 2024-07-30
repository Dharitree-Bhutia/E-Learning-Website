import React from 'react'

function Skills() {
  return (
    <section className='bg-gray-900 py-4'>
      <div className='max-w-[1240px] md:flex mx-auto py-[50px] justify-between'>
        <div className='m-2'>
          <h1 className='font-bold text-[20px] md:text-[40px] text-white'>Want to learn latest I.T skills?</h1>
          <span className='text-white'>
            Sign up to our newsletter and up to date
          </span>
        </div>
        <div className='m-2'>
          <input type="text" className='p-3 mb-2 mr-2 text-slate-600 rounded' placeholder='Email' />
          <button className='p-3  rounded bg-black text-white' >Get Started</button>
         <br />
         <p className='text-white p-1 mt-1'>
          We care about the protection of your data.Read our<br/> privacy policy
         </p>

        </div>

      </div>

    </section>
  )
}

export default Skills
