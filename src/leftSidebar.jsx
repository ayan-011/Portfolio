import React from 'react';  
import { NavLink } from 'react-router-dom'; 
 
const LeftSidebar = () => {

 const links = [
    { name: 'Home', to: '/home' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
    { name: 'Projects', to: '/projects' },
    { name: 'Certificates', to: '/certificates' },
  ];


  return (
    <>
    
  
    <div className="w-full  h-full bg-black rounded-lg   gap-y-2 md:flex flex-col   overflow-y-auto scrollbar-hidden hidden  ">

      {/* Profile Card */}
      <div className="rounded-2xl w-full border border-[#3e4144] flex flex-col">
        <div className="w-full rounded-2xl overflow-hidden">
          <div className="w-full flex p-3 gap-3 items-center text-white flex-wrap bg-red-90  justify-between">


                {/* image */}
            <div className="shrink-0 ">
              <div className="bg-zinc-900 border-2 h-[60px] w-[60px] md:h-[78px] md:w-[78px] rounded-full"></div>
            </div>
            <div></div>
                 
                 {/* name & email  */}
            <div className="flex flex-col gap-y-1 items-start text-sm md:text-base ">
              <span className="font-semibold select-none">Name Saifi</span>
              <span className="text-[12px] text-blue-400 break-all">email@gmail.com</span>
            </div>
          </div>

          <div className="text-white w-full px-3 select-none">
            <div className="flex flex-col gap-2 p-2 ">
              <span className="tracking-tight leading-tight text-sm text-zinc-200">
                Lorem ipsum dolor sit amet cons
              </span>
              <span className="text-[11px] text-zinc-500">Location</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="rounded-2xl w-full h-screen py-8 flex flex-col relative border  border-[#3e4144] ">

        <div className="buttons flex flex-col">
         
            {links.map(({ name, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `p-3 font-inherit md:text-[23px] tracking-tight text-white w-full transition-all duration-200 cursor-pointer items-center justify-center flex ${isActive ? 'hover:bg-zinc-950 font-bold' : 'hover:bg-zinc-950 '}`
              }
            >
              {name}
            </NavLink>
          ))}
        
        </div>

        {/* Bottom Logo */}
        <div className="   w-full flex justify-center   bottom-0 absolute items-center">
          <div className=" h-1/2 text-white p-4 w-full text-center text-sm">
            logos
          </div>
        </div>
      </div>

 
    </div>


     {/* for mobiles */}

     <div className="bg-zinc-900 w-full py-3 h-full md:hidden flex rounded-md flex-col items-center gap-2 border-[#3e4144] border-[1px]">
          <div className="profilePhoto w-fit bg-red-90 flex flex-col justify-center items-center gap-2 h-fit p-1 ">
            <div className="w-13 h-13 rounded-full bg-black border-[1px]  border-[#3e4144]"></div>
            <span className="name text-white text-[10px]" >Name Saifi</span>
          </div>

          <div className="icons w-full h-full bg-red-90 py-6 border-t-[1px] border-b-0 border-r-0 border-l-0 border-[#3e4144] ">
            <div className=" flex flex-col items-center  gap-6">
              <div className="w-9 h-9 bg-black"></div>
              <div className="w-9 h-9 bg-black"></div>
              <div className="w-9 h-9 bg-black"></div>
              <div className="w-9 h-9 bg-black"></div>
            </div>
          </div>
     </div>
    
  </>

  );
};

export default LeftSidebar;
