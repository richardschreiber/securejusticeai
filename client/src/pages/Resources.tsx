import { FileText, Download, ArrowRight, BookOpen, Shield, Users, Scale } from "lucide-react";
import { AnnouncementBar } from "@/components/AnnouncementBar";

export default function Resources() {
  const resources = [
    {
      title: "IT/AI in a Box: The First Integrated Technology Platform for Legal Aid",
      description: "A comprehensive report on the viability and impact of a fully end-to-end IT and AI solution for non-profit legal services.",
      type: "White Paper",
      size: "10.1 MB",
      url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/zCYfpJmOJPBZzfCW.pdf",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      featured: true
    },
    {
      title: "Legal Tech Experts Research: Executive Summary",
      description: "Key findings and strategic insights from our deep research into the legal technology landscape and expert opinions.",
      type: "Executive Summary",
      size: "7 KB",
      url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/LdvYazbvFaVwdApV.md",
      icon: <FileText className="h-6 w-6 text-secondary" />,
      featured: false
    },
    {
      title: "Deep Research Dossier: Bob Ambrogi",
      description: "In-depth analysis of Bob Ambrogi's contributions to legal tech, focusing on AI adoption and regulatory changes.",
      type: "Research Dossier",
      size: "242 KB",
      url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/WPmNboTorEXtmQpa.pdf",
      icon: <Users className="h-6 w-6 text-muted-foreground" />,
      featured: false
    },
    {
      title: "Deep Research Dossier: Kristen Sonday",
      description: "Profile on Kristen Sonday (Paladin), highlighting her work in access to justice and legal tech innovation.",
      type: "Research Dossier",
      size: "223 KB",
      url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/SaYKZDyRVgtsUkhY.pdf",
      icon: <Users className="h-6 w-6 text-muted-foreground" />,
      featured: false
    },
    {
      title: "Comprehensive Research Dossier: Adriene Holder",
      description: "Detailed research on Adriene Holder's impact at The Legal Aid Society and her perspective on technology in legal services.",
      type: "Research Dossier",
      size: "13 KB",
      url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/YnaldntTJUMayPzg.md",
      icon: <Scale className="h-6 w-6 text-muted-foreground" />,
      featured: false
    },
    {
      title: "Deep Research Dossier: Angela Tripp",
      description: "Insights into Angela Tripp's leadership in Michigan Legal Help and her advocacy for user-centered legal tech.",
      type: "Research Dossier",
      size: "15 KB",
      url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/YmtcNCTvvGRCGdsL.md",
      icon: <Scale className="h-6 w-6 text-muted-foreground" />,
      featured: false
    },
    {
      title: "Deep Research Dossier: Joanne Sprague",
      description: "Examination of Joanne Sprague's work with the Utah State Bar and her initiatives in regulatory sandbox testing.",
      type: "Research Dossier",
      size: "18 KB",
      url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/VoXjChRYIdMYetTN.md",
      icon: <Scale className="h-6 w-6 text-muted-foreground" />,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <AnnouncementBar />
      
      {/* Navigation */}
      <header className="border-b-2 border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663026744496/rcdAWwGDnHCeJcAq.png" alt="Secure Justice AI" className="h-32 w-auto" />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-mono text-sm font-medium">
            <a href="/#problem" className="hover:text-primary transition-colors">THE GAP</a>
            <a href="/#solution" className="hover:text-primary transition-colors">THE BOX</a>
            <a href="/#impact" className="hover:text-primary transition-colors">IMPACT</a>
            <a href="/#consortium" className="hover:text-primary transition-colors">PARTNERS</a>
            <a href="/resources" className="text-primary font-bold transition-colors">RESOURCES</a>
          </nav>
          <a href="/#contact" className="btn-brutal text-sm px-4 py-2 h-auto">
            GET ACCESS
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative border-b border-border overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20">
          <div className="container">
            <div className="max-w-3xl">
              <div className="inline-block border border-border bg-accent px-4 py-1 font-mono text-sm font-bold text-accent-foreground shadow-sm mb-6">
                KNOWLEDGE HUB
              </div>
              <h1 className="font-display text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tighter mb-6">
                RESEARCH & <br/>
                <span className="text-primary">INSIGHTS</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Access our library of white papers, research dossiers, and strategic analysis on the intersection of AI, cybersecurity, and legal aid.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-8">
              {/* Featured Resource */}
              {resources.filter(r => r.featured).map((resource, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-8 shadow-lg hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="h-24 w-24 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      {resource.icon}
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Featured</span>
                        <span className="text-sm text-muted-foreground font-mono">{resource.type} • {resource.size}</span>
                      </div>
                      <h2 className="text-3xl font-bold group-hover:text-primary transition-colors">{resource.title}</h2>
                      <p className="text-lg text-muted-foreground">{resource.description}</p>
                      <div className="pt-4">
                        <a 
                          href={resource.url} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 btn-brutal text-sm px-6 py-3"
                        >
                          <Download className="h-4 w-4" />
                          Download Report
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Other Resources */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {resources.filter(r => !r.featured).map((resource, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col h-full group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center">
                        {resource.icon}
                      </div>
                      <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">{resource.type}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow">{resource.description}</p>
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-mono">{resource.size}</span>
                      <a 
                        href={resource.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-bold text-sm flex items-center gap-1 hover:underline"
                      >
                        Download <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary border-t border-border">
          <div className="container text-center max-w-2xl mx-auto">
            <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Join our mailing list to receive the latest research, security alerts, and updates on the Secure Justice AI pilot program.
            </p>
            <a href="/#contact" className="btn-brutal text-lg px-8">
              Subscribe for Updates
            </a>
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
