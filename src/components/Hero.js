import { storyblokEditable } from "@storyblok/react";


const Hero  = ({ blok }) => {
  
    const immaginesfondo = blok.img_sfondo.filename

  return (
    <div
      className="w-full bg-white "
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <div style={{ backgroundImage: `url(${immaginesfondo})` }} className="pt-[257px] mx-auto bg-cover px-14">
            <h2 className="text-white uppercase w-[800px] font-anton text-7xl leading-[120%] mb-[50px]">{blok.title}</h2>
            <div className="flex justify-between ">
                <p className="text-3xl text-white font-heebo w-[800px] leading-[120%]">{blok.text}</p>
                <img src={blok.img.filename} alt={blok.title} className="mb-[124px] mt-11 mr-[164px]"/>
            </div>

      </div>
    </div>
  );
};

export default Hero;
