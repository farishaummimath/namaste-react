import React from 'react'

const Head = () => {
    return (
        <>
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
          <div className='flex col-span-1'>
          <img className ="h-8" src="" alt='menu' />
           <img className ="h-8" src="" alt='youtube-logo' />
             </div>
                <div className='flex col-span-10'>
                    <input type='search' placeholder='type' />  
                </div>    
        </div>
      </>
      
      
  )
}

export default Head