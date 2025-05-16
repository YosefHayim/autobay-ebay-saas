import Feature from "./Feature/Feature";
import { features } from "./features";

const ThirdHeroSection = () => {
  return (
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

export default ThirdHeroSection;
