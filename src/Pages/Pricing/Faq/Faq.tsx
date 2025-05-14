import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  items?: FaqItem[];
}

const faqItems = [
  {
    id: "faq-1",
    question: "Can I try it for free?",
    answer: "Of course! You get a 14-day free trial with no commitment and no credit card required.",
  },
  {
    id: "faq-2",
    question: "Can I cancel the subscription if I change my mind?",
    answer: "We offer monthly and yearly plans. You can cancel the monthly plan anytime in your calendar settings.",
  },
  {
    id: "faq-3",
    question: "Is the system approved by the Tax Authority?",
    answer: "Yes, our system is approved by the Tax Authority.",
  },
];

const Faq = ({ items = faqItems }: Faq3Props) => {
  return (
    <section className="py-32">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">Frequently asked questions</h2>
        </div>
        <Accordion type="single" collapsible className="mx-auto w-full lg:max-w-3xl">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">{item.question}</div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">{item.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
