import type { Metadata } from "next";
import CategoryBanner from "@/components/CategoryBanner";
import Home2 from "@/components/Home2";
import Home3 from "@/components/Home3";
import Home4 from "@/components/Home4";
import InquireCommon from "@/components/InquireCommon";

export const metadata: Metadata = {
    title: "회사소개",
    description: "2014년 설립 이후 10년 넘게 전국 각지에서 철거 및 폐기물 처리를 진행해온 남진철거의 연혁과 전문성을 소개합니다.",
};

const historyData = [
    {
        id: "2014",
        pcYear: "2014.12",
        pcText: '남진철거 설립 - "안전하고 믿을 수 있는 철거 서비스 시작"',
        moYear: "2014",
        moText: "설립 (사업자 등록)",
    },
    {
        id: "2016",
        pcYear: "2016.03",
        pcText: '남진철거 설립 - 폐기물 처리 및 운반 시스템 구축 - "원스톱 철거 서비스 완성"',
        moYear: "2016",
        moText: "폐기물 처리 시스템 구축",
    },
    {
        id: "2018",
        pcYear: "2018.07",
        pcText: '남진철거 설립 - 상가·주거공간 인테리어 철거 전문화 - "분야별 전문팀 운영"',
        moYear: "2018",
        moText: "상가·주거공간 철거 전문팀 운영",
    },
    {
        id: "2020",
        pcYear: "2020.05",
        pcText: '남진철거 설립 - 전국 단위 현장 확대 - "전국 어디서나 동일한 품질 제공"',
        moYear: "2020",
        moText: "전국 단위 철거 서비스 확대",
    },
    {
        id: "2022",
        pcYear: "2022.11",
        pcText: '남진철거 설립 - 원상복구 공사 서비스 강화 - "철거부터 복구까지 한 번에"',
        moYear: "2022",
        moText: "원상복구 공사팀 신설",
    },
    {
        id: "2024",
        pcYear: "2024.03",
        pcText: '안전관리 강화 및 내부 교육 시스템 도입 - "사고 없는 현장 실현"',
        moYear: "2024",
        moText: "안전관리 시스템 강화",
    },
    {
        id: "2025",
        pcYear: "2025",
        pcText: "현재 전국 각지 철거 및 복구 프로젝트 진행 중",
        moYear: "2025",
        moText: "현재 전국 현장 진행 중",
    },
];

export default function IntroducePage() {
    return (
        <>
            <CategoryBanner />
            <article className="border-b border-[#ddd]">
                <div className="text-center">
                    <div>
                        <h1 className="text-blue">남진철거</h1>
                        <h3 className="text-[1.2rem] pc:text-[2rem] mt-2.5 mb-7.5">남진철거는 믿을 수 있는<br />철거 전문 기업입니다.</h3>
                        <p className="pc:text-[1.3rem] pc:w-175 pc:my-0 pc:mx-auto">
                            남진철거는 2014년 12월 19일 설립 이후, 10년 넘게 전국 각지에서 다양한 철거 및 폐기물 처리 작업을 진행해온 철거 전문 업체입니다.<br /><br />오랜 경험과 노하우를 바탕으로 안전하고 체계적인 철거 서비스를 제공하며, 모든 현장은 관련 법규와 안전 지침을 철저히 준수하여 진행합니다.
                        </p>
                    </div>
                </div>
            </article>

            <Home4 />
            <Home2 />
            <Home3 />

            <article className="pc:text-left">
                <div>
                    <div>
                        <h3 className="text-blue mb-2">HISTORY</h3>
                        <h2>회사 연혁</h2>
                        <div>
                            {historyData.map((item) => (
                                <section key={item.id}
                                    className="my-7.5 pc:text-left pc:my-11.25">
                                    <div className="pc">
                                        <h3 className="text-blue text-[1.3rem]
                                            before:content-[''] before:inline-block before:w-1.25 before:h-1.25 before:bg-blue
                                            before:mr-1.25 before:mb-2.5 before:flex-direction-column pc:text-[1.5rem] pc:my-2.5 pc:before:w-2.5 pc:before:h-2.5 pc:before:mb-5">{item.pcYear}</h3>
                                        <p className="my-auto mx-0 pc:mb-2.5 pc:text-[1.3rem]">{item.pcText}</p>
                                    </div>
                                    <div className="mo display-flex justify-left gap-5">
                                        <h3 className="text-blue text-[1.3rem]
                                            before:content-[''] before:inline-block before:w-1.25 before:h-1.25 before:bg-blue
                                            before:mr-1.25 before:mb-2.5 before:flex-direction-column pc:text-[1.5rem] pc:my-2.5 pc:before:w-2.5 pc:before:h-2.5 pc:before:mb-5">{item.moYear}</h3>
                                        <p className="my-auto mx-0 pc:mb-2.5 pc:text-[1.3rem]">{item.moText}</p>
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
            <InquireCommon />
        </>
    )
}