import ProjectCard from "./ProjectCard"

const PROJECTS = [

    {
        image : '/sportech.png',
        name :  "project name",
         link: 'https://ui-ochre-zeta.vercel.app/', 
        detail : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus tempore nulla pariatur quibusdam quam magnam nobis? Praesentium, nemo natus."

    },
    {
        image : '/gradiant.png',
        name :  "project name",
         link: 'https://ui-ochre-zeta.vercel.app/', 
        detail : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus tempore nulla pariatur quibusdam quam magnam nobis? Praesentium, nemo natus."

    },
    {
        image : 'videoplayer.png',
        name :  "videoplayer",
        link: 'https://video-player-ten-azure.vercel.app/',
        detail : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus tempore nulla pariatur quibusdam quam magnam nobis? Praesentium, nemo natus."

    },
    {
        image : '/wallpaper.png',
        name :  "project name",
        link: 'https://wallpaper-hub-nine.vercel.app/',
        detail : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus tempore nulla pariatur quibusdam quam magnam nobis? Praesentium, nemo natus."

    },
    {
        image : '/eccomerce.png',
        name :  "project name",
        link: 'https://ecommerce-website-beryl-psi.vercel.app/',
        detail : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus tempore nulla pariatur quibusdam quam magnam nobis? Praesentium, nemo natus."

    },


]

export const ProjectGrid = ({ mobileFullscreen }) => {
  return (
    <div
      className={mobileFullscreen ? 'grid grid-cols-1 gap-12' : 'grid grid-cols-1 gap-5'}
    >
      {PROJECTS.map((project, index) => (
        <div key={index} className={mobileFullscreen ? 'w-full max-w-md ' : ''}>
          <ProjectCard
            image={project.image}
            name={project.name}
            link={project.link}
            detail={project.detail}
          />
        </div>
      ))}
    </div>
  );
};
