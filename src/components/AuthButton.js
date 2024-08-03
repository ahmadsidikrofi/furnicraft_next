'use client'
import Link from "next/link"
import { Button } from "./ui/Button"
import { Bag, SignOut, User } from "@phosphor-icons/react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { DashboardIcon } from "@radix-ui/react-icons"
import HomeTour from "./drivers/HomeTour"
  
const AuthButton = ({ authUser }) => {
    const NotSignedButton = () => {
        return (
            <>
                {/* {authUser === false && <HomeTour />} */}
                <Link href="/sign-in" className={`signin relative flex items-center shadow-md rounded-full bg-color-accent2`}>
                    <Button className="text-color-primary" variant="none">Sign in</Button>
                </Link>
            </>
        )
    }

    const SignedButton = () => {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="border-[1px] shadow border-color-accent border-opacity-15 rounded-full hover:bg-color-grey hover:bg-opacity-5">
                    <Image src={authUser?.image} width={40} height={40} alt="Avatar user" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mx-6 mt-1">
                    <DropdownMenuLabel>{authUser?.name}</DropdownMenuLabel>
                    <p className="text-sm px-2">{authUser?.email}</p>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem disabled className="flex gap-3">
                        <User size={14}/> 
                        <p>Profile</p>
                    </DropdownMenuItem>
                    <Link href="/dashboard/orders">
                        <DropdownMenuItem className="flex gap-3">
                            <Bag />
                            <p>Order</p>
                        </DropdownMenuItem>
                    </Link>
                    <Link href="/dashboard/stores">
                        <DropdownMenuItem className="flex gap-3">
                            <DashboardIcon />
                            <p>Dashboard</p>
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <Link href="/api/auth/signout" >
                        <DropdownMenuItem className="cursor-pointer flex gap-3">
                            <SignOut size={14}/>
                            <span className="text-sm">Signout</span>
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }

    return ( authUser ? SignedButton() : NotSignedButton() )
}
export default AuthButton