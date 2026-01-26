import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";

export default function ThankYou() {
  // Tracking Pixel Implementation
  useEffect(() => {
    // 1. Console Log for Verification
    console.log("Conversion Event: Report Downloaded - Thank You Page Loaded");

    // 2. Placeholder for Real Pixel (e.g., LinkedIn, Meta, Google)
    // To use: Uncomment and replace 'YOUR_PIXEL_ID' with your actual ID
    /*
    const pixelId = "YOUR_PIXEL_ID";
    const img = document.createElement("img");
    img.src = `https://example.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    document.body.appendChild(img);
    
    return () => {
      document.body.removeChild(img);
    };
    */
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <AnnouncementBar />
      {/* Navigation */}
      <header className="border-b-2 border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="h-8 w-8 bg-primary border-2 border-border"></div>
              <span className="font-display text-xl font-bold tracking-tighter">IT/AI IN A BOX</span>
            </div>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="font-mono text-sm font-medium hover:bg-transparent hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              BACK TO HOME
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-24">
        <div className="container max-w-3xl text-center space-y-8">
          <div className="mx-auto h-24 w-24 bg-primary text-primary-foreground border-2 border-border flex items-center justify-center shadow-[8px_8px_0px_0px_var(--color-border)] mb-8">
            <CheckCircle className="h-12 w-12" />
          </div>
          
          <h1 className="font-display text-5xl lg:text-6xl font-bold tracking-tighter">
            DOWNLOAD STARTED!
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl mx-auto font-medium leading-relaxed">
            Your copy of the IT/AI in a Box viability report is on its way. While you wait, why not see the platform in action?
          </p>

          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6 items-center">
            <Button size="lg" className="h-16 px-8 text-lg font-bold uppercase tracking-wide border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-[6px_6px_0px_0px_var(--color-border)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_var(--color-border)] active:translate-y-[0px] active:shadow-[4px_4px_0px_0px_var(--color-border)]">
              <Calendar className="mr-3 h-6 w-6" />
              Schedule a Demo
            </Button>
            
            <Link href="/">
              <Button variant="outline" size="lg" className="h-16 px-8 text-lg font-bold uppercase tracking-wide border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]">
                Return to Homepage
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground pt-8">
            Didn't start? <a href="/IT_AI_in_a_Box_Report.pdf" download className="underline font-bold hover:text-primary">Click here to try again</a>
          </p>
        </div>
      </main>

      <footer className="py-12 border-t-2 border-border bg-background">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-primary border border-border"></div>
            <span className="font-display font-bold">IT/AI IN A BOX</span>
          </div>
          <div className="text-sm text-muted-foreground font-mono">
            © 2026 IT/AI in a Box Consortium. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
