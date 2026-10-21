import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText('tarynwux@gmail.com'); } catch { setHasCopied(false); return; }
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <p className="head-text mb-10">About Me</p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-1 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-[200px] sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Tong Wu</p>
              <p className="grid-subtext">
                Motivated and detail-oriented full-stack developer with hands-on experience on web development. Proficient in front-end and back-end, with a strong foundation in frameworks, databases, and scalable solutions.  
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 xl:row-span-1">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[150px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-1">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[150px] h-fit flex justify-center items-center">
              <Globe
                height={150}
                width={150}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 47.6062, lng: -122.3321, text: 'Seattle', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m open to relocation</p>
              <p className="grid-subtext">I&apos;m based in Seattle,WA and open to remote work worldwide.</p>
              <a href="#contact" className="btn w-full mt-10">Contact Me</a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <button type="button" className="copy-container" onClick={handleCopy} aria-label="Copy email address">
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <span className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">tarynwux@gmail.com</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


