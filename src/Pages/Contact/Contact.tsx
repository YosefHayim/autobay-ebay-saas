import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Faq from "./Faq";

const title = "Contact Us";
const description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!";
const phone = "(123) 34567890";
const email = "email@example.com";
const web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" };

const Contact = () => {
  return (
    <div>
      <section className="w-full py-32">
        <div>
          <div className="mx-auto flex max-w-screen-xl flex-col justify-between lg:flex-row">
            <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
              <div>
                <h1 className="mb-2 w-full text-5xl font-semibold lg:mb-1 lg:text-2xl">צרו קשר עם הצוות של Bropify</h1>
                <p className="text-muted-foreground">נשמח לענות לך על כל שאלה ולתת תמיכה בכל נושא.</p>
              </div>
              <div>
                <ul>
                  <li>תיאום שיחה עם צוות המכירות שלנו</li>
                  <li>הדגמה מלאה של המערכת והתאמה לצרכי העסק שלך</li>
                  <li>להבין איך היומן של קלמארק יעזור לך לנהל את העסק בצורה יעילה יותר</li>
                </ul>
              </div>
            </div>
            <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
              <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input type="text" id="firstname" placeholder="First Name" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input type="text" id="lastname" placeholder="Last Name" />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" id="subject" placeholder="Subject" />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Type your message here." id="message" />
              </div>
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </div>
      </section>
      <Faq />
    </div>
  );
};

export default Contact;
