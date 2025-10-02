import React from 'react'

const Navbar = ({title}) => {
 
  return (
    <div className='w-full h-16 bg-mirror backdrop-blur-xl flex items-center  top-0   fixed      border-r-0 border-t-0 border-b-[1px] border-[#3e4144] z-10'> 

        <div className="w-full px-4  ">{title}</div>
        
       

    </div> 
  )
}

export default Navbar