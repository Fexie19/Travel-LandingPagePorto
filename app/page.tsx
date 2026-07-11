import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import ValueProposition from "@/components/ValueProposition";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Destinations />
      <ValueProposition />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
