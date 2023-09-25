import { storyblokEditable } from "@storyblok/react";
import HoverCarousel from "hover-carousel";

const Slider = ({ blok }) => {
    const images = [
        blok.immagine.filename,
        blok.immagine2.filename,
        blok.immagine3.filename,
        blok.immagine4.filename
        // Add more image URLs here
      ];
  return (
    <div
      className="w-full bg-white mt-120px"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
        <HoverCarousel images={images} className='px-3' />
    </div>
  );
};

export default Slider;
