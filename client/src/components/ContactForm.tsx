import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setOpen(false);
    toast.success("Message sent successfully!", {
      description: "We'll be in touch shortly.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="btn-brutal-outline bg-white text-primary border-white hover:bg-white/90 hover:text-primary hover:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] h-14 px-8">
          CONTACT THE CONSORTIUM
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] border-2 border-border shadow-[8px_8px_0px_0px_var(--color-border)]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-display uppercase tracking-tight">
            Contact the Consortium
          </DialogTitle>
          <DialogDescription className="text-base">
            Send us a message to learn more about the pilot program or partnership opportunities.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="font-bold uppercase text-xs tracking-wider">First Name</Label>
              <Input id="firstName" required className="border-2 border-border h-12" placeholder="Jane" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="font-bold uppercase text-xs tracking-wider">Last Name</Label>
              <Input id="lastName" required className="border-2 border-border h-12" placeholder="Doe" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="font-bold uppercase text-xs tracking-wider">Email Address</Label>
            <Input id="email" type="email" required className="border-2 border-border h-12" placeholder="jane@legalaid.org" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="font-bold uppercase text-xs tracking-wider">Phone Number</Label>
            <Input id="phone" type="tel" required className="border-2 border-border h-12" placeholder="(555) 123-4567" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-bold uppercase text-xs tracking-wider">Message</Label>
            <Textarea 
              id="message" 
              required 
              className="border-2 border-border min-h-[120px] resize-none" 
              placeholder="Tell us about your organization and needs..." 
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 text-lg font-bold uppercase tracking-wider border-2 border-border shadow-[4px_4px_0px_0px_var(--color-border)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-border)] transition-all"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
