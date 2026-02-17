import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import  Sidebar from "@/components/Sidebar"
import { Menu, MenuIcon } from "lucide-react"

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 z-100">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}