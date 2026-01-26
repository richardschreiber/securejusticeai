import { DownloadForm } from "@/components/DownloadForm";
import { ImpactCalculator } from "@/components/ImpactCalculator";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Scale, Database, Users, BarChart3, Lock, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <AnnouncementBar />
      {/* Navigation */}
      <header className="border-b-2 border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary border-2 border-border"></div>
            <span className="font-display text-xl font-bold tracking-tighter">IT/AI IN A BOX</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-mono text-sm font-medium">
            <a href="#problem" className="hover:text-primary transition-colors">THE GAP</a>
            <a href="#solution" className="hover:text-primary transition-colors">THE BOX</a>
            <a href="#impact" className="hover:text-primary transition-colors">IMPACT</a>
            <a href="#consortium" className="hover:text-primary transition-colors">PARTNERS</a>
          </nav>
          <a href="#contact" className="btn-brutal text-sm px-4 py-2 h-auto">
            GET ACCESS
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative border-b-2 border-border overflow-hidden">
          <div className="container grid lg:grid-cols-2 gap-12 py-24 lg:py-32 items-center">
            <div className="space-y-8">
              <div className="inline-block border-2 border-border bg-accent px-4 py-1 font-mono text-sm font-bold text-accent-foreground shadow-[4px_4px_0px_0px_var(--color-border)]">
                FOR NONPROFIT LEGAL SERVICES
              </div>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tighter">
                CLOSE THE <br/>
                <span className="text-primary">JUSTICE GAP</span> <br/>
                WITH AI.
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg font-medium leading-relaxed">
                The first fully integrated, turnkey technology platform combining AI research, governance, and cybersecurity. Built to scale legal aid.
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
              <div className="border-2 border-border bg-card p-2 shadow-[8px_8px_0px_0px_var(--color-border)]">
                <img 
                  src="/images/hero-justice-tech.png" 
                  alt="Justice Technology Infrastructure" 
                  className="w-full h-auto border border-border grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary border-2 border-border shadow-[4px_4px_0px_0px_var(--color-border)] -z-10"></div>
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-border border-dashed -z-20"></div>
            </div>
          </div>
        </section>

        {/* The Problem / Justice Gap */}
        <section id="problem" className="py-24 bg-secondary border-b-2 border-border">
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
                <div className="border-2 border-border bg-background p-8 shadow-[8px_8px_0px_0px_var(--color-border)] h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">THE FRAGMENTATION PROBLEM</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="h-12 w-12 bg-muted border-2 border-border flex items-center justify-center mb-4">
                        <Zap className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold">Disconnected Tools</h4>
                      <p className="text-sm text-muted-foreground">LSOs are forced to cobble together disparate point solutions for case management, research, and intake.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 w-12 bg-muted border-2 border-border flex items-center justify-center mb-4">
                        <Lock className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold">Security Risks</h4>
                      <p className="text-sm text-muted-foreground">Patchwork infrastructure leaves sensitive client data vulnerable to ransomware and breaches.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 w-12 bg-muted border-2 border-border flex items-center justify-center mb-4">
                        <Scale className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold">Governance Gaps</h4>
                      <p className="text-sm text-muted-foreground">Rapid AI adoption without proper frameworks creates ethical and liability risks.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 w-12 bg-muted border-2 border-border flex items-center justify-center mb-4">
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
              <h2 className="text-4xl md:text-5xl font-bold">IT/AI IN A BOX</h2>
              <p className="text-xl text-muted-foreground">
                A comprehensive, turnkey ecosystem designed specifically for the needs of legal aid organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Component 1 */}
              <div className="box-card group">
                <div className="mb-6 border-b-2 border-border pb-4">
                  <div className="font-mono text-primary font-bold mb-2">01. INTELLIGENCE</div>
                  <h3 className="text-2xl font-bold">AI Research & Validation</h3>
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
                    <span>Zero-hallucination drafting tools</span>
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
                    <div className="h-16 w-16 bg-primary border-2 border-border flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_var(--color-border)]">
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
                    <div className="h-16 w-16 bg-background border-2 border-border flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_var(--color-border)]">
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
                    <div className="h-16 w-16 bg-background border-2 border-border flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_var(--color-border)]">
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
                <div className="border-2 border-border bg-card p-2 shadow-[12px_12px_0px_0px_var(--color-border)]">
                  <img 
                    src="/images/impact-growth.png" 
                    alt="Impact Growth Chart" 
                    className="w-full h-auto border border-border"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <ImpactCalculator />
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
              <div className="border-2 border-border bg-card p-2 shadow-[8px_8px_0px_0px_var(--color-border)] max-w-4xl mx-auto">
                <img 
                  src="/images/consortium-network.png" 
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
              <div className="bg-secondary p-8 border-2 border-border shadow-[8px_8px_0px_0px_var(--color-border)]">
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

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <a 
                href="https://lawfirmaiexpert.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 border-2 border-border bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors group flex flex-col items-center"
              >
                <div className="h-24 w-full mb-4 flex items-center justify-center px-4">
                  <img 
                    src="/images/logo-lawfirmaiexpert-official.png" 
                    alt="LawFirmAIExpert Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:underline decoration-2 underline-offset-4">lawfirmaiexpert.com</h4>
                <p className="text-sm text-muted-foreground group-hover:text-accent-foreground/80">AI Research & Validation</p>
              </a>
              <a 
                href="https://cognifysolutions.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 border-2 border-border bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors group flex flex-col items-center"
              >
                <div className="h-24 w-24 mb-4 flex items-center justify-center">
                  <img 
                    src="/images/logo-cognifysolutions.png" 
                    alt="Cognify Solutions Logo" 
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:underline decoration-2 underline-offset-4">cognifysolutions.ai</h4>
                <p className="text-sm text-muted-foreground group-hover:text-accent-foreground/80">Governance & Strategy</p>
              </a>
              <a 
                href="https://prevent-ransomware.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 border-2 border-border bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors group flex flex-col items-center"
              >
                <div className="h-24 w-full mb-4 flex items-center justify-center px-4">
                  <img 
                    src="/images/logo-prevent-ransomware-official.png" 
                    alt="Prevent Ransomware Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:underline decoration-2 underline-offset-4">prevent-ransomware.com</h4>
                <p className="text-sm text-muted-foreground group-hover:text-accent-foreground/80">Cybersecurity & IT</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tighter">
              READY TO TRANSFORM <br/> LEGAL AID?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 font-medium">
              Join the pilot program. Secure funding. Scale your impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
              <button className="btn-brutal-outline bg-white text-primary border-white hover:bg-white/90 hover:text-primary hover:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] h-14 px-8">
                CONTACT THE CONSORTIUM
              </button>
              <DownloadForm />
            </div>
          </div>
        </section>
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
