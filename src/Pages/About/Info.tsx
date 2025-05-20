import { Button } from "@/components/ui/button";
import { companies } from "./companies";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

export const About3 = ({
  description,
  mainImage = {
    src: "",
    alt: "",
  },
  secondaryImage = {
    src: "",
    alt: "",
  },
  breakout = {
    src: "",
    alt: "",
    title: "",
    description: "",
    buttonText: "",
    buttonUrl: "",
  },
  companiesTitle,
  achievementsTitle,
  achievementsDescription,
  achievements,
}: About3Props = {}) => {
  return (
    <section className="py-32">
      <div>
        <div className="mb-14 flex gap-5 text-center">
          <p className="text-muted-foreground w-full">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img src={mainImage.src} alt={mainImage.alt} className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2" />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="bg-muted flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto">
              <img src={breakout.src} alt={breakout.alt} className="mr-auto h-12" />
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <img src={secondaryImage.src} alt={secondaryImage.alt} className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto" />
          </div>
        </div>
        <div className="py-32">
          <p className="text-center">{companiesTitle} </p>
          <div className="bg-muted mt-8 flex flex-wrap justify-center gap-8 p-3">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <img src={company.src} alt={company.alt} className="h-6 w-auto md:h-8" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-muted relative overflow-hidden rounded-xl p-10 md:p-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="text-muted-foreground max-w-screen-sm text-center">{achievementsDescription}</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p>{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
        </div>
      </div>
    </section>
  );
};
