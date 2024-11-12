import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({
  blog,
  type,
  setType,
}: {
  blog: Blog;
  type: string;
  setType: any;
}) => {
  return (
    <div>
      <Appbar search="" setSearch={() => {}} type={type} setType={setType} />
      <div
        className={`flex justify-center ${
          type === "light" ? "bg-white" : "bg-black"
        } h-[689px]`}
      >
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div
              className={`text-5xl font-extrabold ${
                type === "light" ? "text-black" : "text-white"
              }`}
            >
              {blog.title}
            </div>
            <div className="text-slate-500 pt-2">Post on 19 April 2024</div>
            <div
              className={`pt-4 ${
                type === "light" ? "text-black" : "text-white"
              }`}
            >
              {blog.content}
            </div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar
                  type={type}
                  size="big"
                  name={blog.autherName || "Anonymous"}
                />
              </div>
              <div>
                <div
                  className={`${
                    type === "light" ? "text-black" : "text-white"
                  } text-xl font-bold`}
                >
                  {blog.autherName || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
