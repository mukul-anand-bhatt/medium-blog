import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { useState } from "react";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  const [type, setThemeType] = useState(() => {
    return localStorage.getItem("themeType") || "light";
  });

  function setType(newType: string) {
    setThemeType(newType);
    localStorage.setItem("themeType", newType);
  }

  if (loading || !blog) {
    return (
      <div>
        <Appbar search="" setSearch={() => {}} type={type} setType={setType} />

        <div
          className={`${
            type === "light" ? "bg-white" : "bg-black"
          } h-[689px] flex flex-col justify-center`}
        >
          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog type={type} setType={setType} blog={blog} />
    </div>
  );
};
