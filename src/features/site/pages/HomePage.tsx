import SitePage from "@/components/layout/SitePage";
import HeroSection from "@/components/home/HeroSection";
import ClientsSection from "@/components/home/ClientsSection";
import ServicesSection from "@/components/home/ServicesSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TechStackSection from "@/components/home/TechStackSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

const HomePage = () => {
  return (
    <SitePage>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TechStackSection />
      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      {/* <CTASection /> */}
      <ContactSection />
    </SitePage>
  );
};

export default HomePage;
