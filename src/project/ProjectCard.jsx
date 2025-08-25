import React from 'react' 

const ProjectCard = ({image, name, detail, link }) => {
  return (
    <div className='w-full color h-fit flex justify-center    lg:py-3 overflow-hidden bg-red-900'> 
        <div className=" overflow-hidden md:rounded-t-xl ">
        
          
        <img
       onClick={() => window.open(link, '_blank')}
         src={image} alt="" className='md:w-[500px]  md:h-[250px] h-[170px] w-full md:rounded-t-xl hover:opacity-70 transition-all duration-50  -z-10 cursor-pointer hover:scale-102' />
       
         <div className="links flex justify-between md:p-3 md:px-5 p-1 px-2  bg-links md:rounded-b-xl text-sm md:text-base text-zinc-300 ">
            <div className="">{name}</div>
            <div className="flex gap-5">
                <div className="text-white">G</div>
                <div className="text-white">L</div>
            </div>
         </div>

         <div className="details  md:w-[500px] w-full lg:p-5 p-2   text-sm tracking-tight">
           {detail}
         </div>
 
        </div>
        
    </div>
  )
}

export default ProjectCard