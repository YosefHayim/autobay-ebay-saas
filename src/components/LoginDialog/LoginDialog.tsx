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
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>Hello, in order to connect please enter email and password:</DialogDescription>
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
              Forget password?
            </Link>
          </div>

          <div>
            <Button>
              Login with google
              <span className="pointer-events-none me-2 flex-1">
                <FcGoogle className="mr-1" size={16} aria-hidden="true" />
              </span>
            </Button>
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Login</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
