import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Faq from "./Faq";
import { IoMdCheckmarkCircle } from "react-icons/io";

const howManyEmployeesYouHave = [
  { value: "אני עובד לבד" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "7" },
  { value: "8" },
  { value: "9" },
  { value: "10" },
];

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
            <form className="mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-lg border p-10">
              <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Input type="text" name="fullname" placeholder="שם מלא" />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Input type="email" name="phone-number" placeholder="מספר נייד" />
              </div>
              <div>
                <select name="number-of-employees" className="w-full rounded-sm border border-gray-300 p-1" defaultValue={"כמה עובדים יש לך ?"}>
                  <option value="" disabled hidden>
                    כמה עובדים יש לך ?
                  </option>
                  {howManyEmployeesYouHave.map((optionOfUser) => (
                    <option value={optionOfUser.value}>{optionOfUser.value}</option>
                  ))}
                </select>
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">ההודעה שלך</Label>
                <Textarea name="message" rows={5} />
              </div>
              <Button className="w-full">שלח</Button>
            </form>
          </div>
        </div>
      </section>
      <Faq />
    </div>
  );
};

export default Contact;
