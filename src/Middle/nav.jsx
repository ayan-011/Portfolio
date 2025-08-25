import React from 'react'

const Navbar = ({title}) => {
 
  return (
    <div className='w- h-16 bg-mirror backdrop-blur-xl flex items-center  top-0 md:left-[20%] md:right-[20%] left-[20%] right-[0%] fixed border border-l-[1px] md:border-r-[1px] md:border-t-[0] border-r-0 border-t-0 border-b-[1px] border-[#3e4144] z-2'> 

        <div className="w-full px-4 ">{title}</div>
        
       

    </div>
  )
}

export default Navbar