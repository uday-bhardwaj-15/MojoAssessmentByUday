import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Facebook, Menu } from "lucide-react";
import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-sm font-medium hover:underline">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline">
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline">
                Services
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">LOGO</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#" className="hover:underline">
              Home
            </Link>
            <Link href="#" className="hover:underline">
              About
            </Link>
            <Link href="#" className="hover:underline">
              Services
            </Link>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ClerkProvider>
            <SignedOut>
              <div className="flex justify-center items-center min-h-screen">
                <SignInButton mode="modal">
                  <Button variant="outline" className="ml-auto">
                    <Facebook className="mr-2 h-4 w-4" />
                    Login with Facebook
                  </Button>
                </SignInButton>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </ClerkProvider>
        </div>
      </div>
    </nav>
  );
}
