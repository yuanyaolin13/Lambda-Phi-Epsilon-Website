import banner from "../assets/scrollingBanner.jpg";
import {useState} from "react";
import {useScrollFadeIn} from "./hooks/useScrollFadeIn.ts";

function Landing({ PageName } : {PageName : string}) {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const {ref, visible} = useScrollFadeIn();

  return (
    <article
      className="bg-[url(./assets/smoke2.png)] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col">
      <div
        className="flex-1 flex flex-row items-center bg-black/75 backdrop-blur-sm text-white relative overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-center m-2 w-full">
          <div ref={ref}
               className={`fade-up ${visible ? "visible" : ""} flex flex-col w-full align-middle justify-center px-4`}>
            <div className='text-6xl sm:text-8xl lg:text-[9rem] tracking-tighter font-extrabold'>
              {PageName}
            </div>
            <div className='text-2xl sm:text-4xl font-extrabold tracking-tighter'>
              LAMBDA PHI EPSILON
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-white p-2">
        <ul className={`flex w-max ${bannerLoaded ? 'animate-infinite-scroll' : ''}`}>
          {[...Array(6)].map((_, i) => (
            <li key={i}>
              <img
                src={banner}
                alt={`banner ${i}`}
                className="h-16 w-auto"
                loading="eager"
                onLoad={() => setBannerLoaded(true)}
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Landing;