import { navigate } from 'gatsby-link'
import React from 'react'
import Lolly from '../components/Lolly'

const index = () => {
  return (
    <div
      className='h-screen grid place-items-center'
      style={{ backgroundColor: '#21212B' }}
    >
      <div className='flex flex-col'>
        <div
          style={{ textShadow: '#e0f 0 0 20px' }}
          className='  text-shadow-lg font-custom font-extrabold text-white  text-7xl text-center'
        >
          Virtual Lollipop
        </div>
        <div
          style={{ textShadow: '#e0f 0 0 20px' }}
          className='font-custom font-extrabold text-white text-4xl text-center mt-7'
        >
          because we all know someone who deserves some sugar.
        </div>
      </div>
      <div className='flex'>
        <Lolly lollyTop='#d52358' lollyMiddle='#e95946' lollyBottom='#deaa43' />
        <Lolly lollyTop='#0d1a47' lollyMiddle='#945d56' lollyBottom='#4e493a' />
        <Lolly lollyTop='#55d523' lollyMiddle='#c6e946' lollyBottom='#902799' />
        <Lolly lollyTop='#aed523' lollyMiddle='#35704b' lollyBottom='#6d205a' />
        <Lolly lollyTop='#2623d5' lollyMiddle='#1f4b30' lollyBottom='#98f186' />
      </div>

      <div className=' mb-16'>
        <button
          onClick={() => navigate('/createlolly')}
          type='button'
          className='inline-flex border-2 transition duration-500 ease-in-out border-light-blue-500 border-opacity-100 items-center px-6 py-3 text-base font-medium rounded-full shadow-sm text-white  hover:bg-pink-500 focus:outline-none'
        >
          Create a Lolly to send to a friend
        </button>
      </div>
    </div>
  )
}

export default index
