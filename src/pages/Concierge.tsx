import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Heart, Calendar, Headphones, Smartphone, ClipboardCheck, Bell, Video, Pill } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Concierge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Empathy + Automation. The Human Layer of Every Trial.
              </h1>
              <p className="text-xl text-muted-foreground">
                Patient support, secondary screening, device troubleshooting, and protocol-driven workflows — all delivered by a multilingual team trained in clinical research.
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Explore Concierge Services <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Overview Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  The Human Connection That Keeps Trials Moving
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Clinical trials are more complex than ever. Between wearables, ePRO diaries, televisits, and medication schedules, patients need real support. Our concierge team acts as the empathetic, protocol-trained bridge between patients, sites, and sponsors.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: ClipboardCheck,
                    title: "Secondary screening & eligibility pre-checks",
                    description: "Verify patient eligibility before site visits to reduce screen failures",
                  },
                  {
                    icon: Calendar,
                    title: "Visit scheduling, reminders & coordination",
                    description: "Proactive scheduling and coordination to keep patients on track",
                  },
                  {
                    icon: Smartphone,
                    title: "Wearables/sensors/app support",
                    description: "Technical support for all digital devices and applications",
                  },
                  {
                    icon: Headphones,
                    title: "Device troubleshooting & onboarding",
                    description: "Step-by-step guidance for device setup and issue resolution",
                  },
                  {
                    icon: Heart,
                    title: "Symptom diaries & ePRO adherence coaching",
                    description: "Gentle reminders and support to maintain diary compliance",
                  },
                  {
                    icon: Bell,
                    title: "Site + sponsor escalation workflows",
                    description: "Structured protocols for escalating concerns to the right stakeholders",
                  },
                ].map((feature, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="text-primary" size={28} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wearables & Sensors Support */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Wearables, Sensors & App Support
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Digital health devices are only valuable when patients use them correctly. Our concierge team provides white-glove technical support for any device in your trial.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Initial device setup and pairing",
                      "Battery monitoring and charging reminders",
                      "Connectivity troubleshooting (Bluetooth, WiFi, cellular)",
                      "Wear compliance coaching",
                      "Data sync verification",
                      "Replacement device coordination",
                      "Multi-device protocol management",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="text-success flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Smartphone className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Real-Time Device Monitoring</h4>
                        <p className="text-sm text-muted-foreground">
                          We proactively identify device issues before they impact data quality
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Headphones className="text-accent-foreground" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Multilingual Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Available in 40+ languages to support global trial populations
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-success-foreground" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Protocol-Trained Team</h4>
                        <p className="text-sm text-muted-foreground">
                          Every agent is trained on your specific study protocol and procedures
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Televisit Readiness */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <Video className="text-primary-foreground" size={48} />
                    </div>
                    <h3 className="text-2xl font-bold">Televisit Success Rate</h3>
                    <div className="text-5xl font-bold text-primary">98%</div>
                    <p className="text-muted-foreground">
                      of televisits completed without technical issues
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Televisit Readiness & Remote Visit Support
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Ensure every remote visit runs smoothly with pre-visit tech checks and real-time support during calls.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Pre-visit technology testing and verification",
                      "Platform navigation guidance (Zoom, Teams, proprietary systems)",
                      "Audio/video troubleshooting before visits",
                      "Backup connection protocols",
                      "Patient education on visit expectations",
                      "Real-time technical support during visits",
                      "Post-visit follow-up coordination",
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

        {/* Medication & Treatment Reminders */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Medication & Treatment Reminders
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Improve protocol adherence with personalized, automated reminders delivered through patients' preferred channels.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Medication dosing reminders (SMS, email, app push)",
                      "Visit window notifications",
                      "Diary completion prompts",
                      "Device wear reminders",
                      "Fasting and pre-visit preparation alerts",
                      "Escalation to live concierge for missed doses",
                      "Adherence pattern monitoring and intervention",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="text-success flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-success/10 to-primary/10 rounded-lg p-8 lg:p-12">
                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Pill className="text-primary-foreground" size={32} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-1">89%</div>
                        <p className="text-muted-foreground">Medication adherence rate with reminders</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Bell className="text-accent-foreground" size={32} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-1">75%</div>
                        <p className="text-muted-foreground">Reduction in missed diary entries</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="text-success-foreground" size={32} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-1">92%</div>
                        <p className="text-muted-foreground">On-time visit attendance</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                  Results That Speak for Themselves
                </h2>
                <p className="text-xl text-primary-foreground/80">
                  Real outcomes from trials using Concierge-as-a-Service
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold mb-2">92%</div>
                  <div className="text-primary-foreground/80">ePRO completion rate</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-primary-foreground/80">Device compliance</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">87%</div>
                  <div className="text-primary-foreground/80">Retention at 6 months</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">60%</div>
                  <div className="text-primary-foreground/80">Faster issue resolution</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">How Concierge Services Work</h2>
                <p className="text-xl text-muted-foreground">Seamless integration with your existing trial infrastructure</p>
              </div>

              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Protocol Training & Integration",
                    description:
                      "Our team learns your protocol, procedures, and escalation workflows. We integrate with your CTMS, ePRO, and device platforms to provide seamless support.",
                  },
                  {
                    step: "02",
                    title: "Patient Onboarding",
                    description:
                      "Every enrolled patient receives a personalized welcome call. We set up devices, explain the study app, and establish their preferred communication channels.",
                  },
                  {
                    step: "03",
                    title: "Proactive Support & Monitoring",
                    description:
                      "Our team monitors compliance metrics in real-time. We reach out proactively when we detect issues with device usage, diary completion, or visit attendance.",
                  },
                  {
                    step: "04",
                    title: "Escalation & Coordination",
                    description:
                      "When clinical concerns arise, we follow your defined escalation protocols. All interactions are logged and integrated with your study documentation systems.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                      {item.step}
                    </div>
                    <div className="flex-grow pt-2">
                      <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-lg text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Customer Story */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-accent-foreground/10 rounded-full text-sm font-semibold mb-6">
                  SUCCESS STORY
                </div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-center mb-8">
                "The concierge team became an extension of our trial. Patient satisfaction scores increased by 40%, and we saw dramatic improvements in device compliance and diary completion. They truly are the human layer that modern trials need."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold">Jennifer Park, PhD</p>
                <p className="text-accent-foreground/80">VP of Clinical Operations, Global CRO</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">The Human Layer Every Trial Needs.</h2>
              <p className="text-xl text-muted-foreground">
                See how our concierge team can improve patient engagement, device compliance, and retention in your next trial.
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

export default Concierge;
