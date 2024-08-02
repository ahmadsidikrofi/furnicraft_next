'use client'

import { Separator } from "@/components/ui/separator";
import SidebarDashboard from "@/components/SidebarDashboard";
import { Bag, Storefront } from "@phosphor-icons/react";
import { HomeIcon } from "@radix-ui/react-icons";


const sidebarNavItems = [
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: <Bag />
  },
  {
    title: "Store",
    href: "/dashboard/stores",
    icon: <Storefront />
  },
];

const DashboardLayout = ({ children }) => {
  return (
    <div className="relative space-y-6 sm:p-10 max-sm:p-4 pb-16 md:block">
      <Separator className="my-6 rotate-90 absolute right-[30%] hidden min-[1270px]:block" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="sm:-mx-4 lg:w-1/5">
          <SidebarDashboard items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
