import ProjectCard from "./ProjectCard"

const PROJECTS = [

    {
        image : '/img.jpg',
        name :  "project name",
        detail : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus tempore nulla pariatur quibusdam quam magnam nobis? Praesentium, nemo natus."

    },
    {
        image : '/img.jpg',
        name :  "project name",
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
        detail={project.detail}/>
        </div>
             
        )}
    </div>
}