import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Slider from "@/components/Slider";
import Staars from "@/components/Staars";
import EventRev from "@/components/EventRev";
import Link from "next/link";


export default function Home() {
  return (
    <section className="h-full mt-10 sm:mt-0">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
          <div className="text-center xl:text-right order-2 xl:order-none p-4">
            <span className="text-xl">أهلا بالجميع</span>
            <h1 className="h1 font-serif text-[#508399] mx-2 text-right">مرحبا بكم في</h1>
             <h1 className="h1 text-[#508399] text-right font-bold mb-6">CODE WAY</h1>
            <p className="max-w-[550px] p-4 text-[#16323e] text-2xl ">
              هي شركة متخصصة في تعليم البرمجة بطريقة عملية وبسيطة، من خلال برامج تدريبية وتوجيه فردي مع منتورز محترفين.
              بنساعد المتعلّمين إنهم يلاقوا طريقهم في عالم البرمجة بخطط واضحة، ومهام عملية، ودعم مستمر، عشان يتحولوا من مبتدئين لمبرمجين جاهزين لسوق العمل.
              بنؤمن إن كل شخص يقدر يبدأ، يتعلم، ويوصل لو لقى حد فاهم يمشي معاه خطوة بخطوة.
              Code Way <br />
              <br />
              <br />
              هنا الطريق بيبدأ، ومعاك بيكمل
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 text-right justify-end">
              <div className="flex mb-8 xl:mb-0 text-right p-4">
                <Socials/>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-12">
          <Stats/>
        </div>
      </div>
      <div className="mx-12">
        <Slider/>
      </div>
      <div className="mx-12">
        <Staars/>
      </div>
      <div className="mx-12">
        <EventRev/>
      </div>
      <Link href='/contact'>
        <button className="fixed bottom-5 right-5 bg-[#16323e] text-white px-6 py-3 rounded-full shadow-lg animate-bounce z-50">
          %50 <span>شترك بخصم</span>
        </button>
      </Link>
    </section>
  );
}
