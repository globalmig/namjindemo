'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const processData = [
    {
        id: 1,
        alt: "문의 및 상담",
        width: 161,
        height: 123,
        title: "문의 및 상담",
        moText: "전화·온라인으로 철거 현황과 요청사항 확인",
        pcText: "전화 또는 온라인 견적 문의를 통해 기본 현황과 요청 사항을 확인합니다.",
    },
    {
        id: 2,
        alt: "무료 방문 견적",
        width: 144,
        height: 166,
        title: "무료 방문 견적",
        moText: "현장 방문 후 합리적이고 투명한 견적 제시",
        pcText: "현장 전문가가 직접 방문하여 철거 범위, 구조, 작업 환경 등을 세밀히 파악하고 합리적이고 투명한 견적을 제공합니다.",
    },
    {
        id: 3,
        alt: "계약 및 일정 협의",
        width: 224,
        height: 132,
        title: "계약 및 일정 협의",
        moText: "시공 일정·작업 범위 협의 후 계약 진행",
        pcText: "견적 확정 후 일정과 작업 계획을 협의하여 계약을 진행합니다.",
    },
    {
        id: 4,
        alt: "안전 철거 및 폐기물 처리",
        width: 209,
        height: 115,
        title: "안전 철거 및 폐기물 처리",
        moText: "법규 준수, 안전 중심의 철거 및 폐기물 처리",
        pcText: "모든 작업은 안전 수칙과 법규를 준수하여 진행하며, 발생한 폐기물은 즉시·분리·운반 처리합니다.",
    },
    {
        id: 5,
        alt: "현장 정리 및 최종 확인",
        width: 143,
        height: 167,
        title: <>현장 정리 및<br />최종 확인</>,
        moText: "철거 완료 후 정리·청소, 고객과 최종 확인",
        pcText: "철거 완료 후 청소 및 정리 작업을 마무리하고, 고객님과 함께 최종 결과를 확인합니다.",
    },
];

const companyData = [
    {
        id: "온라인신청",
        imgName: "온라인신청.png",
        alt: "온라인신청",
        width: 170,
        height: 128,
        title: "온라인 신청",
        listItems: [
            <>희망리턴패키지 홈페이지<br />또는 소상공인마당 접속</>,
            <>빠른 승인 및 서류 관리 가능</>
        ]
    },
    {
        id: "전화상담",
        imgName: "전화상담.png",
        alt: "전화상담",
        width: 169,
        height: 149,
        title: "전화 상담",
        listItems: [
            <>소상공인 지원센터 1357</>,
            <>지역별 담당 컨설턴트 연결 가능</>
        ]
    },
    {
        id: "방문신청",
        imgName: "방문신청.png",
        alt: "방문신청",
        width: 169,
        height: 149,
        title: "방문 신청",
        listItems: [
            <>가까운 소상공인지원센터 방문</>,
            <>서류 작성 및 제출 대행 지원 가능</>,
            <><span className="font-bold text-blue">TIP</span> 전문가 도움 없이 혼자 진행하면, 자격 조건 누락 등으로 신청이 반려될 수 있음</>
        ]
    }
]

export default function Process() {

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = pathnameSplit[0];
    const isBusiness = category === "business";
    const isCompany = category === "company";

    return (
        <div className="py-17.5 px-[5%] bg-[#f7f7f8] pc:py-37.5 pc:px-0">
            {
                isBusiness &&
                <div className="text-center py-7.5 px-[5%] max-w-350 my-0 mx-auto">
                    <h2>진행 프로세스</h2>
                    <p className="mt-2.5 mb-12.5 pc:mt-5 pc:mb-17.5">남진철거는 투명하고 체계적인 절차를 통해 신뢰할 수 있는 철거 서비스를 제공합니다.</p>
                    <div className="pc:flex pc:justify-center">
                        {processData.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <section
                                    className="bg-white rounded-3xl py-7.5 px-6.25
                                                pc:w-65 pc:h-85 pc:py-10 pc:px-5">
                                    <div className="h-12.5 flex justify-center items-center">
                                        <Image
                                            src={`/icons/process_${item.id}.png`}
                                            alt={item.alt}
                                            className={`w-auto my-0 mx-auto ${index === 2 ? "h-7.5" : "h-10"}`}
                                            width={item.width}
                                            height={item.height}
                                        />
                                    </div>
                                    <h3 className="text-[1.1rem] mt-2.5 mb-2
                                                    pc:text-[1.5rem] pc:h-16.25 pc:my-2 pc:flex pc:justify-center pc:items-center">{item.title}</h3>
                                    <p className="mo text-[#555] text-[0.9rem]">{item.moText}</p>
                                    <p className="pc text-[1rem]">{item.pcText}</p>
                                </section>
                                {index < processData.length -1 && (
                                    <div className="-my-2.5 mx-auto transform rotate-90 pc:relative pc:my-auto pc:-mx-3 pc:rotate-0">
                                        <Image
                                            src="/icons/process_arrow.png"
                                            alt="진행순서"
                                            className="w-7.5 h-7.5 my-0 mx-auto pc:w-10 pc:h-auto"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            }
            {isCompany &&
                <div className="text-center py-7.5 px-[5%] max-w-350 my-0 mx-auto">
                    <h2>지원금 신청 방법</h2>
                    <p className="mt-2.5 my-12.5 pc:mt-5 pc:mb-17.5">아래의 방법으로 폐업 지원금을 신청할 수 있습니다.</p>
                    <div className="pc:flex pc:justify-center">
                        {companyData.map((item, index) =>
                            <React.Fragment key={item.id}>
                                <section
                                    className="bg-white rounded-3xl py-7.5 px-6.25
                                                pc:w-87.5 pc:h-85 pc:py-10 pc:px-5">
                                    <div className="h-12.5 flex justify-center items-center">
                                        <Image
                                            src={`/icons/${item.imgName}`}
                                            alt={item.title}
                                            className={`w-auto my-0 mx-auto ${index === 2 ? "h-7.5" : "h-10"}`}
                                            width={item.width}
                                            height={item.height} />
                                    </div>
                                    <h3 className="text-[1.1rem] mt-2.5 mb-2
                                                    pc:text-[1.5rem] pc:h-16.25 pc:my-2 pc:flex pc:justify-center pc:items-center">{item.title}</h3>
                                    <ul>
                                        {item.listItems.map((text, i) => (
                                            <li key={i} className="my-1.25 pc:last:py-3.75 pc:last:px-2 pc:last:text-[0.9rem]">{text}</li>
                                        ))}
                                    </ul>
                                </section>
                                {index < companyData.length -1 && (
                                    <div className="-my-2.5 mx-auto transform rotate-90 pc:relative pc:my-auto pc:-mx-3 pc:rotate-0">
                                        <Image
                                            src="/icons/process_arrow.png"
                                            alt="진행순서"
                                            className="w-7.5 h-7.5 my-0 mx-auto pc:w-10 pc:h-auto"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                )}
                            </React.Fragment>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}