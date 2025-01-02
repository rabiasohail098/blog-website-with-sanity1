import BlogCard from "@/components/BlogCard";
import { Card } from "../../../typings";
import { client } from "../../sanity/lib/client";

export default async function Home() {
  const query = `*[_type=='blog'] | order(publishedAt desc) {
    title,
    summary,
    image {
      asset->{
        _id,
        url
      }
    },
    "slug": slug.current
  }`;

  const blogs: Card[] = await client.fetch(query);
  console.log(blogs);

  return (
    <main className="container flex flex-col min-h-screen px-4 md:px-8">
      <h1 className="text-2xl text-center underline mb-6 text-blue-400 font-bold lg:text-4xl">
        MOST RECENT BLOGS
      </h1>
      <section className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.map((blog: Card) => (
          <BlogCard blog={blog} key={blog.slug} />
        ))}
      </section>
    </main>
  );
}
