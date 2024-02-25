import Jumbotron from "../components/Jumbotron"
import FtCategories from "../components/FtCategories"
import PopulerFurniture from "../components/PopulerFurniture"
import { Suspense } from "react"
export default function Home() {
  return (
    <>
    <Jumbotron />
    <section className='xl:px-16 sm:px-4 max-sm:px-4'>
      <FtCategories />
      <PopulerFurniture />
    </section>
    </>
  )
}
