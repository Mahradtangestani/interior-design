"use clinet"

import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";



const Header = ()=>{
    return (
        <header>
            <div className="container mx-auto">
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