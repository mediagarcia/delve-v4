import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Smartphone,
  Watch,
  Users,
  FileCheck,
  BarChart3,
  Package,
  Activity,
  Building2,
  FileText,
  BookOpen,
  Rss,
  Info,
  Briefcase,
  Mail,
  Pill,
  Cpu,
  FlaskConical,
  Building
} from "lucide-react";
import { cn } from "@/lib/utils";
import logoMain from "@/assets/DH_DkBlue.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const solutions = [
    {
      title: "eCOA & ePRO",
      href: "/solutions/ecoa",
      description: "Unified digital assessments with human support",
      icon: Smartphone,
    },
    {
      title: "Wearables & Digital Endpoints",
      href: "/solutions/wearables",
      description: "Validated digital measures from sensors",
      icon: Watch,
    },
    {
      title: "Concierge-as-a-Service™",
      href: "/solutions/concierge",
      description: "Human patient support in 120+ languages",
      icon: Users,
    },
    {
      title: "eConsent",
      href: "/solutions/econsent",
      description: "Digital informed consent solutions",
      icon: FileCheck,
    },
    {
      title: "Real-Time Analytics Dashboard",
      href: "/solutions/analytics",
      description: "Live study visibility and insights",
      icon: BarChart3,
    },
    {
      title: "Device Provisioning & Logistics",
      href: "/solutions/provisioning",
      description: "End-to-end device management",
      icon: Package,
    },
    {
      title: "Digital Biomarkers",
      href: "/solutions/biomarkers",
      description: "FDA-aligned objective endpoints",
      icon: Activity,
    },
    {
      title: "Site Enablement",
      href: "/industries/sites",
      description: "Reduce site burden, improve workflows",
      icon: Building2,
    },
  ];

  

  const industries = [
    {
      title: "Pharmaceutical",
      href: "/industries/pharma",
      description: "Global drug trial solutions",
      icon: Pill,
    },
    {
      title: "MedTech",
      href: "/industries/medtech",
      description: "Device-driven research support",
      icon: Cpu,
    },
    {
      title: "Biotech",
      href: "/industries/biotech",
      description: "Fast, fit-for-purpose trials",
      icon: FlaskConical,
    },
    {
      title: "Research Sites",
      href: "/industries/sites",
      description: "Site workflows and support",
      icon: Building,
    },
  ];  const resources = [
    {
      title: "Case Studies",
      href: "/resources/case-studies",
      description: "Success stories from partners",
      icon: BookOpen,
    },
    {
      title: "White Papers",
      href: "/resources/white-papers",
      description: "Research and insights",
      icon: FileText,
    },
    {
      title: "Blog",
      href: "/resources/blog",
      description: "Latest industry news",
      icon: Rss,
    },
  ];

    const company = [
    {
      title: "About Us",
      href: "/about",
      description: "Our mission and values",
      icon: Info,
    },
    {
      title: "Careers",
      href: "/careers",
      description: "Join our team",
      icon: Briefcase,
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Get in touch",
      icon: Mail,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logoMain} alt="Delve Health" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 relative">
            <div className="flex items-center space-x-1">
              {/* Solutions Menu Item */}
              <div
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                  Solutions
                  <ChevronDown size={16} className={cn("transition-transform", activeDropdown === "solutions" && "rotate-180")} />
                </button>
              </div>

              {/* Industries Menu Item */}
              <div
                onMouseEnter={() => setActiveDropdown("industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                  Industries
                  <ChevronDown size={16} className={cn("transition-transform", activeDropdown === "industries" && "rotate-180")} />
                </button>
              </div>


              {/* Resources Menu Item */}
              <div
                onMouseEnter={() => setActiveDropdown("resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                  Resources
                  <ChevronDown size={16} className={cn("transition-transform", activeDropdown === "resources" && "rotate-180")} />
                </button>
              </div>

              {/* Company Menu Item */}
              <div
                onMouseEnter={() => setActiveDropdown("company")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                  Company
                  <ChevronDown size={16} className={cn("transition-transform", activeDropdown === "company" && "rotate-180")} />
                </button>
              </div>
            </div>

            {/* Single Static Mega Menu Dropdown */}
            {activeDropdown && (
              <div 
                className="absolute left-1/2 -translate-x-1/2 top-full pt-2"
                style={{ width: 'min(1200px, 90vw)' }}
                onMouseEnter={() => setActiveDropdown(activeDropdown)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-2xl p-8">
                    {/* Solutions Content */}
                    {activeDropdown === "solutions" && (
                      <>
                        <div className="grid grid-cols-4 gap-4">
                          {solutions.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <item.icon className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">
                                  {item.title}
                                </div>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </>
                    )}

                    

                    {/* Industries Content */}
                    {activeDropdown === "industries" && (
                      <div className="grid grid-cols-2 gap-6">
                        {industries.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                                {item.title}
                              </div>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}


                    {/* Resources Content */}
                    {activeDropdown === "resources" && (
                      <div className="grid grid-cols-2 gap-6">
                        {resources.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                              <item.icon className="w-5 h-5 text-secondary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-base font-semibold mb-1 group-hover:text-secondary transition-colors">
                                {item.title}
                              </div>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Company Content */}
                    {activeDropdown === "company" && (
                      <div className="grid grid-cols-2 gap-6">
                        {company.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                              <item.icon className="w-5 h-5 text-accent" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-base font-semibold mb-1 group-hover:text-accent transition-colors">
                                {item.title}
                              </div>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="ghost" size="default">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button asChild variant="hero" size="default">
              <Link to="/demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-border max-h-[80vh] overflow-y-auto">
            <div className="space-y-2">
              <div className="font-semibold px-4 text-sm text-muted-foreground uppercase tracking-wide">Solutions</div>
              {solutions.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 hover:bg-muted rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </Link>
              ))}
            </div>

            <div className="space-y-2 pt-4 border-t border-border">
              <div className="font-semibold px-4 text-sm text-muted-foreground uppercase tracking-wide">Industries</div>
              {industries.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 hover:bg-muted rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </Link>
              ))}
            </div>


            <div className="space-y-2 pt-4 border-t border-border">
              <div className="font-semibold px-4 text-sm text-muted-foreground uppercase tracking-wide">Resources</div>
              {resources.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 hover:bg-muted rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </Link>
              ))}
            </div>

            <div className="space-y-2 pt-4 border-t border-border">
              <div className="font-semibold px-4 text-sm text-muted-foreground uppercase tracking-wide">Company</div>
              {company.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 hover:bg-muted rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </Link>
              ))}
            </div>

            <div className="px-4 pt-4 space-y-3 border-t border-border">
              <Button asChild className="w-full" variant="outline">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </Button>
              <Button asChild className="w-full" variant="hero">
                <Link to="/demo" onClick={() => setMobileMenuOpen(false)}>
                  Book a Demo
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
