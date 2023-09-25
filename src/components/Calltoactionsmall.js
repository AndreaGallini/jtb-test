import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Calltoactionsmall = ({ blok }) => {
    const bgcolor = blok.bgcolor
  return (
    <div
      className=" mb-[120px] h-[350px] "
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <div style={{ backgroundColor : `#${bgcolor}` }} className="pt-[48px] pl-[40px] pr-[80px] pb-[40px] rounded-tr-[50px] ">
            <p className="pb-[39px] font-heebo text-3xl font-extrabold">{blok.titolo}</p>
            <p className="pb-[47px] ont-heebo text-lg">{blok.testo}</p>
            <div className="flex justify-end">
                <button className='h-[50px]'><img src={blok.bottonetesto.filename}/></button>
            </div>
      </div>
    </div>
  );
};

export default Calltoactionsmall;
