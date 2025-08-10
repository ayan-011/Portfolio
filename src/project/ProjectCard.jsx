import React from 'react' 

const ProjectCard = ({image, name, detail, link}) => {
  return (
    <div className='w-full md:bg-color bg-color-phone  h-fit flex justify-center py-2 '> 
        <div className="  ">
        
          
        <img
       onClick={() => window.open(link, '_blank')}
         src={image} alt="" className='md:w-[500px]  md:h-[250px] h-[170px] w-auto md:rounded-t-xl hover:opacity-70 transition-all duration-50 z-0 cursor-pointer' />
       
         <div className="links flex justify-between md:p-3 md:px-5 p-1 px-2  bg-links md:rounded-b-xl text-sm md:text-base text-zinc-300 ">
            <div className="">{name}</div>
            <div className="flex gap-5">
                <div className="text-white">G</div>
                <div className="text-white">L</div>
            </div>
         </div>

         <div className="details  md:w-[500px] p-5 tracking-tight">
           {detail}
         </div>
 
        </div>
        
    </div>
  )
}

export default ProjectCard