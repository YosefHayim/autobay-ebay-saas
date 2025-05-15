"use client";

const TextColor = () => {
  return (
    <div>
      <div className="mt-4 mb-10 md:mt-6">
        <div className="px-2">
          <div className="relative h-full w-full [mask-image:radial-gradient(200rem_24rem_at_center,white,transparent)] p-8 dark:border-slate-800">
            <h1 className="flex flex-col px-3 py-2 text-center text-6xl leading-none font-extrabold tracking-wide select-none sm:text-7xl md:flex-col lg:flex-row lg:justify-center">
              <span
                data-content="קובעים."
                className="before:animate-gradient-background-1 relative before:absolute before:top-0 before:bottom-4 before:left-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
              >
                <span className="from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                  קובעים.
                </span>
              </span>
              <span
                data-content="מתזכרים."
                className="before:animate-gradient-background-2 relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
              >
                <span className="from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                  מתזכרים.{" "}
                </span>
              </span>
              <span
                data-content="מתקדמים."
                className="before:animate-gradient-background-3 relative before:absolute before:top-0 before:bottom-1 before:left-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
              >
                <span className="from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                  מתקדמים.{" "}
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextColor;
