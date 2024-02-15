import Jumbotron from "../components/Jumbotron"
import FtCategories from "../components/FtCategories"
import PopulerFurniture from "../components/PopulerFurniture"
import { Suspense } from "react"
export default function Home() {
  return (
    <section className='text-2xl font-medium pt-16 xl:px-16 sm:px-4 max-sm:px-4'>
      <Jumbotron />
      <FtCategories />
      <PopulerFurniture />
    </section>
  )
}
