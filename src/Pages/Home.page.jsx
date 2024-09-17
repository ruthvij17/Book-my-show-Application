import React, { useState } from "react";
import DefaultLayoutHOC from "../Layout/Default.Layout";

//Components
import EntertainmentCardComponent from "../components/Entertainment/EntertainmentCardComponent";
import HeroCarouselComponent from "../components/HeroCarousel/HeroCarouselComponent";
import PosterSlider from "../components/PosterSlider/PosterSliderComponent";

const HomePage = () => {
  const [recommondedMovies, setRecommondedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
  return (
    <>
      <HeroCarouselComponent />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardComponent />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subject="List of Recommonded Movies"
          posters={recommondedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="" alt="RuPay" className="w-full h-full"></img>
          </div>
          <PosterSlider
            title="Premiers"
            subject="Brand new releases every friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Online streaming events"
          subject="Online streaming events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHOC(HomePage);
