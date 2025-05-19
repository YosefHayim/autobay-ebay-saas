import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FaPlus } from "react-icons/fa";
import { serviceTime } from "./utils";

const AddService = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button type="button" className="float-right rounded-full hover:bg-gray-200 hover:text-black">
          <FaPlus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="my-3 w-full text-start">פרטי שירות</DialogTitle>
          <DialogDescription className="flex w-full flex-col items-center justify-center gap-2">
            <select name="time-of-service" defaultValue={"בחר זמן שירות"} className="w-full rounded-sm border border-gray-300 p-2">
              {serviceTime.map((time) => (
                <option value={time}>{time}</option>
              ))}
            </select>
            <Input placeholder="שם השירות" />
            <Input placeholder="מחיר" />
          </DialogDescription>
        </DialogHeader>
        <Button type="submit" className="float-right rounded-lg hover:bg-gray-200 hover:text-black">
          הוסף שירות
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddService;
