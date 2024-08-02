"use client";

import { usePathname, useRouter } from 'next/navigation'
import Navbar from './Navbar';

const NavbarWrapper = ({ authUser, countCart }) => {
  const pathname = usePathname()
  const router = useRouter()
  const isInvoiceRoute = /^\/invoice\/[a-zA-Z0-9-]+$/.test(pathname)
  const excludedRoutes = ["/sign-in"]
  const isExcludedRoute = excludedRoutes.includes(pathname) || isInvoiceRoute
  if ((pathname === "/dashboard/stores" || pathname === "/dashboard/orders") && !authUser) {
    router.push("/sign-in");
    return null;
  }
  return !isExcludedRoute ? <Navbar authUser={authUser} countCart={countCart}/> : null;
};

export default NavbarWrapper;
