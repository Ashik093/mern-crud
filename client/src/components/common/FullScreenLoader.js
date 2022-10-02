import React from 'react'
import loader from '../../../src/assets/img/loader.svg'

export default function FullScreenLoader() {
  return (
    <div className='ProcessionScreen'>
        <div className='center-screen'>
            <img className='loader-size' src={loader} />
        </div>
    </div>
  )
}
