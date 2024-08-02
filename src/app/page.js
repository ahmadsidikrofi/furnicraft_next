import Image from "next/image";
import FtCategories from "@/components/FtCategories";
import Jumbotron from "@/components/Jumbotron";
import PopulerFurniture from "@/components/PopulerFurniture";

export default function Home() {
  return (
    <main className="">
      <Jumbotron />
      <section className='xl:px-16 sm:px-4 max-sm:px-4'>
          {/* <FtCategories />
          <PopulerFurniture /> */}
      </section>
    </main>
  );
}
