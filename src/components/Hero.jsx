import { useState } from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center align-element">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl items-center">
          We’re changing the way people shop.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
        <div className="mt-10">
          <Link to="products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:block relative p-4 bg-neutral rounded-box">
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full z-10"
          style={{ color: "black" }}
        >
          &#10094;
        </button>
        <div className="carousel-item relative flex items-center justify-center h-full w-full">
          <img
            src={carouselImages[currentIndex]}
            className="rounded-box h-full w-full object-cover"
            alt={`Carousel ${currentIndex}`}
          />
        </div>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full z-10"
          style={{ color: "black" }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Hero;
