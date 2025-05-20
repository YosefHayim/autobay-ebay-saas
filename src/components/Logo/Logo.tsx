import { TextShimmer } from "../ui/text-shimmer";

const Logo = () => {
  return (
    <TextShimmer
      duration={3}
      className="text-xl font-medium [--base-color:theme(colors.gray.600)] [--base-gradient-color:theme(colors.gray.200)] dark:[--base-color:theme(colors.gray.700)] dark:[--base-gradient-color:theme(colors.gray.400)]"
    >
      Bropify
    </TextShimmer>
  );
};

export default Logo;
