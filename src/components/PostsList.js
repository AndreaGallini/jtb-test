import { storyblokEditable } from "@storyblok/react";

const PostLists = ({ blok }) => {
  console.log(blok.posts)
  return (
    <ul
      className="flex flex-col items-center w-full mx-auto"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      {blok.posts.map((post) => {
        console.log(post);
        return (
          <li
            key={post.slug}
            className="w-full max-w-4xl px-10 py-6 my-4 bg-white rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-light text-gray-600">
                {`
                    ${new Date(post.created_at).getDay()}.
                    ${new Date(post.created_at).getMonth()}.
                    ${new Date(post.created_at).getFullYear()}`}
              </span>
            </div>
            <div className="mt-2">
              <a
                className="text-2xl font-bold text-gray-700 hover:text-gray-600"
                href={`/blog/${post.slug}`}
              >
                {post.content.title}
              </a>
              <p className="mt-2 text-gray-600">{post.content.intro}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a
                className="text-blue-600 hover:underline"
                href={`/blog/${post.slug}`}
              >
                Read more
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PostLists;
