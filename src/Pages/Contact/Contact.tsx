import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Faq from "./Faq";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <section className="w-full py-32">
        <div>
          <div className="mx-auto flex max-w-screen-xl flex-col justify-between lg:flex-row">
            <div className="mx-auto flex max-w-sm flex-col gap-10">
              <div>
                <h1 className="mb-2 w-full text-5xl font-semibold lg:mb-1 lg:text-2xl">צרו קשר עם הצוות של Bropify</h1>
                <p className="text-muted-foreground">נשמח לענות לך על כל שאלה ולתת תמיכה בכל נושא.</p>
              </div>
              <div>
                <ul className="flex flex-col items-start justify-start gap-2">
                  <li className="flex items-start gap-2">
                    <IoMdCheckmarkCircle className="min-h-[20px] min-w-[20px]" />
                    <p>תיאום שיחה עם צוות המכירות שלנו</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <IoMdCheckmarkCircle className="min-h-[20px] min-w-[20px]" />
                    <p>הדגמה מלאה של המערכת והתאמה לצרכי העסק שלך</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <IoMdCheckmarkCircle className="min-h-[20px] min-w-[20px]" />
                    <p>להבין איך היומן של Bropify יעזור לך לנהל את העסק בצורה יעילה יותר</p>
                  </li>
                </ul>
              </div>
              <div>
                <h2>העסקים המובלים בישראל התקדמו ליומן של Bropify</h2>
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
