import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Faq from "./Faq";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Brands from "./Brands";

const howManyEmployeesYouHave = [
  { value: "I work alone" },
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
                <h1 className="mb-2 w-full text-5xl font-semibold lg:mb-1 lg:text-2xl">Contact the Bropify Team</h1>
                <p className="text-muted-foreground">We’re happy to answer any question and offer support on anything you need.</p>
              </div>
              <div>
                <ul className="flex flex-col items-start justify-start gap-2">
                  <li className="flex items-start gap-2">
                    <IoMdCheckmarkCircle className="min-h-[20px] min-w-[20px]" />
                    <p>Book a call with our sales team</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <IoMdCheckmarkCircle className="min-h-[20px] min-w-[20px]" />
                    <p>Get a full demo and see how it fits your business</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <IoMdCheckmarkCircle className="min-h-[20px] min-w-[20px]" />
                    <p>Learn how Bropify’s calendar helps you manage your business more efficiently</p>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Top businesses in Israel already switched to Bropify</h2>
                <Brands />
              </div>
            </div>
            <form className="mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-lg border p-10">
              <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Input type="text" name="fullname" placeholder="Full Name" />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Input type="email" name="phone-number" placeholder="Mobile Number" />
              </div>
              <div>
                <select name="number-of-employees" className="w-full rounded-sm border border-gray-300 p-1" defaultValue={"How many employees do you have?"}>
                  <option value="" disabled hidden>
                    How many employees do you have?
                  </option>
                  {howManyEmployeesYouHave.map((optionOfUser) => (
                    <option key={optionOfUser.value} value={optionOfUser.value}>
                      {optionOfUser.value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Your Message</Label>
                <Textarea name="message" rows={5} />
              </div>
              <Button className="w-full">Send</Button>
            </form>
          </div>
        </div>
      </section>
      <Faq />
    </div>
  );
};

export default Contact;
