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
import { Download, Loader2 } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

export function DownloadForm() {
  const [, setLocation] = useLocation();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cellPhone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call/processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you would send this data to your backend/CRM here
    console.log("Form submitted:", formData);

    // Trigger download
    const link = document.createElement("a");
    link.href = "/IT_AI_in_a_Box_Report.pdf";
    link.download = "IT_AI_in_a_Box_Report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Download started! Thank you for your interest.");
    setLoading(false);
    setOpen(false);
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      cellPhone: "",
    });

    // Redirect to Thank You page
    setLocation("/thank-you");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="text-lg px-8 py-6 font-bold uppercase tracking-wide border-2 border-primary-foreground bg-primary-foreground text-primary hover:bg-white hover:text-primary transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] active:translate-y-[0px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
          <Download className="mr-2 h-5 w-5" />
          Download Full Report
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white rounded-none">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-display uppercase">Get the Full Report</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Please complete the form below to download the comprehensive IT/AI in a Box viability analysis.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstName" className="font-bold">First Name *</Label>
              <Input
                id="firstName"
                required
                className="rounded-none border-2 border-input focus-visible:ring-0 focus-visible:border-primary"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName" className="font-bold">Last Name *</Label>
              <Input
                id="lastName"
                required
                className="rounded-none border-2 border-input focus-visible:ring-0 focus-visible:border-primary"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="font-bold">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              className="rounded-none border-2 border-input focus-visible:ring-0 focus-visible:border-primary"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cellPhone" className="font-bold">Cell Phone *</Label>
            <Input
              id="cellPhone"
              type="tel"
              required
              className="rounded-none border-2 border-input focus-visible:ring-0 focus-visible:border-primary"
              value={formData.cellPhone}
              onChange={(e) => setFormData({ ...formData, cellPhone: e.target.value })}
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full text-lg font-bold uppercase py-6 rounded-none border-2 border-primary shadow-[4px_4px_0px_0px_var(--color-primary)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] active:translate-y-[0px] active:shadow-[2px_2px_0px_0px_var(--color-primary)] transition-all">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Download Now"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
