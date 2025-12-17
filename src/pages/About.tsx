// About page - Updated Dec 2025
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Heart, TrendingUp, Award, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team-collaboration.jpg";
import womanDoctor from "@/assets/woman-doctor-monochhrome.jpg";
import minnesotaIcon from "@/assets/minnesota-icon.png";
import knowledgeIcon from "@/assets/knowledge-icon.png";
import keyIcon from "@/assets/key-icon.png";
import cuttingEdgeIcon from "@/assets/cutting-edge-icon.png";
import alwaysCompliantIcon from "@/assets/always-complains.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Heart className="text-primary mx-auto animate-pulse mb-4" size={48} />
              <h1 className="text-4xl md:text-6xl font-bold">
                Behind every dataset is a life we're helping change
              </h1>
              <p className="text-xl text-muted-foreground">
                We believe every trial should be built for people first — powered by empathy, driven by evidence, and made possible by connection.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img src={womanDoctor} alt="Healthcare professional" className="rounded-lg shadow-xl" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  Delve Health began with one patient — and now powers thousands worldwide. We were founded on the belief that clinical research forgot how to listen. So we built the translator.
                </p>
                <p className="text-lg text-muted-foreground">
                  We unite validated wearables, multilingual eCOA, and real-human concierge engagement to transform raw signals into regulator-ready insight. Because technology connects data, but empathy connects people.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our hybrid engine pairs AI automation with live concierge outreach — keeping retention high, compliance strong, and endpoints clean across 50+ global studies in 120 languages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story / Thought Leadership Video Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <p className="text-primary font-semibold mb-2">Our Origin Story</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  "It wasn't the study that failed my mother — it was a broken process."
                </h2>
              </div>

              {/* Video and Story Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Video Placeholder - Replace with YouTube/Vimeo embed when available */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-gradient-to-br from-primary/20 to-accent/20 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="text-primary ml-1" size={40} />
                    </div>
                    <p className="text-muted-foreground font-medium">Wessam Sonbol at Whale Tank</p>
                    <p className="text-sm text-muted-foreground">Video coming soon</p>
                  </div>
                </div>

                {/* Story Content */}
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    When Wessam Sonbol's mother was diagnosed with cancer, a clinical trial was her only hope. But she struggled to stay enrolled — too many drives, too much paperwork, nobody to speak to when she needed help.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    The doctor suggested another study. They made the call. A few weeks later, they got a call back. <span className="text-foreground font-medium">It was one day too late.</span>
                  </p>
                  <p className="text-lg text-muted-foreground">
                    That day, Wessam made a promise: to go on a mission to help patients become part of clinical trials — because they need it, and because no one should get that call too late.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">
                      Watch Wessam share this story at Whale Tank — and learn how Delve Health is building a human-centered solution that keeps patients supported, engaged, and in their studies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Stats from the Talk */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-background rounded-xl border border-border">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">92%</div>
                  <div className="text-sm text-muted-foreground">Patient Compliance</div>
                </div>
                <div className="text-center p-6 bg-background rounded-xl border border-border">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">87%</div>
                  <div className="text-sm text-muted-foreground">Patient Retention</div>
                </div>
                <div className="text-center p-6 bg-background rounded-xl border border-border">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">60+</div>
                  <div className="text-sm text-muted-foreground">Studies Supported</div>
                </div>
                <div className="text-center p-6 bg-background rounded-xl border border-border">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1,200</div>
                  <div className="text-sm text-muted-foreground">Patients Helped Daily</div>
                </div>
              </div>

              {/* Key Message */}
              <div className="mt-12 text-center">
                <p className="text-xl md:text-2xl font-medium text-foreground max-w-3xl mx-auto">
                  "When patients feel supported, they stay in the study. And when they stay in the study, your study succeeds."
                </p>
                <p className="text-muted-foreground mt-2">— Wessam Sonbol, Founder & CEO</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Delve Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Delve Health</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                20+ years of clinical research expertise, global reach, and unwavering commitment to quality
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* From Minnesota to the World */}
              <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <img src={minnesotaIcon} alt="Minnesota" className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">From Minnesota to the World</h3>
                  <p className="text-muted-foreground text-center">
                    Based in Minneapolis, we have spent over 20 years helping clients improve clinical research outcomes through studies in North America, Europe, Asia and the Middle East/North Africa.
                  </p>
                </CardContent>
              </Card>

              {/* Not Our First Rodeo */}
              <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="text-accent" size={40} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Not Our First Rodeo</h3>
                  <p className="text-muted-foreground text-center">
                    We have supported many studies and registries across multiple therapeutic areas including oncology, cardiovascular, endocrinology, motion disorder, diabetes, dermatology and pediatric disorders.
                  </p>
                </CardContent>
              </Card>

              {/* Wide Industry Knowledge */}
              <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <img src={knowledgeIcon} alt="Knowledge" className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Wide Industry Knowledge</h3>
                  <p className="text-muted-foreground text-center">
                    Our clients have included medical device, pharmaceutical and biotech manufacturers, CROs, as well as specific therapeutic area organizations.
                  </p>
                </CardContent>
              </Card>

              {/* A Flexible Fit */}
              <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <img src={keyIcon} alt="Flexible" className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">A Flexible Fit</h3>
                  <p className="text-muted-foreground text-center">
                    We would never try to squeeze your trial into a pre-boxed solution. Our agile team of analysts, programmers and clinical operators work closely with you to address all of your studies' needs.
                  </p>
                </CardContent>
              </Card>

              {/* Living on the Cutting Edge */}
              <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <img src={cuttingEdgeIcon} alt="Cutting Edge" className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Living on the Cutting Edge</h3>
                  <p className="text-muted-foreground text-center">
                    In addition to our proprietary platform, our founding team has designed numerous applications on the strength of their technological know-how and deep understanding of life sciences.
                  </p>
                </CardContent>
              </Card>

              {/* Always Compliant */}
              <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <img src={alwaysCompliantIcon} alt="Compliant" className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Always Compliant</h3>
                  <p className="text-muted-foreground text-center">
                    We work closely with clients and take all the necessary steps to ensure data safety and security. We are 21 CFR Part 11, GDPR and HIPAA compliant across all project phases.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transforming clinical trials with digital innovation and patient engagement
              </p>
            </div>

            {/* Executive Leadership */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {/* Wessam Sonbol */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4 flex items-center justify-center text-3xl font-bold text-primary">
                      WS
                    </div>
                    <h3 className="text-xl font-semibold mb-1">Wessam Sonbol</h3>
                    <p className="text-primary font-medium mb-4">Founder & CEO</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wessam brings nearly two decades of leadership at the intersection of healthcare and technology, with deep expertise in managing complex Phase I–IV, IDE, and 510(k) clinical studies—working with partners like Medtronic, Abbott Vascular, and Johnson & Johnson.
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 italic">
                    "Patients shouldn't adapt to research—research should adapt to patients."
                  </p>
                </CardContent>
              </Card>

              {/* Sameh Sowelam */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mb-4 flex items-center justify-center text-3xl font-bold text-accent">
                      SS
                    </div>
                    <h3 className="text-xl font-semibold mb-1">Sameh Sowelam</h3>
                    <p className="text-primary font-medium mb-4">Chief Technology Officer</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    With over 25 years of technology leadership, Sameh is an inventor and proven team-builder renowned for scaling robust, AI-driven platforms. His strategic vision empowers Delve Health's mission to revolutionize patient-centered clinical research.
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    A passionate advocate for merging technology with healthcare to improve patient outcomes worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Directors & VPs */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Dave Alderson */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full mb-3 flex items-center justify-center text-2xl font-bold text-primary">
                      DA
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Dave Alderson</h3>
                    <p className="text-primary font-medium text-sm mb-3">VP of Business Development</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    30 years of experience including 10 years leading product development for MRI, PET, and diagnostic devices. A frequent speaker and author, Dave specializes in bringing clinical systems to early- and late-stage development.
                  </p>
                </CardContent>
              </Card>

              {/* Theresa Dahl */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full mb-3 flex items-center justify-center text-2xl font-bold text-accent">
                      TD
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Theresa Dahl</h3>
                    <p className="text-primary font-medium text-sm mb-3">Director of Customer Success</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Expert in program and account management, Theresa ensures clients have the tools to deliver patient-centric healthcare. Dedicated to creating long-term partnerships with key stakeholders to advance clinical outcomes.
                  </p>
                </CardContent>
              </Card>

              {/* Rania El Desoki */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full mb-3 flex items-center justify-center text-2xl font-bold text-primary">
                      RE
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Rania El Desoki, Ph.D.</h3>
                    <p className="text-primary font-medium text-sm mb-3">Director of Quality</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    With a doctorate from University of Wisconsin–Madison and experience at Penn Medicine, Rania leads data-driven quality systems and regulatory frameworks that ensure platform integrity and accelerate approval.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
                <p className="text-xl text-primary-foreground/80">Measurable results across global clinical trials</p>
              </div>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <div className="text-primary-foreground/80">Clinical Trials Supported</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">50K+</div>
                  <div className="text-primary-foreground/80">Patients Enrolled</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">40%</div>
                  <div className="text-primary-foreground/80">Faster Enrollment</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-primary-foreground/80">Data Quality Score</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">Join us in transforming clinical trials</h2>
              <p className="text-xl text-muted-foreground">
                Partner with Delve Health to make your next study more accessible, efficient, and patient-centric
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Schedule a Demo <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
