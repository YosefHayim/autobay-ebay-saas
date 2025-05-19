import AddService from "./AddService/AddService";

const StepSix = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <h1 className="text-2xl">נתחיל להוסיף שירותים</h1>
      <p>הגדירו עכשיו שירות אחד לפחות, בהמשך יהיה ניתן להוסיף שירותים נוספים.</p>
      <AddService />
      <hr className="w-full" />
      <form className="w-2/3"></form>
    </section>
  );
};

export default StepSix;
