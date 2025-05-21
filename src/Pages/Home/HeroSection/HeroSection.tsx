import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Link } from "react-router";
import TextColor from "../TextColor/TextColor";
import ForthHeroSection from "../ForthHeroSection/ForthHeroSection";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const HeroSection = () => {
  return (
    <>
      <main className="overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 isolate z-[2] hidden opacity-50 contain-strict lg:block">
          <div className="absolute top-0 left-0 h-[80rem] w-[35rem] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="absolute top-0 left-0 h-[80rem] w-56 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          <div className="absolute top-0 left-0 h-[80rem] w-56 -translate-y-[350px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <img
                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                alt="background"
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                width="3276"
                height="4095"
              />
            </AnimatedGroup>
            <TextColor />

            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
            />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
                <AnimatedGroup variants={transitionVariants}>
                  <ForthHeroSection
                    words={[
                      "No unnecessary phone calls",
                      "Fewer cancellations, more income",
                      "A calendar that schedules automatically",
                      "Peace of mind for your business",
                      "No chasing after customers",
                      "Full control over your appointments",
                      "A smart calendar that saves you time",
                      "A calendar that reminds customers automatically",
                      "Run your business without headaches",
                      "No chasing after payments",
                      "Less managing – more doing",
                      "The calendar that pushes your business forward",
                      "The calendar that reduces stress",
                      "A calendar that works even when you don’t",
                      "A calendar that doesn’t need you",
                      "A system that truly supports you",
                      "No calls, no messages – just appointments",
                      "A calendar that understands your routine",
                      "A calendar with automatic reminders",
                      "Organized scheduling at the click of a button",
                      "No more complications – your digital calendar",
                      "Manage your business properly",
                      "A calendar even your parents can use",
                      "The calendar that sends reminders by itself",
                      "The calendar that frees up your time",
                    ]}
                  />
                  <p className="mx-auto mt-8 max-w-2xl text-lg text-balance">
                    Bropify – takes the load off managing your business. Customers will book appointments on their own, confirmations will be sent automatically
                    via WhatsApp, and payments will be received with one click.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div key={1} className="flex flex-col">
                    <Button size="lg" className="rounded-xl px-5 text-base">
                      <Link to="#link">
                        <span className="text-nowrap">Get Started</span>
                      </Link>
                    </Button>
                    <span className="text-nowrap">No credit card required</span>
                  </div>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative mt-8 -mr-56 overflow-hidden px-2 sm:mt-12 sm:mr-0 md:mt-20">
                <div aria-hidden className="to-background absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35%" />
                <div className="ring-background bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 dark:inset-shadow-white/20">
                  <img
                    className="bg-background relative hidden aspect-15/8 rounded-2xl dark:block"
                    src="https://tailark.com//_next/image?url=%2Fmail2.png&w=3840&q=75"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="border-border/25 relative z-2 aspect-15/8 rounded-2xl border dark:hidden"
                    src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroSection;
