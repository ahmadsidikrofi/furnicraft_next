"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/libs/utils"
import { buttonVariants } from "./ui/button";

const SidebarDashboard = ({ className, items, ...props }) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 w-52 gap-3",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline text-slate-400",
            "justify-start"
          )}
        >
          <div className="text-[17px] flex items-center gap-3 justify-center disabled:first-of-type:*">
            {item.icon}
            {item.title}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default SidebarDashboard;
