"use client"

import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { TbArrowUpRight } from "react-icons/tb";
import { Field, Label, Switch } from "@headlessui/react";
import { Button } from "../../components/ui/button";


function className(...classes){
   return classes.filter(Boolean).join(" ")
}

export default function Contact(){
    
    const [agreed , setAgreed] = useState(false)

    return (
        <div className="px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Sales</h2>
                <p className="mt-t text-lg leading-8 text-muted-foreground">Please feel free to ask anything</p>
            </div>

            <form className="mx-auto mt-16 max-w-xl sm:mt-20" action="">
               <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                 <div className="mt-2.5">
                   <Input type="name" id="firstname" placeholder="First Name"/>
                 </div>
                 <div className="mt-2.5">
                   <Input type="name" id="lastname" placeholder="Last Name"/>
                 </div>
               </div>
               <div className="col-span-2">
                    <div className="mt-2.5">
                       <Input type="name" id="Company" placeholder="Company"/>
                    </div>
                </div>
               <div className="col-span-2">
                    <div className="mt-2.5">
                       <Input type="name" id="Email" placeholder="Email Address"/>
                    </div>
                </div>
               <div className="col-span-2">
                    <div className="mt-2.5">
                      <Textarea placeholder="Type your message here..."/>
                    </div>
                </div>

                <div className="mt-10">
                   <label class="inline-flex items-center cursor-pointer">
                     <input type="checkbox" value="" class="sr-only peer" checked={agreed} onChange={(e)=>setAgreed(e.target.checked)}/>
                     <div class={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-400-300 dark:peer-focus:ring-orange-500-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary`}></div>
                     <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Agree to Policies</span>
                   </label>
                </div>
                <div className="mt-10">
                  <Button type="submit" className="flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                      Let's Talk <TbArrowUpRight className="w-5 h-5 ml-2"/>
                  </Button>
                </div>
            </form>
        </div>
    )
}