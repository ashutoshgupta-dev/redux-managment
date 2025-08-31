'use client'
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional for icons
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
   const { isSignedIn, user, isLoaded } = useUser();
    if (!isLoaded) return null;
    // const pathName=usePathname();
  return (
    <nav className="w-full  bg-gradient-to-r from-indigo-600  via-red-400 to-pink-700">
      <div className="max-w-[1300px] mx-auto px-4 flex items-center justify-between py-4 text-white font-bold ">

        <div className="text-2xl">Logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-2xl">
          <Button asChild><Link href="/">Home</Link></Button>
          <Button asChild><Link href="/input">Input</Link></Button>

           {isSignedIn?(
            <Button asChild><Link href="/show">Show</Link></Button>
           ):(
             <SignInButton mode="modal">
                <Button>Show</Button>
             </SignInButton>
           )}        
  
          
        </div>

        
                 <div className="flex gap-2 text-center">

                    <SignedOut>
                     
                        <SignInButton mode="modal">
                            <Button variant="ghost">Sign In</Button>
                        </SignInButton>

                        <SignUpButton mode="modal">
                            <Button variant="ghost">Sign Up</Button>
                        </SignUpButton>

                    </SignedOut>

                        <SignedIn>
                           {isLoaded && user && (
                                <div className="flex items-center gap-2">
                                    <p className="hidden md:block">Hi, {user.fullName}</p>
                                    <UserButton/>
                                </div>
                           )}
                        </SignedIn>
                                   {/* Dashboard Link for signed-in users */}
                                    {/* {
                                        pathName!=='/dashboard' &&(
                                            <Link href="/dashboard" className="hidden sm:inline-flex items-center">
                                            <Button>
                                                Go to Dashboard <MoveRightIcon className="ml-2 h-4 w-4" />
                                            </Button>
                                            </Link>
                                        )
                                    } */}
              </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-xl bg-red-700">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/input" onClick={() => setIsOpen(false)}>Input</Link>
          <Link href="/show" onClick={() => setIsOpen(false)}>Show</Link>
        </div>
      )}
     
    </nav>
  );
};

export default NavBar;
