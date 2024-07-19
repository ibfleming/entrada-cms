import Link from "next/link";
import SearchBar from "./Search";

export default function Banner() {
  return (
    <header className="bg-background-100 block h-[64px] w-full">
      <div className="flex h-full w-full flex-row items-center justify-between">
        <div className="ml-8 text-xl text-primary">
          <Link href={"/"} className="font-poppins font-bold">
            entrada
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center align-middle">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
