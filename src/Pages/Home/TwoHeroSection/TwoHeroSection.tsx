"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { customers } from "./customers";

const TwoHeroSection = () => {
  return <HeroParallax products={customers} />;
};

export default TwoHeroSection;
