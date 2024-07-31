import { Poppins } from 'next/font/google'
import "./globals.css";
import NavbarWrapper from '@/components/NavbarWrapper';
import { authUserGithub } from '@/libs/auth';
import Footer from '@/components/Footer';
// import 'react-loading-skeleton/dist/skeleton.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'FurniCraft',
  description: 'Memberikan layanan konsultasi gratis kepada setiap pelanggan untuk memahami kebutuhan dan preferensi mereka terhadap ruangan interior yang ingin dibuat.',
}


export default async function RootLayout({ children }) {
  const authUser = await authUserGithub()
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className={poppins.className}>
        <NavbarWrapper authUser={authUser}/>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
