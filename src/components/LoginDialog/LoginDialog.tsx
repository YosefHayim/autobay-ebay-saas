import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">התחברות</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>היי כדי להמשיך צריך להתחבר. מה מספר הנייד שלך</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">אימייל</Label>
            <Input required id="email" type="email" autoComplete="username" placeholder="example@gmail.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">סיסמה</Label>
            <Input required id="password" type="password" placeholder="••••••••••" autoComplete="current-password" />
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
