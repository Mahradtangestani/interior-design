import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Logo from "./Logo";
import Nav from "./Nav";

const MobileNavigation = ()=>{
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify/>
            </SheetTrigger>
            <SheetContent>
                <div className="flex flex-col items-center justify-between h-full py-8">
                    <div className="flex flex-col items-center gap-y-32">
                        <Logo/>
                        <Nav
                        containerStyles={"flex flex-col items-center gap-y-7"}
                        linksStyles={"text-1xl font-semibold"}
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavigation;