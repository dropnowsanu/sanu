import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from "./Logo"

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <Menu className="w-7 h-7 sm:hidden" />
      </SheetTrigger>
      <SheetContent className="bg-white/5 border-teal-400 mt-16 border rounded-l-md">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-center items-center gap-6 mt-8">
<span>
    Home
</span>
<span>
    About Me
</span>
<span>
    Portfolio
</span>
<span>
    Contact
</span>
        </div>
      </SheetContent>
    </Sheet>
  )
}
