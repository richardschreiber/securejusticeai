import { Megaphone } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground border-b-2 border-border py-2 px-4">
      <div className="container flex items-center justify-center gap-2 text-sm font-bold font-mono tracking-tight">
        <Megaphone className="h-4 w-4" />
        <span>ASK FOR OUR NON-PROFIT DISCOUNT</span>
      </div>
    </div>
  );
}
