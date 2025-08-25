import { ProjectGrid } from '../project/Project';

const Projects = ({ mobileFullscreen, setMobileFullscreen }) => {
  return (
    <div
      className={
        mobileFullscreen
          ? 'flex flex-col gap-9 justify-center min-h-screen mt-20' // Center in fullscreen
          : 'flex flex-col gap-9'
      }
    >
      {!mobileFullscreen && <div className="h-32  "></div>} {/* Keep spacing in normal mode */}

      <ProjectGrid mobileFullscreen={mobileFullscreen} />

      <Footer  
        mobileFullscreen={mobileFullscreen}
        setMobileFullscreen={setMobileFullscreen}
      />
    </div>
  );
};

export default Projects;

export const Footer = ({ mobileFullscreen, setMobileFullscreen }) => (
  <div
    className="w-full p-5   max-[436px]:flex max-[436px]:justify-end hidden "
    onClick={() => setMobileFullscreen(prev => !prev)}
  >
    {mobileFullscreen ? 'smallscreen' : 'fullscreen'}
  </div>
);
