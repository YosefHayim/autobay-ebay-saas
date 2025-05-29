import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Notification: React.FC<{ alertTitle: string; alertDescription: string; isError: boolean }> = ({ alertTitle, alertDescription, isError }) => {
  return (
    <Alert variant={isError ? "destructive" : "default"}>
      <AlertTitle>{alertTitle}</AlertTitle>
      <AlertDescription>{alertDescription}</AlertDescription>
    </Alert>
  );
};

export default Notification;
