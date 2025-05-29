import { useState } from "react";
import { businessTypes } from "./businessArray";
import { handleBusinessTypesSelection } from "@/handlers/handleBusinessTypeSelection";

const ChooseBusinessTypes = () => {
  const [maxToSelect, setMaxToSelect] = useState(3);

  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <form className="w-2/3">
        <h1 className="text-center text-2xl">What is your business type?</h1>
        <p>You can choose up to 3 business types.</p>
        <div className="grid h-64 grid-cols-2 gap-2 overflow-y-scroll p-2" onClick={(e) => handleBusinessTypesSelection(e, maxToSelect, setMaxToSelect)}>
          {businessTypes?.map((business) => <div key={business.value}>{business.children}</div>)}
        </div>
      </form>
    </section>
  );
};

export default ChooseBusinessTypes;
