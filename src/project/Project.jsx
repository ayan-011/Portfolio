import ProjectCard from "./ProjectCard"

const PROJECTS = [

    {
        image : '/image.jpg',
        name :  "project name",
        detail : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus tempore nulla pariatur quibusdam quam magnam nobis? Praesentium, nemo natus."

    }

]

export const ProjectGrid = () => {

    return <div className="grid grid-cols-1">

        {PROJECTS.map(project => 
        <div>
       <ProjectCard>
        image={project.image}
        name={project.name}
        detail={project.detail}
       </ProjectCard>
        </div>
             
        )}
    </div>
}