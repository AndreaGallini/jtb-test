import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Sezione_testo_foto = ({ blok }) => {
    const coloreSfondo = blok.bgcolor
  return (
    <div
      className="w-full bg-white"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <div className="flex justify-around  pb-[128px] pt-[120px] mx-[52px]">
        <div className=" w-[30%] pl-10 pt-10 pr-16 rounded-tr-[50px] " style={{ backgroundColor : `#${coloreSfondo}` }}>
            <img className="icona mb-[56px]" src={blok.icona.filename} alt={blok.icona.filename} />
            <p className="text-2xl font-heebo leading-[150%]">{render(blok.testo)}</p>
        </div>
        <div className="w-[65%]">
            <img className="w-full h-[533px]" src={blok.img.filename}/>
        </div>
      </div>
      <hr className="mx-[30px] bg-black border-black"></hr>
    </div>
  );
};

export default Sezione_testo_foto;
