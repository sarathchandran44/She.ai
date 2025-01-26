import Banner from "@/components/home/banner";
import Header from "@/components/home/header";
import HowItWorks from "@/components/home/howitworks";
import { Dot } from "lucide-react";

export default function Home(){
  return(
  
    <main className="mx-auto w-full insert-0 h-full bg-[radial-gradient (#e5e7eb_px), transparent_1px)]
    [background-size:16px_16px">
     <Banner />
    <div className="flex items-center justify-center">
        <Dot className="text-purple-400">
          </Dot>
          <Dot className="text-purple-400">
          </Dot>
          <Dot className="text-purple-400">
          </Dot>
          </div>
          <HowItWorks />

    </main>
  )

}
