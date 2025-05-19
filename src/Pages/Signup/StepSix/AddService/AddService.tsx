import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FaPlus } from "react-icons/fa";
import WorkingHours from "../../StepFive/WorkingHours/WorkingHours";

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
            <Input placeholder="שם השירות" />
            <WorkingHours day="" isOpen="open" />
            <Input placeholder="מחיר" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddService;
