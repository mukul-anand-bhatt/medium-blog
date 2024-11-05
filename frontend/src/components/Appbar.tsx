import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import { SearchBar } from "./Searchbar";
import ToggleTheme from "./ToggleTheme";

export const Appbar = ({
  search,
  setSearch,
  type,
  setType,
}: {
  search: string;
  setSearch: (value: string) => void;
  type: string;
  setType: (newType: string) => void;
}) => {
  return (
    <div
      className={`border-b flex flex-row justify-between px-10 py-4 ${
        type === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <div className="flex flex-row space-x-14">
        <Link
          to={"/blogs"}
          className={`flex flex-col justify-center cursor-pointer font-bold ml-[100px] text-2xl text-${
            type === "light" ? "black" : "white"
          }`}
        >
          Medium-Blog
        </Link>
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className="flex flex-row mr-[100px]">
        <Link to={`/publish`}>
          <button
            type="button"
            className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            New
          </button>
        </Link>

        <Avatar size={"big"} name="chandan" type={type} />
        <ToggleTheme type={type} setType={setType} />
      </div>
    </div>
  );
};
