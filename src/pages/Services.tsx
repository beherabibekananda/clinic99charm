import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import {
  Stethoscope,
  Heart,
  Shield,
  Users,
  Baby,
  Activity,
  Brain,
  Pill,
  Syringe,
  Microscope,
  Thermometer,
  Clipboard,
  ChevronRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Check-ups",
      description: "Comprehensive annual physical exams and routine health assessments to monitor your overall well-being and catch potential issues early.",
      features: ["Complete physical examination", "Blood pressure monitoring", "Health risk assessment", "Personalized health advice"],
    },
    {
      icon: Heart,
      title: "Preventive Care",
      description: "Proactive health screenings, immunizations, and lifestyle counseling to help you stay healthy and prevent disease.",
      features: ["Cancer screenings", "Cardiovascular health checks", "Immunizations", "Lifestyle counseling"],
    },
    {
      icon: Shield,
      title: "Chronic Disease Management",
      description: "Ongoing care and support for managing chronic conditions like diabetes, hypertension, and heart disease.",
      features: ["Diabetes care", "Hypertension management", "Heart disease monitoring", "Personalized care plans"],
    },
    {
      icon: Baby,
      title: "Pediatric Care",
      description: "Gentle, compassionate healthcare for children from newborns to adolescents, including well-child visits and sick care.",
      features: ["Well-child visits", "Growth monitoring", "Vaccinations", "Developmental assessments"],
    },
    {
      icon: Users,
      title: "Women's Health",
      description: "Comprehensive women's healthcare services including annual exams, prenatal care, and menopause management.",
      features: ["Annual wellness exams", "Prenatal care", "Menopause support", "Reproductive health"],
    },
    {
      icon: Activity,
      title: "Sports Medicine",
      description: "Specialized care for athletes and active individuals, including injury treatment and performance optimization.",
      features: ["Sports physicals", "Injury treatment", "Rehabilitation", "Performance guidance"],
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Supportive mental health services including counseling, anxiety management, and depression treatment.",
      features: ["Depression screening", "Anxiety management", "Stress counseling", "Referral services"],
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Expert guidance on your medications, including reviews, adjustments, and education about your prescriptions.",
      features: ["Medication reviews", "Dosage adjustments", "Drug interaction checks", "Patient education"],
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Full range of immunizations for all ages, from childhood vaccines to travel immunizations.",
      features: ["Childhood vaccines", "Flu shots", "Travel immunizations", "Adult boosters"],
    },
    {
      icon: Microscope,
      title: "Lab Services",
      description: "On-site laboratory testing for quick and convenient diagnostic services.",
      features: ["Blood tests", "Urinalysis", "Glucose testing", "Cholesterol screening"],
    },
    {
      icon: Thermometer,
      title: "Urgent Care",
      description: "Same-day appointments for non-emergency urgent health concerns that can't wait.",
      features: ["Same-day appointments", "Minor injuries", "Acute illnesses", "Quick diagnosis"],
    },
    {
      icon: Clipboard,
      title: "Health Screenings",
      description: "Comprehensive screening programs to detect health issues early when they're most treatable.",
      features: ["Cancer screenings", "Diabetes screening", "Heart health checks", "Vision/hearing tests"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-light/30 to-background py-20 md:py-28">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-up font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 animate-fade-up text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "0.1s" }}>
              Comprehensive healthcare services designed to meet all your medical needs 
              under one roof.
            </p>
          </div>
        </div>
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Insurance & Payment
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We accept most major insurance plans and offer flexible payment options. 
              Contact our office to verify your coverage or discuss payment plans.
            </p>
            <Button asChild variant="outline" className="mt-8 rounded-full">
              <Link to="/contact">
                Contact Us About Insurance
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Book your appointment today and take the first step toward better health.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8 rounded-full px-8 text-lg"
            >
              <Link to="/booking">
                Book an Appointment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
