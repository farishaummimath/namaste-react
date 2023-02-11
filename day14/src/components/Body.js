import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
const Body = () => {
    return (
        <>
            <div className='flex rounded'>
             <div>Body</div>
                <Sidebar />
                <MainContainer/>
            </div>
          
</>     

  )
}

export default Body