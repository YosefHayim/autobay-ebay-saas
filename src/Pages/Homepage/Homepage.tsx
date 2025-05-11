import { Button } from "@/components/ui/button";
import phoneMobileCalendarView from "/images/mobile-calendar.png";
import pickTimeCalendar from "/images/pick-time-calendar.png";
import notificationAlert from "/images/notification.png";
import paymentUi from "/images/payment-ui.png";
import locationUi from "/images/location-ui.png";

const Homepage = () => {
  return (
    <div>
      <h1>Just a calendar that works for you.</h1>
      <div>
        <p>
          Quickly will take the burden off your business management. Customers will schedule appointments on their own, confirmation of arrival will be sent
          automatically via WhatsApp, and greetings will be received with a click.
        </p>
        <Button>Start now</Button>
        <p>No need credit card</p>
        <img src={phoneMobileCalendarView} alt="phone-mobile-hero" decoding="async" />
        <div>
          <h2>No more hassle with scheduling appointments.</h2>
          <p>
            Your clients will schedule appointments online and the calendar will just fill up like magic! Your page is available 24/7 so even at 3 am the
            calendar continues to fill up.
          </p>
          <Button>Start now</Button>
          <img src={pickTimeCalendar} alt="calendar-pick-time" decoding="async" />
        </div>
        <div>
          <h2>We will make sure to remind your customers. No more taps!</h2>
          <p>
            Is your appointment approaching? Kalmark's calendar will send a confirmation of arrival on WhatsApp. A canceled appointment will be freed up for
            something else that you just want to schedule. No more holes in the calendar!
          </p>
          <Button>Start now</Button>
          <img src={notificationAlert} alt="notification-alert" decoding="async" />
        </div>
        <div>
          <h2>Receive payment by clicking on the appointment in the calendar. The easiest.</h2>
          <p>
            Cash, Bit or credit card payment directly from the calendar. Your receipt will already reach the customer by message and the reports are waiting for
            the accountant.
          </p>
          <Button>Start now</Button>
          <img src={paymentUi} alt="payment-ui" decoding="async" />
        </div>
        <div>
          <h2>We will take care of new customers for you!</h2>
          <p>
            Your business will appear in our business search app. We advertise it to customers all over the country, who are looking for exactly the services
            your business offers in their area.
          </p>
          <Button>Start now</Button>
          <img src={locationUi} alt="location-ui" decoding="async" />
        </div>
        <div>
          <h2>Israel's leading businesses have advanced to the Kalmark calendar</h2>
          <div className="h-[500px] w-full rounded-2xl bg-blue-300">
            <b>placeholder for logo of business</b>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2>Our Customers</h2>
          <p>See our information for yourself about the change they went through with the help of our diary.</p>
          <div className="h-[200px] w-full rounded-2xl bg-gray-300"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laboriosam ducimus laudantium</p>
          <div className="h-[200px] w-full rounded-2xl bg-gray-300"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laboriosam ducimus laudantium</p>
          <div className="h-[200px] w-full rounded-2xl bg-gray-300"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laboriosam ducimus laudantium</p>
        </div>
        <div>
          <h2>Strat to accelarte with Quickly now with a two-week free trial!</h2>
          <Button>Start now</Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
