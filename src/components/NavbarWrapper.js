"use client";

import { usePathname, useRouter } from 'next/navigation'
import Navbar from './Navbar';

const NavbarWrapper = ({ authUser }) => {
  const pathname = usePathname();
  const router = useRouter();
  const excludedRoutes = ["/sign-in"];
  const isExcludedRoute = excludedRoutes.includes(pathname);
  if (pathname === "/dashboard/stores" && !authUser) {
    router.push("/sign-in");
    return null;
  }
  return !isExcludedRoute ? <Navbar authUser={authUser}/> : null;
};

export default NavbarWrapper;
