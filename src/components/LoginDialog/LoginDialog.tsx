import signUpWithPhone from "@/Api/auth/signUpWMobile";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginDialog = () => {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const phone = formData.get("phone");
    console.log(phone);
    await signUpWithPhone(phone);
  };

  return (
    <Dialog>
      <DialogTitle className="hidden"></DialogTitle>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>Login</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4" onSubmit={handleLogin}>
          <div className="grid gap-2">
            <Label htmlFor="phone-number">Phone</Label>
            <Input required type="tel" autoComplete="tel" name="phone" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Login</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
