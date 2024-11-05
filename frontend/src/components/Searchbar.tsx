import { SetStateAction } from "react";
import iconImg from "../assets/icon.png"
export const SearchBar = ({search,setSearch}:{search:any,setSearch:any})=>{
    function handleChange(event: { target: { value: SetStateAction<string>; }; }){
        setSearch(event.target.value);
    }
    return (
      <div className="flex flex-row mt-[6px] p-3 bg-blue-200 rounded-full">
        <img className="rounded-full" src={iconImg}/>
        <input value={search} onChange={handleChange} type="search" placeholder="Search" className="ml-[10px] bg-blue-200 border-none outline-none" />
      </div>
    );
}
