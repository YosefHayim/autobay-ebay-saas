import AddService from "./AddService/AddService";

const ChooseServices = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <h1 className="text-center text-2xl">Let׳s start add services</h1>
      <p>Define now at least 1 service, later you can add more.</p>
      <AddService />
      <hr className="w-full" />
      <form className="w-2/3"></form>
    </section>
  );
};

export default ChooseServices;
