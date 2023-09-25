import { storyblokEditable } from "@storyblok/react";


const TestoNormale = ({ blok }) => {
  return (
    <div
      className="w-full"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
     <hr ></hr>
    </div>
  );
};

export default TestoNormale;
