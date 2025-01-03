import { client } from "../../../sanity/lib/client"; // Sanity client
import Image from "next/image";
import { PortableText } from "next-sanity";
import { Components } from "../../../components/customcomponent";

// Correct typing for BlogPostProps
interface BlogPostProps {
  params: {
    slug: string;
  };
}


// Main Blog Post Component
export default async function BlogPost({ params }: BlogPostProps) {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
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

  // Fetch the post data
  const post = await client.fetch(query, { slug: params.slug });

  if (!post) {
    return <div>Post not found!</div>;
  }

  const imageUrl = post.image?.asset?.url;
  const authorImage = post.author?.image?.asset?.url;

  return (
    <div className="container px-12">
      {/* Title */}
      <h1 className="text-5xl underline font-bold mb-6  text-center text-purple-500 text-outline">{post.title}</h1>

      {/* Summary */}
      <p className="text-lg italic text-justify text-gray-200">{post.summary}</p>

      {/* Main Image */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={post.title}
          width={800}
          height={500}
          className="my-4 rounded-lg"
        />
      )}

      {/* Author Section */}
      <div className="flex gap-8 items-center my-8">
        {authorImage && (
          <Image
            src={authorImage}
            alt={post.author?.name}
            width={100}
            height={100}
            className="rounded-full w-[200px] h-[200px]"
          />
        )}
        <div>
          <h3 className="text-3xl underline text-blue-400 text-outline">{post.author?.name}</h3>
          <p className="text-slate-300 text-justify">{post.author?.bio}</p>
        </div>
      </div>

      {/* Content */}
      <div className="text-slate-300 text-lg text-justify">
        <PortableText value={post.content} components={Components} />
        </div>
    </div>
  );
}
