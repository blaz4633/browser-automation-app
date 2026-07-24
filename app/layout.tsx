import { Geist, Geist_Mono } from "next/font/google"
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"
import { shadcn } from "@clerk/ui/themes"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <ClerkProvider
            appearance={{ theme: shadcn }}
            signInUrl="/sign-in"
            signUpUrl="/sign-up"
          >
            <header className="flex h-16 items-center justify-end gap-4 p-4">
              <Show when="signed-out">
                <SignInButton mode="redirect" />
                <SignUpButton mode="redirect">
                  <Button className="h-10 cursor-pointer rounded-full bg-[#6c47ff] px-4 text-sm font-medium text-white sm:h-12 sm:px-5 sm:text-base">
                    Sign Up
                  </Button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </header>
            {children}
          </ClerkProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
