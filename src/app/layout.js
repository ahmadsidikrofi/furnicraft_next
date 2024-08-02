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
  const countCart = await prisma.cart.findMany({ 
    where: { user_email: authUser?.email }
  })
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </head>
      <body className={poppins.className}>
        <NavbarWrapper authUser={authUser} countCart={countCart}/>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
