import { DownloadForm } from "@/components/DownloadForm";
import { ImpactCalculator } from "@/components/ImpactCalculator";
import { ImpactMap } from "@/components/ImpactMap";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import { BackToTop } from "@/components/BackToTop";
import { ArrowRight, Check, Shield, Scale, Database, Users, BarChart3, Lock, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Secure Justice AI",
          "alternateName": "IT/AI in a Box",
          "url": "https://it-ai-in-a-box.org",
          "logo": "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/rcdAWwGDnHCeJcAq.png",
          "description": "The first integrated technology platform designed specifically for non-profit legal aid organizations, combining AI strategy, cybersecurity, and IT infrastructure.",
          "founder": {
            "@type": "Person",
            "name": "Richard Schreiber",
            "jobTitle": "Consortium Lead",
            "email": "richard@lawfirmaiexpert.com",
            "telephone": "917-388-9452"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "917-388-9452",
            "contactType": "customer service",
            "email": "richard@lawfirmaiexpert.com"
          },
          "sameAs": [
            "https://lawfirmaiexpert.com",
            "https://cognifysolutions.ai",
            "https://prevent-ransomware.com"
          ]
        })}
      </script>
      <AnnouncementBar />
      {/* Navigation */}
      <header className="border-b-2 border-border sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/HaYQhrNVkgUBaunE.png" alt="Secure Justice AI" className="h-24 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-8 font-mono text-sm font-medium">
            <a href="#problem" className="hover:text-primary transition-colors">THE GAP</a>
            <a href="#solution" className="hover:text-primary transition-colors">THE BOX</a>
            <a href="#impact" className="hover:text-primary transition-colors">IMPACT</a>
            <a href="#consortium" className="hover:text-primary transition-colors">PARTNERS</a>
            <a href="/resources" className="hover:text-primary transition-colors">RESOURCES</a>
          </nav>
          <a href="#contact" className="btn-brutal text-sm px-4 py-2 h-auto hidden md:inline-flex">
            GET ACCESS
          </a>
          <MobileNav />
        </div>
      </header>

      <BackToTop />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative border-b border-border overflow-hidden bg-gradient-to-b from-background to-secondary/30">
          <div className="container grid lg:grid-cols-2 gap-12 py-24 lg:py-32 items-center">
            <div className="space-y-8">
              <div className="inline-block border border-border bg-accent px-4 py-1 font-mono text-sm font-bold text-accent-foreground shadow-sm">
                FOR NONPROFIT LEGAL SERVICES
              </div>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tighter">
                CLOSE THE <br/>
                <span className="text-primary">JUSTICE GAP</span> <br/>
                WITH AI.
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg font-medium leading-relaxed">
                The first fully integrated, turnkey technology platform combining AI strategy, solutions, governance, and cybersecurity. Built to scale legal aid.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#solution" className="btn-brutal text-lg">
                  EXPLORE THE SOLUTION
                </a>
                <a href="#impact" className="btn-brutal-outline text-lg">
                  VIEW IMPACT DATA
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="border border-border bg-card p-2 shadow-md">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/kFKTjwNuQImnaOCF.png" 
                  alt="Justice Technology Infrastructure" 
                  className="w-full h-auto border border-border shadow-lg rounded-lg"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary border border-border shadow-sm -z-10"></div>
              <div className="absolute -top-6 -left-6 w-full h-full border border-border border-dashed opacity-50 -z-20"></div>
            </div>
          </div>
        </section>

        {/* The Problem / Justice Gap */}
        <section id="problem" className="py-24 bg-secondary/50 border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-4xl font-bold">THE CRISIS IS REAL.</h2>
                <p className="text-lg text-muted-foreground">
                  92% of civil legal problems faced by low-income Americans receive inadequate or no legal help. The system is overwhelmed.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="box-card bg-background">
                    <div className="font-mono text-sm text-muted-foreground mb-1">UNMET DEMAND</div>
                    <div className="text-5xl font-bold text-destructive">92%</div>
                    <div className="text-sm mt-2 font-medium">of civil legal needs go unmet</div>
                  </div>
                  <div className="box-card bg-background">
                    <div className="font-mono text-sm text-muted-foreground mb-1">AI ADOPTION</div>
                    <div className="text-5xl font-bold text-primary">74%</div>
                    <div className="text-sm mt-2 font-medium">of LSOs are already using AI</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="border border-border bg-background p-8 shadow-md h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">THE FRAGMENTATION PROBLEM</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="h-12 w-12 bg-muted border border-border flex items-center justify-center mb-4">
                        <Zap className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold">Disconnected Tools</h4>
                      <p className="text-sm text-muted-foreground">LSOs are forced to cobble together disparate point solutions for case management, research, and intake.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 w-12 bg-muted border border-border flex items-center justify-center mb-4">
                        <Lock className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold">Security Risks</h4>
                      <p className="text-sm text-muted-foreground">Patchwork infrastructure leaves sensitive client data vulnerable to ransomware and breaches.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 w-12 bg-muted border border-border flex items-center justify-center mb-4">
                        <Scale className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold">Governance Gaps</h4>
                      <p className="text-sm text-muted-foreground">Rapid AI adoption without proper frameworks creates ethical and liability risks.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 w-12 bg-muted border border-border flex items-center justify-center mb-4">
                        <Users className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold">Resource Drain</h4>
                      <p className="text-sm text-muted-foreground">Valuable attorney time is lost to IT management and administrative tasks instead of advocacy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section id="solution" className="py-24 border-b-2 border-border">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block border border-border px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">The Solution</div>
              <h2 className="text-4xl md:text-5xl font-bold">SECURE JUSTICE AI</h2>
              <p className="text-xl text-muted-foreground">
                A comprehensive, turnkey ecosystem designed specifically for the needs of legal aid organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Component 1 */}
              <div className="box-card group">
                <div className="mb-6 border-b-2 border-border pb-4">
                  <div className="font-mono text-primary font-bold mb-2">01. SOLUTIONS</div>
                  <h3 className="text-2xl font-bold">AI Strategy, Validation & Solutions</h3>
                </div>
                <ul className="space-y-3 font-medium">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>Advanced legal research automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>TrialLift citation validation technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>AI automation and agentic solutions</span>
                  </li>
                </ul>
              </div>

              {/* Component 2 */}
              <div className="box-card group bg-primary text-primary-foreground">
                <div className="mb-6 border-b-2 border-primary-foreground/20 pb-4">
                  <div className="font-mono text-primary-foreground/80 font-bold mb-2">02. GOVERNANCE</div>
                  <h3 className="text-2xl font-bold">Strategy & Ethics</h3>
                </div>
                <ul className="space-y-3 font-medium">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary-foreground shrink-0" />
                    <span>Responsible AI frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary-foreground shrink-0" />
                    <span>Change management & training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary-foreground shrink-0" />
                    <span>Ethical compliance monitoring</span>
                  </li>
                </ul>
              </div>

              {/* Component 3 */}
              <div className="box-card group">
                <div className="mb-6 border-b-2 border-border pb-4">
                  <div className="font-mono text-primary font-bold mb-2">03. SECURITY</div>
                  <h3 className="text-2xl font-bold">Infrastructure & Cyber</h3>
                </div>
                <ul className="space-y-3 font-medium">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>Ransomware protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>Secure cloud infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>24/7 threat monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Metrics */}
        <section id="impact" className="py-24 bg-secondary border-b-2 border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">MEASURABLE IMPACT.</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="h-16 w-16 bg-primary border border-border flex items-center justify-center shrink-0 shadow-sm">
                      <BarChart3 className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">50% Capacity Expansion</h3>
                      <p className="text-muted-foreground mt-2">
                        By automating intake and research, we enable organizations to serve significantly more clients with existing staff.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="h-16 w-16 bg-background border border-border flex items-center justify-center shrink-0 shadow-sm">
                      <Zap className="h-8 w-8 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">300+ Hours Saved</h3>
                      <p className="text-muted-foreground mt-2">
                        Per attorney, per year. Redirecting time from administrative burdens to direct client advocacy.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="h-16 w-16 bg-background border border-border flex items-center justify-center shrink-0 shadow-sm">
                      <Shield className="h-8 w-8 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">100% Accuracy</h3>
                      <p className="text-muted-foreground mt-2">
                        Zero tolerance for AI hallucinations in legal drafts through rigorous citation validation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="border border-border bg-card p-2 shadow-lg">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/uTOCojzXnfJfELmV.png" 
                    alt="Impact Growth Chart" 
                    className="w-full h-auto border border-border"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-16 grid lg:grid-cols-2 gap-8">
              <ImpactCalculator />
              <ImpactMap />
            </div>
          </div>
        </section>

        {/* Consortium / Partners */}
        <section id="consortium" className="py-24 border-b-2 border-border">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">THE CONSORTIUM</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Three specialized partners. One unified vision.
              </p>
            </div>

            <div className="relative mb-16">
              <div className="border border-border bg-card p-2 shadow-md max-w-4xl mx-auto">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/paCXbzSZsDUCBJCh.png" 
                  alt="Consortium Network Diagram" 
                  className="w-full h-auto border border-border"
                />
              </div>
            </div>

            {/* Joint Mission Statement */}
            <div className="mb-20 grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="border-l-4 border-primary pl-8 py-2">
                <h3 className="text-3xl font-bold font-display mb-4 uppercase">The Triad of Trust</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Solving the justice gap requires more than just software. It demands a holistic ecosystem where <strong>innovation</strong> meets <strong>security</strong> and <strong>strategy</strong>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We joined forces because no single entity can solve this crisis alone. By unifying our specialized capabilities, we deliver the first solution that is powerful enough to scale, yet secure enough to trust.
                </p>
              </div>
              <div className="bg-secondary p-8 border border-border shadow-md">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-1 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-lg font-bold uppercase">Validated Intelligence</strong>
                      <span className="text-muted-foreground">AI models trained on verified legal data, not generic internet scrapes.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-1 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-lg font-bold uppercase">Strategic Governance</strong>
                      <span className="text-muted-foreground">Frameworks that ensure ethical use, compliance, and long-term sustainability.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-1 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-lg font-bold uppercase">Fortified Defense</strong>
                      <span className="text-muted-foreground">Enterprise-grade cybersecurity protecting sensitive client data from day one.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Richard Schreiber */}
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col h-full text-left">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/nIgSraGZtHrAcRDl.png" 
                    alt="Richard Schreiber" 
                    className="h-20 w-20 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h3 className="text-xl font-bold leading-tight">Law Firm AI Expert</h3>
                    <a href="https://lawfirmaiexpert.com" target="_blank" rel="noopener noreferrer" className="text-primary font-medium text-sm hover:underline">lawfirmaiexpert.com</a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 flex-grow">
                  With over 25 years of experience, Richard consults on AI implementation to improve workflows for law firms, helping lawyers move from burnout to leading with clarity.
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-bold text-foreground">Richard Schreiber</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Founder, TrialLift.com</p>
                </div>
              </div>

              {/* Chris R. Feamster */}
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col h-full text-left">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/MmOCaNiFDVXIybgF.jpg" 
                    alt="Chris R. Feamster" 
                    className="h-20 w-20 rounded-full object-cover border-2 border-secondary/20"
                  />
                  <div>
                    <h3 className="text-xl font-bold leading-tight">Cognify Solutions AI</h3>
                    <a href="https://cognifysolutions.ai" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium text-sm hover:underline">cognifysolutions.ai</a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 flex-grow">
                  A technology entrepreneur with over 20 years of experience, Chris focuses on systems integration and pioneering ethical, auditable AI governance aligned with international standards.
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-bold text-foreground">Chris R. Feamster</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">CEO, Nexus Systems Inc.</p>
                </div>
              </div>

              {/* Tony Chiappetta */}
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col h-full text-left">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/HjgqoRBHnKXpRffZ.jpeg" 
                    alt="Tony Chiappetta" 
                    className="h-20 w-20 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h3 className="text-xl font-bold leading-tight">Prevent Ransomware</h3>
                    <a href="https://prevent-ransomware.com" target="_blank" rel="noopener noreferrer" className="text-primary font-medium text-sm hover:underline">prevent-ransomware.com</a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Specializing in Zero Trust cybersecurity, Tony leverages his unique law enforcement background to deliver advanced defense solutions that enhance profitability and efficiency.
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-bold text-foreground">Tony Chiappetta</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">President, CHIPS Cyber Defense</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="contact" className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tighter">
              READY TO TRANSFORM <br/> LEGAL AID?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 font-medium">
              Join the pilot program. Secure funding. Scale your impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
              <ContactForm />
              <DownloadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t-2 border-border bg-background">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/CaQwFveWPJStmzyy.png" alt="Secure Justice AI" className="h-8 w-auto" />
          </div>
          <div className="text-sm text-muted-foreground font-mono">
            © 2026 Secure Justice AI Consortium. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
