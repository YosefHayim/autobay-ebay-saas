const StepFour = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <form className="w-1/3">
        <h1>מה סוג העסק שלך?</h1>
        <p>בחר/י את סוג העסק שלך. ניתן לבחור עד 3 סוגי עסקים</p>
        {businessTypes.map((typeOfB) => (
          <div key={}></div>
        ))}
      </form>
    </section>
  );
};

export default StepFour;
