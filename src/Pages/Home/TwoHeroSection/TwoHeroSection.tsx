"use client";

import { customers } from "./customers";
import { HeroParallax } from "./hero-parallax";

const TwoHeroSection = () => {
  return <HeroParallax products={customers} />;
};

export default TwoHeroSection;
