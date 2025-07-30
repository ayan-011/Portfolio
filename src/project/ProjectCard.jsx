import React from 'react' 

const ProjectCard = ({image, name, detail}) => {
  return (
    <div className='w-full bg h-fit flex justify-center py-2 '> 
        <div className="  ">
        <img src={image} alt="" className='md:w-[500px]  md:h-[250px] w-auto md:rounded-t-xl hover:opacity-70 transition-all duration-50 z-0 cursor-pointer' />
         <div className="links flex justify-between p-3 px-5 bg-links md:rounded-b-xl">
            <div className="text-white">{name}</div>
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