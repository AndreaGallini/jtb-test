import { storyblokEditable } from "@storyblok/react";

const FeaturedPosts = ({ blok }) => {
  console.log(blok);
  return (
    <div
      className="container py-8 mx-auto mb-6 text-left"
      key={blok._uid}
      {...storyblokEditable(blok)}
    >
      <div className="relative">
        <h2 className="relative z-10 font-serif text-4xl text-primary">
          {blok.title}
        </h2>
        <div className="absolute top-0 w-64 h-10 mt-6 -ml-4 bg-yellow-300 opacity-50" />
      </div>
      <ul className="flex">
        {blok.posts.map((post) => {
          return (
            <li key={post.slug} className="w-1/3 pr-8">
              <a
                href={`/blog/${post.slug}`}
                className="block py-16 transition hover:opacity-50"
              >
                <img src={post.content.image} className="w-full pb-10" />
                <h2 className="pb-6 text-lg font-bold">{post.content.title}</h2>
                <p className="pb-6 leading-loose text-gray-700">
                  {post.content.intro}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeaturedPosts;
