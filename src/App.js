import "./index.css";
import Layout from "./components/Layout";
import { useStoryblok, StoryblokComponent } from "@storyblok/react";

function App() {
  let languages = ["en"]; //any languages you have in storyblok
  let slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");
  //convert current url to array
  let slugArray = slug.split("/");
  let firstItem = slugArray[0];
  //Checking if the url containes any language
  let isLang = languages.includes(firstItem);
  //if dose we are going to use that or fall back to default "en".
  //In case you have a diffrent default language you can use that lang code
  let language = isLang ? firstItem : "it";

  //Now the logic for filtering out the language from url
  //This is what we will use for the slug in "useStoryblok"
  let stSlug =
    isLang && slugArray.length === 1
      ? "home"
      : isLang
      ? slugArray?.filter((_, i) => i !== 0)?.join("/")
      : slugArray.join("/");

  //We are also going to pass the language as prop to get the correct data based on the language

const story = useStoryblok(
  stSlug, { version: "draft", language },
  {
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
  },
  {
    resolveRelations: ["featured-posts.posts", "selected-posts.posts"],
  }
);

if (!story?.content) {
  return <div>Loading...</div>;
}

  return <StoryblokComponent blok={story.content} />;
}
export default App;
