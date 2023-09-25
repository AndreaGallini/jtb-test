import { storyblokEditable } from "@storyblok/react";


const TestoNormale = ({ blok }) => {
  return (
    <div
      className="w-full bg-white"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <div className="container py-12 mx-auto">{blok.text}</div>
    </div>
  );
};

export default TestoNormale;
