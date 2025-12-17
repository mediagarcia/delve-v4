import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import logoMain from "@/assets/DH_DkBlue.png";
import linkedinIcon from "@/assets/linkedin-icon.png";
import twitterIcon from "@/assets/twitter-icon.png";
import fbIcon from "@/assets/fb-icon.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <img src={logoMain} alt="Delve Health" className="h-20 w-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-2 font-semibold">
              Automation with Empathy.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Transforming clinical research through human-centered technology.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src={twitterIcon} alt="Twitter" className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src={fbIcon} alt="Facebook" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions/ecoa" className="text-muted-foreground hover:text-foreground transition-colors">
                  eCOA & ePRO
                </Link>
              </li>
              <li>
                <Link to="/solutions/wearables" className="text-muted-foreground hover:text-foreground transition-colors">
                  Wearables
                </Link>
              </li>
              <li>
                <Link to="/solutions/concierge" className="text-muted-foreground hover:text-foreground transition-colors">
                  Concierge-as-a-Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/industries/pharma" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pharma
                </Link>
              </li>
              <li>
                <Link to="/industries/medtech" className="text-muted-foreground hover:text-foreground transition-colors">
                  MedTech
                </Link>
              </li>
              <li>
                <Link to="/industries/biotech" className="text-muted-foreground hover:text-foreground transition-colors">
                  Biotech
                </Link>
              </li>
              <li>
                <Link to="/industries/sites" className="text-muted-foreground hover:text-foreground transition-colors">
                  Research Sites
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/resources/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources/white-papers" className="text-muted-foreground hover:text-foreground transition-colors">
                  White Papers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-muted-foreground hover:text-foreground transition-colors">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 Delve Health. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
