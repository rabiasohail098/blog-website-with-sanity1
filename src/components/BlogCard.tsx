import Link from "next/link";
import Image from "next/image";

// Define the type for the blog object
interface Blog {
  title: string;
  summary: string;
  image?: {
    asset: {
      url: string;
    };
  };
  slug: string;
}

interface BlogCardProps {
  blog: Blog; // Type for the blog prop
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="container p-4 w-[300px] border border-gray-200 rounded-lg shadow-md space-y-4">
      {blog.image?.asset?.url && (
        <Image
          src={blog.image.asset.url}
          alt={blog.title}
          width={300}
          height={200}
          className="p-2 w-full h-[200px] border-2 border-amber-400"
        />
      )}
      <h2 className="text-xl text-left underline mb-4 text-blue-400 font-bold text-outline">
        {blog.title}
      </h2>
      <p className="text-sm text-left underline mb-4 text-green-400 font-bold text-outline">
        {blog.summary}
      </p>

      <button className="p-2 border-[1px] border-gray-200 rounded-md text-gray-300">
        <Link href={`/blog/${blog.slug}`}>View Details</Link>
      </button>
    </div>
  );
};

export default BlogCard;
