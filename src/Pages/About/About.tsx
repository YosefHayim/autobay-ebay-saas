import { About3 } from "./Info";

const About = () => {
  return (
    <About3
      description="Bropify is here to bring order to the appointment chaos. Less WhatsApp, more clients showing up on time."
      mainImage={{
        src: "/images/barber-main.jpg",
        alt: "Barbershop in action",
      }}
      secondaryImage={{
        src: "/images/barber-client.jpg",
        alt: "Happy, scheduled client",
      }}
      breakout={{
        src: "/images/bropify-logo.svg",
        alt: "Bropify logo",
        title: "Dozens of barbers are already on board",
        description:
          "Bropify gives you full control over your schedule, saves time, and books appointments without the headache. You focus on cuts – we’ll handle the rest.",
        buttonText: "Get Started",
        buttonUrl: "/how-it-works",
      }}
      companiesTitle="Chosen by the sharpest barbers in the game"
      achievementsTitle="Our numbers speak for themselves"
      achievementsDescription="Everything you need to run a smart barbershop – appointments, clients, all in a single click."
      achievements={[
        { label: "Barbers on the line", value: "300+" },
        { label: "Haircuts via app", value: "800+" },
        { label: "Happy bros", value: "99%" },
        { label: "Industry praise", value: "10+" },
      ]}
    />
  );
};

export default About;
