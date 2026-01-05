import Hero from "./components/Hero";
import Services from "./components/Services";
import Doorstep from "./components/Doorstep";
import Gallery from "./components/Gallery";
import AppointmentSection from "./components/Appointmentpage";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Doorstep />
      <Gallery />
      <AppointmentSection />
      <Contact />
    </>
  );
}
