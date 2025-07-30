import React from 'react' 

const ProjectCard = ({image, name, detail}) => {
  return (
    <div className='w-full bg-zinc-950 h-fit mt-20 flex justify-center py-2 '>
        {/* <img src={props.image} alt="" className='' /> */}
        <div className="  ">
        <img src={image} alt="" className='w-[500px]  h-[250px] rounded-t-2xl ' />
         <div className="links flex justify-between p-3 px-5 bg-white rounded-b-2xl">
            <div className="text-black">{name}</div>
            <div className="flex gap-5">
                <div className="text-black">G</div>
                <div className="text-black">L</div>
            </div>
         </div>

         <div className="details  w-[500px] p-5 tracking-tight">
           {detail}
         </div>
 
        </div>
        
    </div>
  )
}

export default ProjectCard