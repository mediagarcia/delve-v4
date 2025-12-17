import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Globe, Shield, Users, Gauge, Database, Zap, Heart, Watch, TrendingUp, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pharma = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Make Your Global Trials Human.
              </h1>
              <p className="text-xl text-muted-foreground">
                Unified eCOA, validated wearable endpoints, and human concierge support help pharma teams run decentralized and hybrid trials with confidence.
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Book a Pharma Demo <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Modern Infrastructure Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  The Modern Infrastructure for Global Drug Trials
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Centralize your data, automate compliance, and maintain human oversight across every touchpoint
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Centralized data across wearables, ePRO, and diaries</h4>
                      <p className="text-muted-foreground">Single platform unifies all digital endpoints for real-time visibility and analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Automated compliance with human intervention when it matters</h4>
                      <p className="text-muted-foreground">Smart automation handles routine tasks while concierge team provides personalized patient support</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Regulatory-aligned digital endpoints (FDA, EMA, PMDA)</h4>
                      <p className="text-muted-foreground">Pre-validated algorithms and documentation packages meet global regulatory standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Real-time dashboards for global oversight</h4>
                      <p className="text-muted-foreground">Monitor patient compliance, data quality, and site performance across all geographies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built for Pharma Sponsors - Feature Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Pharma Sponsors</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade capabilities designed for the complexity of global drug development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Global Scale</h3>
                  <p className="text-sm text-muted-foreground">
                    Deploy across continents with multilingual support and regional regulatory compliance
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-accent" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Regulatory Alignment</h3>
                  <p className="text-sm text-muted-foreground">
                    FDA, EMA, and PMDA-aligned digital endpoints with complete validation documentation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="text-success" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Human Concierge</h3>
                  <p className="text-sm text-muted-foreground">
                    24/7 patient support team drives engagement and retention throughout the study
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Gauge className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Real-Time Oversight</h3>
                  <p className="text-sm text-muted-foreground">
                    Live dashboards provide instant visibility into trial operations and patient compliance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Unified eCOA + Wearables */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Unified eCOA + Wearables
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Stop juggling multiple vendors. Our platform combines electronic clinical outcome assessments with validated wearable endpoints in a single, integrated solution.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Seamless data integration from patient-reported and sensor-based measures",
                      "Standardized digital endpoints across device types and manufacturers",
                      "Automated quality checks ensure data integrity from day one",
                      "Regulatory-ready audit trails and validation documentation",
                      "Real-time alerts for protocol deviations and compliance issues",
                      "Direct integration with your EDC and data management systems",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="text-success flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Database className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Single Source of Truth</h4>
                        <p className="text-sm text-muted-foreground">
                          All patient data centralized in one platform for simplified oversight and analysis
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="text-accent-foreground" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Rapid Deployment</h4>
                        <p className="text-sm text-muted-foreground">
                          Configure and launch studies in weeks, not months, with our proven templates
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <Watch className="text-success-foreground" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">100+ Wearable Devices</h4>
                        <p className="text-sm text-muted-foreground">
                          Support for all major consumer and research-grade wearables from a single platform
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Retention Powered by Humans */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-8 lg:p-12">
                  <div className="space-y-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary mb-2">87%</div>
                      <p className="text-muted-foreground">Retention at 12 months with concierge support</p>
                    </div>
                    <div className="text-center pt-6 border-t border-primary/20">
                      <div className="text-5xl font-bold text-accent mb-2">63%</div>
                      <p className="text-muted-foreground">Improvement in patient adherence vs. standard care</p>
                    </div>
                    <div className="text-center pt-6 border-t border-primary/20">
                      <div className="text-5xl font-bold text-success mb-2">40+</div>
                      <p className="text-muted-foreground">Languages supported globally</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Retention Powered by Humans, Not Just Software
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Digital tools alone don't keep patients engaged for 12+ months. Our multilingual concierge team provides the human touch that drives sustained participation and data quality.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Protocol-trained support specialists for every study",
                      "Proactive outreach when compliance metrics decline",
                      "Device troubleshooting and technical support 24/7",
                      "Personalized communication in 40+ languages",
                      "Real-time coordination with sites and sponsors",
                      "Behavioral insights to identify at-risk patients early",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="text-success flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Proven Results Across Therapeutic Areas</h2>
                <p className="text-xl text-muted-foreground">
                  Real outcomes from pharma sponsors using our platform
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="text-primary" size={24} />
                    </div>
                    <div className="text-sm font-semibold text-primary mb-2">CASE STUDY</div>
                    <h3 className="text-xl font-semibold mb-3">
                      Global Phase III Program
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Multi-country cardiovascular study achieved 95% retention at 12 months using integrated eCOA, wearables, and concierge support across 150 sites.
                    </p>
                    <div className="pt-4 border-t border-muted">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Retention</span>
                        <span className="font-bold text-primary">95%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Sites</span>
                        <span className="font-bold">150</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Award className="text-accent" size={24} />
                    </div>
                    <div className="text-sm font-semibold text-accent mb-2">CASE STUDY</div>
                    <h3 className="text-xl font-semibold mb-3">
                      Digital Endpoint Validation
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Respiratory disease trial validated novel wearable-based endpoints, generating regulatory submission-ready documentation accepted by FDA and EMA.
                    </p>
                    <div className="pt-4 border-t border-muted">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Data Quality</span>
                        <span className="font-bold text-accent">98%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Regulatory Approval</span>
                        <span className="font-bold">FDA + EMA</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-success transition-colors">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="text-success" size={24} />
                    </div>
                    <div className="text-sm font-semibold text-success mb-2">CASE STUDY</div>
                    <h3 className="text-xl font-semibold mb-3">
                      Hybrid Oncology Study
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Decentralized oncology trial saw 63% improvement in diary adherence and 60% reduction in missed device syncs with human concierge support.
                    </p>
                    <div className="pt-4 border-t border-muted">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Adherence Improvement</span>
                        <span className="font-bold text-success">+63%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Missed Syncs</span>
                        <span className="font-bold">-60%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The Numbers That Matter
                </h2>
                <p className="text-xl text-primary-foreground/80">
                  Real-world performance metrics from pharma trials
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-primary-foreground/80">Device Compliance</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">87%</div>
                  <div className="text-primary-foreground/80">Retention at 12 Months</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">60%</div>
                  <div className="text-primary-foreground/80">Fewer Missed Syncs</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">30%</div>
                  <div className="text-primary-foreground/80">Faster Enrollment</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">Run Your Next Global Trial With Confidence.</h2>
              <p className="text-xl text-muted-foreground">
                Discover how our unified platform and human concierge support can transform your decentralized and hybrid trials
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Book a Pharma Demo <ArrowRight className="ml-2" size={20} />
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

export default Pharma;
