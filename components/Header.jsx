"use client"  

import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";
import { usePathname } from "next/navigation";



const Header = ()=>{
    
    const [header , setHeader] = useState(false)
    const pathname = usePathname()

    useEffect(()=>{
      const scrollYPos = window.addEventListener("scroll" , ()=>{
        window.scrollY > 50 ? setHeader(true) : setHeader(false)
      })

      return ()=> window.addEventListener("click" , scrollYPos)
    } , [])
    
    return (
        <header className={`${header ? "py-4 bg-tertiary shadow-lg dark:bg-accent" : "py-6 dark:bg-transparent"} sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fff]"}`}>
            <div className="w-3/4 mx-auto">
                <div className="flex items-center justify-between">
                    <Logo/>
                    <div className="flex items-center gap-x-6">
                        <Nav 
                        containerStyles="hidden xl:flex gap-x-8 items-center" 
                        linksStyles={"relative hover:text-primary transition-all"}
                        underlineStyles={"absolute left-0 top-full h-[2px] bg-primary w-full"}
                        />
                        <ThemeToggler/>
                        <div className="xl:hidden">
                            <MobileNavigation/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;