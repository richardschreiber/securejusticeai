import { Megaphone } from "lucide-react";

export function AnnouncementBar() {
  return (
    <a href="#contact" className="block bg-primary text-primary-foreground border-b-2 border-border py-2 px-4 hover:bg-primary/90 transition-colors cursor-pointer">
      <div className="container flex items-center justify-center gap-2 text-sm font-bold font-mono tracking-tight">
        <Megaphone className="h-4 w-4" />
        <span className="underline decoration-2 underline-offset-2">ASK FOR OUR NON-PROFIT DISCOUNT</span>
      </div>
    </a>
  );
}
