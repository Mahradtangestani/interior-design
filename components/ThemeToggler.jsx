"use client"
import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";


const ThemeToggler = ()=>{
    
    const {theme , setTheme} = useTheme();

    return (
        <div>
            <Button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}>
                 <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:rotate-90 dark:scale-0"/>
                 <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
            </Button>
        </div>
    )
}

export default ThemeToggler;