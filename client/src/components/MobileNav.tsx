import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <nav className="flex flex-col gap-6 mt-8">
          <a 
            href="/#problem" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            THE GAP
          </a>
          <a 
            href="/#solution" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            THE BOX
          </a>
          <a 
            href="/#impact" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            IMPACT
          </a>
          <a 
            href="/#consortium" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            PARTNERS
          </a>
          <a 
            href="/resources" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            RESOURCES
          </a>
          <div className="pt-6 border-t border-border">
            <a 
              href="/#contact" 
              className="btn-brutal w-full text-center block"
              onClick={handleLinkClick}
            >
              GET ACCESS
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
