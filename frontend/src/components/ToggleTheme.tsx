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
        className={`rounded-full w-[30px] h-[30px] bg-white ml-[5px] ${
          type === "dark" ? "translate-x-[30px]" : ""
        } transition-transform duration-300`}
      />
      <img src=""/>
    </div>
  );
}
