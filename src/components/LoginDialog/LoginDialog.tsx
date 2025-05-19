import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const LoginDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">התחברות</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>היי, כדי להמשיך צריך להתחבר הזן את הפרטים הבאים:</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">אימייל</Label>
            <Input required id="email" type="email" autoComplete="username" placeholder="example@gmail.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">סיסמה</Label>
            <Input required id="password" type="password" placeholder="••••••••••" autoComplete="current-password" />
            <Link to="/forget-password" className="text-sm text-gray-300 hover:text-black">
              שכחת סיסמה?
            </Link>
          </div>

          <div>
            <Button>
              התחבר עם גוגל
              <span className="pointer-events-none me-2 flex-1">
                <FcGoogle className="mr-1" size={16} aria-hidden="true" />
              </span>
            </Button>
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              בטל
            </Button>
          </DialogClose>
          <Button type="submit">התחבר</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
