import lightImg from "../assets/light.png"
import darkImg from "../assets/dark.png"
export default function ToggleTheme({
  type,
  setType,
}: {
  type: string;
  setType: (newType: string) => void;
}) {
  function handleClick() {
    setType(type === "light" ? "dark" : "light");
  }

  return (
    <div
      className="flex items-center bg-slate-500 w-[70px] h-[40px] rounded-3xl ml-[20px] cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`flex flex-row justify-center items-center rounded-full w-[30px] h-[30px] bg-white ml-[5px] ${
          type === "dark" ? "translate-x-[30px]" : ""
        } transition-transform duration-300`}
      >
        <img
          className="select-none h-[18px] w-[18px]"
          src={type === "light" ? lightImg : darkImg}
        />
      </div>
    </div>
  );
}
