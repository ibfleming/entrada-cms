import { CiSearch } from "react-icons/ci";
import "./styles/Search.css";

export default function SearchBar() {
  return (
    <div className="search-parent">
      <CiSearch className="search-icon" />
      <input type="text" className="bg-background text-secondary text-sm" />
    </div>
  );
}
