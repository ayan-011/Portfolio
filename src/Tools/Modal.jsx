import { AnimatePresence, motion } from "framer-motion";
 import { useState } from "react";



const ExampleWrapper = () => {




  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="   grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className=" "
      >
         <div className="shrink-0 ">
                <div className="bg-zinc-900 border-zinc-800 border-2 h-[60px] w-[60px] md:h-[78px] md:w-[78px] rounded-full overflow-hidden hover:opacity-80 cursor-pointer">
                  <img src="profile.jpg" alt="" className='w-full h-full bg' />
                </div>
              </div>
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {

    // start profile changer
 // Initialize with default profile image
  const [activeProfile, setActiveProfile] = useState("profile.jpg");

 

  // Map the small profiles to their image sources
  const profiles = [
    { key: "profile1", src: "profile.jpg" },
    { key: "profile2", src: "ayan.jpg" },
    { key: "profile3", src: "img.jpg" },
  ];
 
// end profile changer 


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-99 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={(e) => e.stopPropagation()}
            className=" bg-black h-[60vh]  text-white   rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >


          <div className="relative w-full h-full flex flex-col">
      {/* UPPER PART */}
      <div className="upper bg-zinc-800 w-full h-1/2 overflow-hidden">
        <img src="img.jpg" alt="" className="relative -mt-16" />
        
      </div>

      {/* PROFILE IMAGE */}
      <div className="bg-zinc-900 border-black border-2 h-[60px] w-[60px] md:h-[120px] md:w-[120px] rounded-full overflow-hidden absolute ml-5 mt-16">
        <img src={activeProfile} alt="active profile" className="w-full h-full object-cover" />
      </div>

      {/* LOWER PART */}
      <div className="w-full h-full flex flex-col">
        <div className="profiles p-2 flex justify-end gap-2">
          {profiles.map((p) => (
            <button
              key={p.key}
              onClick={() => {
                setActiveProfile(p.src);
                
              }}
              className="rounded-full bg-black hover: opacity-60 cursor-pointer overflow-hidden w-6 h-6 ring-1 ring-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:opacity-100"
              aria-label={`Switch to ${p.key}`}
              type="button"
               
            >
              <img
                src={p.src}
                alt={p.key}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;