import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  const [search, setSearch] = useState("");
  const [type, setThemeType] = useState("light");

  function setType(newType: string) {
    setThemeType(newType);
  }

  // Show a loading skeleton if data is still loading
  if (loading) {
    return (
      <div>
        <Appbar
          search={search}
          setSearch={setSearch}
          type={type}
          setType={setType}
        />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Appbar
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
      />
      <div
        className={`flex justify-center h-screen  ${
          type === "light" ? "bg-white" : "bg-black"
        }`}
      >
        {filteredBlogs.length > 0 ? (
          <div
          >
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                // authorName={blog.author.name || "Anonymous"}
                authorName={blog.autherName || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate={"2nd Feb 2024"}
                type={type}
              />
            ))}
          </div>
        ) : (
          <div
            className={`text-center h-screen text-gray-500 mt-10 ${
              type === "light" ? "bg-white" : "bg-black"
            }`}
          >
            No blogs found.
          </div>
        )}
      </div>
    </div>
  );
};
