import ProjectCard from "./ProjectCard"

const PROJECTS = [

    {
        image : '/gradiant.png',
        name :  "project name",
         link: 'https://ui-ochre-zeta.vercel.app/', 
        detail : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus tempore nulla pariatur quibusdam quam magnam nobis? Praesentium, nemo natus."

    },
    {
        image : 'videoplayer.png',
        name :  "videoplayer",
        link: 'https://ui-ochre-zeta.vercel.app/',
        detail : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus tempore nulla pariatur quibusdam quam magnam nobis? Praesentium, nemo natus."

    },
    {
        image : '/wallpaper.png',
        name :  "project name",
        link: 'https://ui-ochre-zeta.vercel.app/',
        detail : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus tempore nulla pariatur quibusdam quam magnam nobis? Praesentium, nemo natus."

    },
    {
        image : '/eccomerce.png',
        name :  "project name",
        link: 'https://ui-ochre-zeta.vercel.app/',
        detail : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus tempore nulla pariatur quibusdam quam magnam nobis? Praesentium, nemo natus."

    },


]

export const ProjectGrid = () => {

    return <div className="grid grid-cols-1 gap-5 ">

        {PROJECTS.map((project , index) => 
        <div key={index}>
      
       <ProjectCard
        image={project.image}
        name={project.name}
        link={project.link}
        detail={project.detail}/>
        </div>
             
        )}
    </div>
}