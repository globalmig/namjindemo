import Home1 from "@/components/Home1";
import Home2 from "@/components/Home2";
import Home3 from "@/components/Home3";
import InquireCommon from "@/components/InquireCommon";
import PortfolioList from "@/components/PortfolioList";
import Service from "@/components/Service";
import Image from "next/image";
import Link from "next/link";

const businessData = [
  {
    id: 'commercial',
    href: '/business/commercial',
    imgName: '상가철거.jpg',
    alt: '상가 철거',
    title: '상가철거',
  },
  {
    id: 'residential',
    href: '/business/residential',
    imgName: '아파트철거.jpg',
    alt: '아파트, 주택 철거',
    title: '아파트/주택철거',
  },
  {
    id: 'waste',
    href: '/business/waste',
    imgName: '폐기물처리.jpg',
    alt: '폐기물 철거',
    title: '폐기물처리',
  },
  {
    id: 'restoration',
    href: '/business/restoration',
    imgName: '원상복구공사.jpg',
    alt: '원상복구공사',
    title: '원상복구공사',
  },
];

export default function Home() {

  return (
    <>

      <main className="bg-[url('/images/main_banner_1.jpg')] bg-no-repeat bg-cover bg-center w-full h-175 relative text-center pc:h-200">
        <div>
          <div className="absolute w-[80%] top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pc:w-[35%]">
            <p className="pc:text-[1.3rem]">Demolish Safely, Rebuild with Trust</p>
            <h2 className="mt-2.5 mb-12.5">안전하게 철거하고, 믿음으로 다시 세웁니다.</h2>
            <div className="">
              <button className="border border-[#ddd] py-3 px-10 hover:bg-[rgba(255, 255, 255, 0.3)] pc:py-5 pc:px-13.75">
                <Link href="/inquire" className="text-white text-[1.2rem]">
                  빠른 견적 신청
                </Link>
              </button>
              <div className="mouse_scroll">
                <span className="block w-7.5 h-12.5 border-3 border-white rounded-[23px] my-7.5 mx-auto after:content-[''] after:block after:w-0.75 after:h-2 after:bg-white after:relative after:mx-auto after:animate-bounce pc:w-10 pc:h-16.25 pc:my-10"></span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Home1/>

      <Home2/>

      <Home3/>

      <Service
        clasName="commercial"
        title="안심하고 맡기는<br />폐업 지원금 서비스"
        subTitle="소상공인 폐업 지원금 서류 작성부터 제출까지!"
        content="어렵고 복잡한 절차 없이 논스톱으로 빠르고 편리하게 도와드립니다."
        bgImg="/images/main_banner_1.jpg"
      />

      <article className="border-b border-[#ccc] pc:border-0">
        <div>
          <div className="display-flex-flow">
            <div>
              <h3 className="text-blue">SERVICE</h3>
              <h2 className="mt-2.5 mb-5 pc:mt-5 pc:mb-20">핵심 사업분야</h2>
            </div>
            <div className="display-flex-flow pc:gap-7.5">
              <section className="relative my-2.5 pc:m-0 pc:w-100 pc-h-[550px] pc:last:mt-17.5">
                <Link href="/business/commercial">
                  <div className="overflow-hidden rounded-2xl pc:rounded-4xl pc:h-137.5">
                    <Image src="/images/핵심분야_내부철거.jpg" alt="인테리어 내부 철거" className="w-full rounded-2xl h-auto duration-800 hover:scale-110 pc:rounded-4xl pc:w-full pc:h-full pc:object-cover" width={1000} height={800} />
                  </div>
                </Link>
                <h3 className="absolute left-5 bottom-5 text-[1.3rem] text-white pc:text-[1.5rem] pc:left-7.5 pc:bottom-25">인테리어 내부 철거</h3>
              </section>
              <section className="relative my-2.5 pc:m-0 pc:w-100 pc-h-[550px] pc:last:mt-17.5">
                <Link href="/business/waste">
                  <div className="overflow-hidden rounded-2xl pc:rounded-4xl pc:h-137.5">
                    <Image src="/images/핵심분야_폐기물처리.jpg" alt="폐기물 처리" className="w-full rounded-2xl h-auto duration-800 hover:scale-110 pc:rounded-4xl pc:w-full pc:h-full pc:object-cover" width={1000} height={800} />
                  </div>
                </Link>
                <h3 className="absolute left-5 bottom-5 text-[1.3rem] text-white pc:text-[1.5rem] pc:left-7.5 pc:bottom-7.5">폐기물 처리</h3>
              </section>
            </div>
          </div>
        </div>
      </article>

      <article className="border-t border-[#dfdfdf]">
        <div>
          <h2 className="mb-10 pc:mb-17.5">
            축적된 경험을 바탕으로<br />다양한 공사를 책임감 있게 수행합니다.
          </h2>
          <div className="display-flex-flow gap-3">
            {businessData.map((item) => (
              <section key={item.id} className="relative w-[47%] my-0 mx-auto pc:w-71.25 pc:my-auto pc:mx-0">
                <Link href={item.href}>
                  <div className="overflow-hidden rounded-2xl flex justify-center items-center pc:rounded-3xl">
                    <Image
                      src={`/images/${item.imgName}`}
                      alt={item.alt}
                      className="w-full h-auto rounded-2xl duration-800 hover:scale-110 pc:rounded-3xl pc:w-auto pc:h-62.5"
                      width={500}
                      height={300}
                    />
                  </div>
                </Link>
                <h4 className="absolute left-2.5 bottom-2.5 text-white pc:text-[1.2rem] pc:left-5 pc:bottom-5">{item.title}</h4>
              </section>
            ))}
          </div>
        </div>
      </article>

      <article className="bg-[#f7f7f8] text-center">
        <div className="pb-7.5 pc:pb-37.5">
          <div>
            <h3 className="text-blue">PORTFOLIO</h3>
            <h2 className="mt-2.5 mb-10 pc:mt-5 pc:mb-17.5">결과로 증명합니다.</h2>
          </div>
          <PortfolioList />
        </div>
      </article>

      <InquireCommon />
    </>
  );
}
