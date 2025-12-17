import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, Activity, Users, FileText, Zap, Gauge, UserCheck, Radio } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MedTech = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Accelerate Real-World Evidence.
              </h1>
              <p className="text-xl text-muted-foreground">
                From post-market surveillance to real-world device performance, Delve Health delivers engagement, compliance, and insights that help MedTech companies move faster with confidence.
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Book a MedTech Demo <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* The New Standard for Device-Driven Research */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">The New Standard for Device-Driven Research</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Medical devices generate data. But without the right infrastructure, that data is incomplete, inconsistent, and impossible to act on. We connect devices to patients to protocols.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Post-market clinical follow-up (PMCF) automation</h4>
                      <p className="text-muted-foreground">Streamline PMCF data collection with automated workflows, device integration, and real-time compliance monitoring</p>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Device monitoring + symptom diaries</h4>
                      <p className="text-muted-foreground">Combine objective device readings with patient-reported outcomes for comprehensive real-world evidence</p>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Patient training and troubleshooting via concierge</h4>
                      <p className="text-muted-foreground">24/7 multilingual support team helps patients with device setup, usage questions, and technical issues</p>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Real-time data visualization for product teams</h4>
                      <p className="text-muted-foreground">Live dashboards provide instant visibility into device performance, patient outcomes, and compliance metrics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built for Medical Device Companies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Medical Device Companies</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                End-to-end infrastructure for post-market surveillance and real-world performance studies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Post-Market Studies</h3>
                  <p className="text-sm text-muted-foreground">
                    Automated PMCF workflows with device data capture, eCOA integration, and regulatory reporting
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="text-accent" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Device Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Interactive patient education modules with video tutorials and real-time concierge support
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Radio className="text-success" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Wearable Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Native support for connected devices, sensors, and wearables with standardized data pipelines
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Gauge className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Real-Time Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Live monitoring dashboards with alerts, compliance tracking, and export-ready analytics
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Data From Devices Needs People Behind It */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Data From Devices Needs People Behind It</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Devices malfunction. Patients forget to sync. Technical support calls pile up. Without human intervention, device studies fail quietly.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-muted/30 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4">The Reality</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Post-market surveillance studies routinely fail to meet enrollment or data quality targets because patients need help with devices—and manufacturers don't have the infrastructure to provide it.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Sites can't troubleshoot every device issue. Call centers can't scale with complex medical technologies. And sponsors don't see the problem until it's too late.
                  </p>
                </div>

                <div className="bg-accent/5 border-2 border-accent rounded-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4">The Delve Difference</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Our concierge support team acts as a technical help desk for your device studies. They assist patients with setup, sync troubleshooting, usage questions, and adverse event reporting—all while documenting every interaction for regulatory compliance.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Device data is only as good as the people supporting it. We provide both.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unified eCOA + Device Workflows */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Unified eCOA + Device Workflows</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Most platforms force you to choose between device data and patient-reported outcomes. We combine them in a single workflow.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Single Patient App</h4>
                      <p className="text-muted-foreground">Patients manage device pairing, symptom diaries, and study tasks in one unified interface</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Automated Data Fusion</h4>
                      <p className="text-muted-foreground">Device readings are automatically linked to corresponding eCOA entries for complete context</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Smart Alerts</h4>
                      <p className="text-muted-foreground">Trigger diary prompts based on device readings or alert clinical teams when thresholds are exceeded</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Regulatory Compliance Built-In</h4>
                      <p className="text-muted-foreground">Full audit trails, source data verification, and 21 CFR Part 11 compliance for both device and PRO data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Flexible Integration</h4>
                      <p className="text-muted-foreground">Export to EDC, CDMS, or data warehouse systems with standardized APIs and export formats</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Global Language Support</h4>
                      <p className="text-muted-foreground">Multi-language patient interfaces and concierge support for worldwide device studies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Real Results from MedTech Companies</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                How device manufacturers accelerate evidence generation with Delve Health
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Post-Market Respiratory Device</h3>
                  <p className="text-muted-foreground mb-4">
                    A global respiratory device manufacturer needed to monitor post-market device performance and patient symptoms across 200+ patients.
                  </p>
                  <div className="bg-accent/5 rounded-lg p-4 mb-4">
                    <div className="text-2xl font-bold text-accent mb-1">12 → 2</div>
                    <div className="text-sm text-muted-foreground">Visits reduced from 12 to 2 through remote monitoring</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Delve's unified device + eCOA platform eliminated 10 in-person visits while maintaining complete data capture and regulatory compliance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="text-success" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Implantable Device PMCF</h3>
                  <p className="text-muted-foreground mb-4">
                    A cardiac device company struggled with patient compliance and data completeness in their EU post-market clinical follow-up study.
                  </p>
                  <div className="bg-accent/5 rounded-lg p-4 mb-4">
                    <div className="text-2xl font-bold text-accent mb-1">71%</div>
                    <div className="text-sm text-muted-foreground">Improvement in compliance rates</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Concierge support and automated reminders brought compliance from 54% to 92%, ensuring regulatory requirements were met ahead of schedule.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Radio className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Wireless Sensor Study</h3>
                  <p className="text-muted-foreground mb-4">
                    A wearable biosensor company faced high rates of missing data due to sync failures and patient disengagement in a 6-month real-world study.
                  </p>
                  <div className="bg-accent/5 rounded-lg p-4 mb-4">
                    <div className="text-2xl font-bold text-accent mb-1">38%</div>
                    <div className="text-sm text-muted-foreground">Reduction in missing data</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Proactive sync monitoring and technical support reduced data gaps from 23% to 14%, improving statistical power and data quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                  <div className="text-primary-foreground/80 text-lg">Device Compliance</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">60%</div>
                  <div className="text-primary-foreground/80 text-lg">Reduction in Sync Failures</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">87%</div>
                  <div className="text-primary-foreground/80 text-lg">Retention at 12 Months</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">30%</div>
                  <div className="text-primary-foreground/80 text-lg">Faster Real-World Data Collection</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">Accelerate Your Device's Evidence Generation.</h2>
              <p className="text-xl text-muted-foreground">
                See how Delve Health transforms post-market surveillance and real-world device studies with unified device monitoring, patient engagement, and regulatory compliance.
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Book a MedTech Demo <ArrowRight className="ml-2" size={20} />
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

export default MedTech;
