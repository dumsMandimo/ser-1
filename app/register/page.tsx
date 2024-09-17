import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import LOGO from '@/public/LOGO.png'
import hero3 from '@/public/hero3.jpg';

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/buttonv"
import { UserAuthForm } from "@/components/user-auth-form-reg"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative flex flex-col items-center justify-center h-auto min-h-screen lg:h-[800px] lg:grid lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
        </Link>
        <div className="relative hidden lg:flex h-full flex-col bg-muted p-10 text-white dark:border-r">
          <Image
            src={hero3}
            alt="man-getting-haircut"
            quality={100}
            style={{ objectFit: "cover", objectPosition: "75%" }}
            fill
            className="pointer-events-none select-none"
            priority
          />
          <div className="relative z-20 flex items-center text-lg font-medium mt-4">
            <Link href='/'>
              <Image
                src={LOGO}
                alt='Logo'
                width="205"
                height="75"
                className='cursor-pointer'
                priority
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center lg:p-8 w-full">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] p-4 lg:p-0">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
