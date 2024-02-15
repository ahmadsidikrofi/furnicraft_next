import { Poppins } from 'next/font/google'
import './globals.css'
import "@uploadthing/react/styles.css";
import Navbar from "../components/Navbar"
import 'react-loading-skeleton/dist/skeleton.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'FurniCraft',
  description: 'Memberikan layanan konsultasi gratis kepada setiap pelanggan untuk memahami kebutuhan dan preferensi mereka terhadap ruangan interior yang ingin dibuat.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
