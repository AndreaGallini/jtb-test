import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({ blok }) => {
  return (
    <div
      className="w-full bg-white pt-[80px] px-[56px] p-[108px]" 
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <div className="flex justify-between">
            <div className="left">
                <p className="text-2xl font-heebo">{blok.cosa}</p>
            </div>
            <div className="right">
                <p className="uppercase font-anton text-[45px] pb-[50px] pt-8">{blok.titolo}</p>
                <p className="text-2xl font-heebo">{render(blok.testo)}</p>
            </div>

      </div>
    </div>
  );
};

export default Text;
