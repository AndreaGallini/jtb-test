import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import BlogPost from "./components/BlogPost";
import Feature from "./components/Feature";
import FeaturedPosts from "./components/FeaturedPosts";
import Grid from "./components/Grid";
import PostsList from "./components/PostsList";
import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Text from "./components/Text";
import TestoNormale from "./components/Testonormale";
import Hero from "./components/Hero";
import Testochegira from "./components/Testochegira";
import Sezione_testo_foto from "./components/Sezione_testo_foto";
import Separatore from "./components/Separatore";
import Hero2 from "./components/Hero2";
import Calltoactionsmall from "./components/Calltoactionsmall";
import Slider from "./components/Slider";

const components = {
  feature: Feature,
  "featured-posts": FeaturedPosts,
  grid: Grid,
  page: Page,
  post: BlogPost,
  "selected-posts": PostsList,
  teaser: Teaser,
  text: Text,
  testonormale:TestoNormale,
  hero:Hero,
  testochegira : Testochegira,
  sezionetestofoto: Sezione_testo_foto,
  separatore: Separatore,
  hero2: Hero2,
  calltoactionsmall : Calltoactionsmall,
  slider : Slider,
};

storyblokInit({
  accessToken: "ktrLBShyhYo3Q4YfPCuB8gtt",
  use: [apiPlugin],
  // for spaces located in the US or China:
  // apiOptions: {
  //   region: "us" or "cn", // you need to specify the region
  // },
  components,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
