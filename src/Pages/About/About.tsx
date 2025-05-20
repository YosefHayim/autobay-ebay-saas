import { About3 } from "./Info";

const About = () => {
  return (
    <About3
      description="Shadcnblocks is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age."
      mainImage={{
        src: "https://shadcnblocks.com/images/block/placeholder-1.svg",
        alt: "placeholder",
      }}
      secondaryImage={{
        src: "https://shadcnblocks.com/images/block/placeholder-2.svg",
        alt: "placeholder",
      }}
      breakout={{
        src: "https://shadcnblocks.com/images/block/block-1.svg",
        alt: "logo",
        title: "Hundreds of blocks at Shadcnblocks.com",
        description: "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
        buttonText: "Discover more",
        buttonUrl: "https://shadcnblocks.com",
      }}
      companiesTitle="Valued by clients worldwide"
      companies={[
        {
          src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
          alt: "Arc",
        },
        {
          src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
          alt: "Descript",
        },
        {
          src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
          alt: "Mercury",
        },
        {
          src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
          alt: "Ramp",
        },
        {
          src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
          alt: "Retool",
        },
        {
          src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
          alt: "Watershed",
        },
      ]}
      achievementsTitle="המספרים שלנו מדברים בעצמם"
      achievementsDescription="כל מה שצריך בשביל לנהל מספרה חכם – תורים, לקוחות, הכל בלחיצת כפתור."
      achievements={[
        { label: "ספרים על הקווים", value: "300+" },
        { label: "תספורות באפליקציה", value: "800+" },
        { label: "אחים מרוצים", value: "99%" },
        { label: "שבחים מהברנז'ה", value: "10+" },
      ]}
    />
  );
};

export default About;
