import { Button } from "@/components/ui/button";
import phoneMobileCalendarView from "/images/mobile-calendar.png";

const Homepage = () => {
  return (
    <div>
      <h1>Just a calendar that works for you.</h1>
      <div>
        <p>
          Quickly will take the burden off your business management. Customers will schedule appointments on their own, confirmation of arrival will be sent
          automatically via WhatsApp, and greetings will be received with a click.
        </p>
        <img src={phoneMobileCalendarView} alt="phone-mobile-hero" decoding="async" />
        <Button>Start now</Button>
        <p>No need credit card</p>
        <div>
          <h2>No more hassle with scheduling appointments.</h2>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
