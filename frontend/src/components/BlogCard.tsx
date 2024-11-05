import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
  type: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
  type,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div
        className={`p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer bg-${
          type === "light" ? "white" : "black"
        }`}
      >
        <div className="flex">
          <Avatar name={authorName} type={type} />
          <div
            className={`font-extralight pl-2 text-sm flex justify-center flex-col text-${
              type === "light" ? "black" : "white"
            }`}
          >
            {authorName}
          </div>
          <div className="flex justify-center flex-col pl-2">
            <Circle />
          </div>
          <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>
        <div
          className={`text-3xl font-bold pt-2 text-${
            type === "light" ? "black" : "white"
          }`}
        >
          {title}
        </div>
        <div className={`text-md text-${type === "light" ? "black" : "white"}`}>
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
          {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"> </div>;
}

export function Avatar({
  name,
  size = "small",
  type,
}: {
  name: string;
  size?: "small" | "big";
  type: String;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-extralight text-${type === "light" ? "black" : "white"}`}
      >
        {name[0]}
      </span>
    </div>
  );
}
