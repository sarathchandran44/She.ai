import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Pricing() {
  const plansMap = [
    {
      name: "Basic",
      description: "Get started with SpeakEasy",
      price: "19",
      items: ["3 Blog Posts", "3 Transcriptions"],
    },
    {
      name: "Pro",
      description: "All blog posts, let’s go!",
      price: "39",
      items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
    },
  ];

  return (
    <section className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-12 lg:px-0">
        <div className="flex items-center justify-center w-full pb-12">
          <h2 className="font-bold text-xl uppercase mb-8 text-purple-600">
            Pricing
          </h2>
        </div>
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {plansMap.map(({ name, price, description, items }, idx) => (
            <div
              className="relative w-full max-w-lg"
              key={idx} // Correct placement of key
            >
             <div className={`relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 rounded-box border-[1px] ${name === "Pro" ? "border-purple-600" : "border-gray-500/20"} rounded-2xl`}>

                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold capitalize">
                      {name}
                    </p>
                    <p className="text-base-content/80 mt-2">{description}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p
                    className="text-5xl
                    tracking-light
                    font-extrabold"
                  >
                    {price}
                  </p>
                  <div className="flex flex-col justify-end mb-[4px]">
                    <p className="text-xs text-base-content/60 uppercase font-semibold">
                      USD
                    </p>
                    <p className="text-xs text-base-content/60">/month</p>
                  </div>
                </div>
                <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                  {items.map((item, idx) => (
                    <li className="flex items-center gap-2" key={idx}>
                      <CheckIcon size={18} className="text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  <Button
                    variant={"link"}
                    className="border-2 rounded-full flex gap-2 bg-black text-gray-100 hover:no-underline"
                  >
                    <Link href="/" className="flex gap-1 items-center">
                      Get SpeakEasy <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
