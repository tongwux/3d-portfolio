import { Suspense, useState } from 'react';





import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        
        <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 h-full">

          <div className="col-span-1 bg-black-200 p-4 rounded-xl"> {/* Added rounded-xl for rounded corners */}
            <p className="head-text py-10 px-4">Summary </p>

            <div className = "px-4 ">
              <div className = "py-4">
                <p className="font-bold text-white-800">Summary</p>
                <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
                </p>
              </div>

            </div>

            <div className = "py-10 px-4">
              <p className="font-bold text-white-800">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
            <div className="sm:py-5 py-5 sm:px-5 px-2.5"> 
              {/* Additional content could be mapped similarly if needed */}
            </div>
          </div>

          <div className="col-span-2 bg-black-200 p-4 rounded-xl"> {/* Added rounded-xl for rounded corners */}
            <p className="head-text py-10 px-4">Work Experience</p>
            <div className="sm:py-5 py-5 sm:px-0 px-2.5"> 
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>
                    <div className="work-content_bar" />
                  </div>
                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
            





          </div>



        </div>
      </div>
    </section>



  );
};

export default WorkExperience;

