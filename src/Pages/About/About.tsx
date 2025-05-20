import { About3 } from "./Info";

const About = () => {
  return (
    <About3
      description="Bropify פה כדי לעשות סדר בבלאגן של התורים. פחות וואטסאפים, יותר לקוחות שמגיעים בזמן."
      mainImage={{
        src: "/images/barber-main.jpg",
        alt: "מספרה בתנועה",
      }}
      secondaryImage={{
        src: "/images/barber-client.jpg",
        alt: "לקוח מתואם ומחויך",
      }}
      breakout={{
        src: "/images/bropify-logo.svg",
        alt: "לוגו Bropify",
        title: "עשרות ספרים כבר עלו על זה",
        description: "Bropify נותנת לך שליטה על הלו״ז, חוסכת לך זמן ומתאמת תורים בלי כאב ראש. תתעסק במספרים – אנחנו נדאג לשאר.",
        buttonText: "תראה איך זה עובד",
        buttonUrl: "/how-it-works",
      }}
      companiesTitle="הבחירה של הספרים הכי חדים בשוק"
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
