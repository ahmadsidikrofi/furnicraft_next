'use client'
import Image from "next/image"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/Button"
import { GithubLogo, GoogleLogo } from "@phosphor-icons/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { LoaderIcon } from "react-hot-toast"

const Signin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const redirectToSignin = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            router.push('/api/auth/signin')
        }, 3000)
    }
    return (
        <main>
            <div className="md:hidden mb-5">
                {/* <Image
                    src="/examples/authentication-light.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="block dark:hidden"
                /> */}
            </div>
            <div className="container relative h-[633px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <Link href="/" className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-6 w-6"
                            >
                                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                            </svg>
                            FurniCraft
                        </Link>
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This library has saved me countless hours of work and
                                helped me deliver stunning designs to my clients faster than
                                ever before.&rdquo;
                            </p>
                            <footer className="text-sm">Sofia Davis</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto w-full justify-center border rounded-lg p-10 space-y-6 sm:w-[500px] md:w-[100%] max-md:w-[100%] lg:w-[500px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Sign in
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Choose sign in method that you like 
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Button variant="outline" className="p-3 w-[25rem] rounded-full gap-1"><GoogleLogo size={20} /> Google</Button>
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={redirectToSignin} variant="outline" className="p-3 w-[25rem] rounded-full gap-1">
                                {isLoading ? <LoaderIcon /> : <GithubLogo size={20} />} Github
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Signin
