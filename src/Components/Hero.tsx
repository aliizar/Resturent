import VideoLoader from "../Assests/magic_preloader_by_volorf_.gif";
import ImageCOntainer from "../Assests/happy_piccadily_circus.png";
import Video from '../Assests/3015493-hd_1920_1080_24fps.mp4'
import '../CSS/HERO.css';

const Hero = () => {
  return (
    <main className="w-full h-screen">
      <video
        className="w-full h-[35rem] md:h-[30rem] sm:h-[20rem] object-cover"
        autoPlay
        loop
        muted
        poster={VideoLoader}
        src={Video}
        preload="metadata"
      >
        <track kind="metadata" label="cuepoints" data-removeondestroy="" />
      </video>

      <div className="HeroSection">
        <div className="HeroWrapper flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10 px-6">
          <div className="Image">
            <img src={ImageCOntainer} className="Image" alt="Piccadilly Circus" />
          </div>
          <div className="Details w-full md:w-[50%] flex flex-col items-start">
            <div className="HeadingText">
              <p className="text-black text-4xl md:text-5xl font-[mono] font-bold">
                Happy London
              </p>
              <p className="text-[#e31e25] font-[mono] text-4xl md:text-5xl font-bold mt-4">
                Restaurant <span className="text-black">In</span>
              </p>
              <p className="text-4xl md:text-5xl text-black font-[mono] font-bold">
                Piccadilly Circus
              </p>
            </div>
            <div className="ParaAndButts mt-6">
              <p className="ParaGraph text-base md:text-sm lg:text-xs w-full md:w-[25rem]">
                Welcome to HAPPY! A family-friendly casual dining group with over 40 sites across Europe. Located at the heart of London, you can’t miss our bright and beautiful flagship restaurant in Piccadilly Circus, London.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
