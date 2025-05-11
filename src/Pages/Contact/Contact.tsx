import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup } from "@radix-ui/react-select";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="flex w-full flex-col items-start justify-start gap-4 p-4">
      <h1 className="text-2xl font-semibold">Contact the Quickly Team</h1>
      <div>
        <p className="text-base">We’re here to help! Reach out with any questions, and we’ll gladly assist.</p>
        <ul className="mt-2 flex list-disc flex-col gap-2 pl-4">
          <li className="flex items-center gap-2">
            <IoCheckmarkCircleSharp className="text-green-600" />
            Schedule a call with our sales team
          </li>
          <li className="flex items-center gap-2">
            <IoCheckmarkCircleSharp className="text-green-600" />
            Get a full system demo and tailored customization
          </li>
          <li className="flex items-center gap-2">
            <IoCheckmarkCircleSharp className="text-green-600" />
            Discover how Quickly can streamline your operations
          </li>
        </ul>
      </div>

      <form className="flex w-full max-w-md flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="full-name">Full Name</Label>
          <Input id="full-name" name="full-name" type="text" required placeholder="John Doe" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone-number">Phone Number</Label>
          <Input id="phone-number" name="phone-number" type="tel" required placeholder="+1 234 567 8901" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="employee-count">Number of Employees</Label>
          <Select>
            <SelectTrigger id="employee-count" aria-label="Number of employees">
              <SelectValue placeholder="Select number of employees" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup className="w-full">
                <SelectItem value="1">I work solo</SelectItem>
                {[...Array(9)].map((_, i) => (
                  <SelectItem key={i + 2} value={`${i + 2}`}>
                    {i + 2}
                  </SelectItem>
                ))}
                <SelectItem value="10+">10 or more</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Your Message</Label>
          <Textarea id="message" name="message" rows={4} className="resize-none" placeholder="How can we help you?" />
        </div>

        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
};

export default Contact;
