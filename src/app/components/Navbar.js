import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/streamy-logo.webp";

export default async function Navbar() {
  return (
    <nav className="flex justify-center w-full fixed top-0 z-[100] bg-black">
      <div className="flex items-center max-w-6xl w-full justify-between border-b-2 border-black py-6">
        <div>
          <Link href="/" className="text-white">
            <Image src={logo} alt="Streamy Logo" width={25} height={25} />
          </Link>
        </div>
        <h1 className="font-quattrocento text-indigo-300 uppercase">Halo Theme</h1>
        <div>
          <Link href="/" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8 hover:stroke-[#dac59a] hover:rotate-[360deg] transition duration-700 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
