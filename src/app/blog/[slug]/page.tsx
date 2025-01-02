// app/blog/[slug]/page.tsx

import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { PortableText } from "next-sanity";
import { Components } from "../../../components/customcomponent";

type Post = {
  title: string;
  summary: string;
  content: Array<{
    _key: string;
    _type: string;
    children: Array<{
      _key: string;
      _type: string;
      text: string;
    }>;
  }>;
  image?: {
    asset: {
      url: string;
    };
  };
  author?: {
    name: string;
    bio: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
};

// The `params` should be passed correctly here
export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Ensure the `slug` is correctly handled as a string
  const query = `*[_type=="blog" && slug.current == $slug][0]{
    title,
    summary,
    image {
      asset->{
        url
      }
    },
    content,
    author->{
      name,
      bio,
      image {
        asset->{
          url
        }
      }
    }
  }`;

  // Fetch the post using the `slug` parameter
  const post: Post | null = await client.fetch(query, { slug: params.slug });

  if (!post) {
    return <div>Post not found!</div>;
  }

  const imageUrl = post.image?.asset?.url;
  const imageUrl2 = post.author?.image?.asset?.url;

  return (
    <div>
      {/* Post Title */}
      <h1 className="text-xl sm:text-2xl text-center underline lg:text-3xl mb-4 text-blue-400 font-bold text-outline">
        {post.title}
      </h1>

      {/* Post Summary */}
      <p className="text-base text-outline text-center mb-8 sm:text-lg lg:text-xl text-amber-500 underline">
        {post.summary}
      </p>

      {/* Post Image */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`Image for ${post.title}`}
          width={600}
          height={400}
          className="rounded-lg object-cover w-full h-[400px] mb-8"
        />
      )}

      {/* Author Section */}
      <div className="flex flex-col md:flex-row gap-6 px-8">
        {imageUrl2 && (
          <Image
            src={imageUrl2}
            alt={`Image of ${post.author?.name}`}
            width={100}
            height={100}
            className="rounded-full w-[200px] h-[200px]"
          />
        )}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl mb-4 text-blue-200 font-bold text-outline">
            {post.author?.name}
          </h2>
          <p className="text-base text-outline sm:text-lg lg:text-xl text-gray-200 underline">
            {post.author?.bio}
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <section className="my-8 text-gray-100 px-8 py-4">
        <div className="space-y-4">
          <PortableText value={post.content} components={Components} />
        </div>
      </section>
    </div>
  );
}
