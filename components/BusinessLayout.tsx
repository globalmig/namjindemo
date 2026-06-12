'use client'
import Image from "next/image";
import PortfolioList from "./PortfolioList";
import { usePathname } from "next/navigation";
import { BUSINESS_DATA } from "@/data/business";
import Service from "./Service";
import Process from "./Process";

export default function BusinessLayout() {

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = pathnameSplit[1];
    const categoryContents = BUSINESS_DATA?.find(b => b.category === category);
    const isRestoration = category === "restoration";

    return (
        <article className="business">
            <div className="pc:pt-37.5 pc:pb-57.5">
                {categoryContents &&
                    <div className="display-flex-flow">
                        <div className="my-0 mx-auto order-2 mt-7.5 pc:order-0 pc:m-0 pc:w-137.5">
                            <Image 
                            src={categoryContents.img} 
                            alt={categoryContents.title} 
                            className="w-full h-auto rounded-lg pc:rounded-4xl pc:w-150"
                            width={1000} 
                            height={767} />
                        </div>
                        <div className="pc:w-125 pc:my-auto pc:mx-0">
                            <h2 className="mo text-[1.5rem] mb-3.75">{categoryContents.intro_mo}</h2>
                            <p className="mo text-[#555]">{categoryContents.contents_mo}</p>
                            <h2 className="pc mb-3.75 pc:text-[2rem]" dangerouslySetInnerHTML={{ __html: categoryContents.intro_pc }} />
                            <p className="pc text-[#555] text-[1.2rem]">{categoryContents.contents_pc}</p>
                        </div>
                    </div>}
            </div>
            {category === "commercial" &&
                <Service
                    clasName="commercial"
                    title="소상공인 폐업 지원금"
                    subTitle="소상공인 폐업 지원금 서류 작성부터 제출까지!"
                    content="폐업 지원금 신청부터 철거까지 원스톱 서비스를 제공합니다."
                    bgImg="/images/main_banner_1.jpg"
                 />

            }
            {category === "residential" &&
                <Service
                    clasName="residential"
                    title="이사 일정에 맞춘<br/>맞춤형 철거 일정 조정"
                    subTitle="가정 내 안전 관리 및 소음/먼지 최소화 프로그램 제공"
                    content="철거 후 공간 정리까지 한번에 해결해 편리하게 입주 준비를 할 수 있습니다."
                    bgImg="/images/main_banner_2.jpg"
                 />
            }
            {category === "waste" &&
                <Service
                    clasName="waste"
                    title="분리, 수거, 운반, 처리까지 모두 한 번에<br/>번거로운 처리 걱정은 끝!"
                    subTitle="환경 처리 방식으로 지역 환경 보호에 기여합니다."
                    content="관련 법규 준수로 안전하고 믿을 수 있는 처리 시스템을 갖추고 있습니다."
                    bgImg="/images/main_banner_3.jpg"
                />
            }
            {isRestoration &&
                <Service
                    clasName="restoration"
                    title="전문 시공팀이 손상 없이 꼼꼼히 복원,<br/>임대차 종료 후 걱정 없이 인도 가능"
                    subTitle="마감 품질 보장 및 사후 점검 제공"
                    content="복구 후 바로 사용 가능하도록 청결하고 안전하게 마무리합니다."
                    bgImg="/images/main_banner_4.jpg"
                />
            }
            <Process/>
            <div className="py-20 px-[5%] max-w-300 my-0 mx-auto pc:mt-37.5 pc:pt-0 pc:px-0 pc:pb-37.5">
                <h2 className="text-center mb-10 pc:mb-17.5">대표 현장 포트폴리오</h2>
                <PortfolioList />
            </div>
        </article>

    )
}