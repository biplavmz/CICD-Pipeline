import Image from "next/image";
import Data from "./Data/page";
import Data1 from "@/app/Data/page"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Data />
      <Data1 />
     
    </main>
  );
}
