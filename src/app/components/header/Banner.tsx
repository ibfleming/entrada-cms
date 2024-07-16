import Link from "next/link";
import SearchBar from "./Search";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export default function Banner() {
  return (
    <header className="bg-background block h-[64px] w-full">
      <div className="flex h-full w-full flex-row items-center justify-between">
        <div className="text-primary ml-8 text-xl">
          <Link href={"/"} className={poppins.className}>
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
