import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Watch, Zap, Shield, Activity, BarChart3, Users, Heart, Gauge } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import wearableAbstract from "@/assets/wearable-abstract.jpg";
import handWearableIcon from "@/assets/hand-wearable icon.png";

const Wearables = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src={wearableAbstract} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Digital Measures Powered by Wearables
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform raw sensor signals into validated digital endpoints. Standardize every device, operationalize every workflow, and generate continuous evidence—backed by real human engagement.
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Schedule a Demo <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* From Sensors to Submissions */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">From Sensors to Submissions</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Digital measures promise continuous, objective data—but only if you can harmonize signals across devices, validate endpoints, and keep patients engaged. We handle all three.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-8">
                  <p className="text-lg text-muted-foreground">
                    Every wearable device speaks a different language. Different sampling rates, different sensors, different data formats. Our platform translates raw sensor signals into standardized, validated digital endpoints that regulators recognize—while our concierge team ensures patients actually wear the devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Device Integration & Signal Harmonization */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Device Integration & Signal Harmonization</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Universal compatibility meets intelligent signal processing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Watch className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Universal Device Compatibility</h3>
                  <p className="text-sm text-muted-foreground">
                    Support for 100+ wearable models from Garmin, Fitbit, Apple, and research-grade devices
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-accent" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Real-Time Signal Harmonization</h3>
                  <p className="text-sm text-muted-foreground">
                    Standardize heterogeneous sensor data into comparable measures across all devices
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-success" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Automated QC & Signal Integrity</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time quality checks flag artifacts, missing data, and device issues before they impact your study
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Activity className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Open Endpoint APIs</h3>
                  <p className="text-sm text-muted-foreground">
                    Export validated endpoints directly to your EDC, CDMS, or analytics platform
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
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">60%</div>
                  <div className="text-primary-foreground/80 text-lg">Reduction in missed syncs</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                  <div className="text-primary-foreground/80 text-lg">Wearable models supported</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                  <div className="text-primary-foreground/80 text-lg">Global studies deployed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Wearables Reality */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">The Wearables Reality No One Talks About</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Wearables don't fail because of technology. They fail because of operations.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-muted/30 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4">The Problem</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Patients forget to charge devices. They don't sync. They stop wearing them after week 3. Sites don't know there's a problem until it's too late.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    The data might be "continuous," but the human behavior is anything but.
                  </p>
                </div>

                <div className="bg-accent/5 border-2 border-accent rounded-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4">The Solution</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Our concierge support team monitors device compliance in real time and intervenes before data gaps emerge. Automated reminders, personalized troubleshooting, and human touch when patients need it.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Technology captures the data. People keep patients engaged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Endpoints & Real-Time Clinical Insights */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Digital Endpoints & Real-Time Clinical Insights</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From raw sensor data to regulatory-ready endpoints
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Validated Endpoint Algorithms</h3>
                        <p className="text-sm text-muted-foreground">
                          Pre-built and custom algorithms for heart rate variability, sleep quality, physical activity, and more—all validated for clinical use
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="text-success" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Regulatory-Ready Endpoints</h3>
                        <p className="text-sm text-muted-foreground">
                          Documentation packages and validation reports that meet FDA, EMA, and ICH guidelines for digital health technologies
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Gauge className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Live Monitoring Dashboards</h3>
                        <p className="text-sm text-muted-foreground">
                          Real-time visibility into patient compliance, data quality, and endpoint trends across all sites
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Heart className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Adaptive Protocol Support</h3>
                        <p className="text-sm text-muted-foreground">
                          Configure triggers and alerts based on endpoint values to enable adaptive trial designs and early intervention
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement & Compliance Engine */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Engagement & Compliance Engine</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Technology alone doesn't keep patients engaged. Human support does.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Concierge Support</h4>
                      <p className="text-muted-foreground">Multilingual support team assists patients with device setup, troubleshooting, and compliance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Proactive Intervention</h4>
                      <p className="text-muted-foreground">Automated alerts trigger human outreach when wear time drops or sync issues emerge</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Smart Reminders</h4>
                      <p className="text-muted-foreground">Contextual notifications for charging, syncing, and wearing based on individual patient patterns</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Behavioral Insights</h4>
                      <p className="text-muted-foreground">Machine learning identifies at-risk patients before they disengage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Site Collaboration Tools</h4>
                      <p className="text-muted-foreground">Coordinators receive real-time alerts and compliance reports to support patients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Gamification & Motivation</h4>
                      <p className="text-muted-foreground">Achievement badges, progress tracking, and positive reinforcement drive sustained engagement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Stats */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Real Results from Real Studies</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                  <div className="text-accent-foreground/80 text-lg">Device compliance rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">87%</div>
                  <div className="text-accent-foreground/80 text-lg">Retention at 6 months</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">63%</div>
                  <div className="text-accent-foreground/80 text-lg">Higher engagement vs. standard care</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">See How Digital Measures Transform Your Study</h2>
              <p className="text-xl text-muted-foreground">
                Schedule a demo to explore how our wearables platform delivers validated endpoints and sustained patient engagement
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Book a Demo <ArrowRight className="ml-2" size={20} />
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

export default Wearables;
