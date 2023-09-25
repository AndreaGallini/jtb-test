import { storyblokEditable } from "@storyblok/react";


const Testochegira = ({ blok }) => {

  return (
    <div
      className="w-full bg-white"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <div ></div>
      <marquee direction='left' scrollamount='30' loop='-1' scrolldelay="-1" className="font-anton text-[200px]">{blok.testo}</marquee>
    </div>
  );
};

export default Testochegira;
