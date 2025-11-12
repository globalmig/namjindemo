'use client'
import Image from "next/image";
import PortfolioList from "./PortfolioList";
import { usePathname } from "next/navigation";
import { BUSINESS_DATA } from "@/data/business";
import Service from "./Service";

export default function BusinessLayout() {

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = pathnameSplit[1];
    const categoryContents = BUSINESS_DATA?.find(b => b.category === category);
    const isRestoration = category === "restoration";

    return (
        <article className="business">
            <div>
                {categoryContents &&
                    <div className="display-flex-flow">
                        <div>
                            <Image src={categoryContents.img} alt={categoryContents.title} width={1000} height={767} />
                        </div>
                        <div>
                            <h2 className="mo">{categoryContents.intro_mo}</h2>
                            <p className="mo">{categoryContents.contents_mo}</p>
                            <h1 dangerouslySetInnerHTML={{ __html: categoryContents.intro_pc }} className="pc" />
                            <p className="pc">{categoryContents.contents_pc}</p>
                        </div>
                    </div>}
            </div>
            {category === "commercial" &&
                <Service
                    clasName="commercial"
                    title="소상공인 폐업 지원금"
                    subTitle="소상공인 폐업 지원금 서류 작성부터 제출까지!"
                    content="폐업 지원금 신청부터 철거까지 원스톱 서비스를 제공합니다." />

            }
            {category === "residential" &&
                <Service
                    clasName="residential"
                    title="이사 일정에 맞춘<br/>맞춤형 철거 일정 조정"
                    subTitle="가정 내 안전 관리 및 소음/먼지 최소화 프로그램 제공"
                    content="철거 후 공간 정리까지 한번에 해결해 편리하게 입주 준비를 할 수 있습니다." />
            }
            {category === "waste" &&
                <Service
                    clasName="waste"
                    title="분리, 수거, 운반, 처리까지 모두 한 번에<br/>번거로운 처리 걱정은 끝!"
                    subTitle="환경 처리 방식으로 지역 환경 보호에 기여합니다."
                    content="관련 법규 준수로 안전하고 믿을 수 있는 처리 시스템을 갖추고 있습니다." />
            }
            {isRestoration &&
                <Service
                    clasName="restoration"
                    title="전문 시공팀이 손상 없이 꼼꼼히 복원,<br/>임대차 종료 후 걱정 없이 인도 가능"
                    subTitle="마감 품질 보장 및 사후 점검 제공"
                    content="복구 후 바로 사용 가능하도록 청결하고 안전하게 마무리합니다." />
            }
            <div className="business-process">
                <div>
                    <h1>진행 프로세스</h1>
                    <p>남진철거는 투명하고 체계적인 절차를 통해 신뢰할 수 있는 철거 서비스를 제공합니다.</p>
                    <div>
                        <section>
                            <div>
                                <Image src="/icons/process_1.png" alt="문의 및 상담" width={161} height={123} />
                            </div>
                            <h3>문의 및 상담</h3>
                            <p className="mo">전화·온라인으로 철거 현황과 요청사항 확인</p>
                            <p className="pc">전화 또는 온라인 견적 문의를 통해 기본 현황과 요청 사항을 확인합니다.</p>
                        </section>
                        <div>
                            <Image src="/icons/process_arrow.png" alt="진행순서" width={100} height={100} />
                        </div>
                        <section>
                            <div>
                                <Image src="/icons/process_2.png" alt="무료 방문 견적" width={144} height={166} />
                            </div>
                            <h3>무료 방문 견적</h3>
                            <p className="mo">현장 방문 후 합리적이고 투명한 견적 제시</p>
                            <p className="pc">현장 전문가가 직접 방문하여 철거 범위, 구조, 작업 환경 등을 세밀히 파악하고 합리적이고 투명한 견적을 제공합니다.</p>
                        </section>
                        <div>
                            <Image src="/icons/process_arrow.png" alt="진행순서" width={100} height={100} />
                        </div>
                        <section>
                            <div>
                                <Image src="/icons/process_3.png" alt="계약 및 일정 협의" width={224} height={132} />
                            </div>
                            <h3>계약 및 일정 협의</h3>
                            <p className="mo">시공 일정·작업 범위 협의 후 계약 진행</p>
                            <p className="pc">견적 확정 후 일정과 작업 계획을 협의하여 계약을 진행합니다.</p>
                        </section>
                        <div>
                            <Image src="/icons/process_arrow.png" alt="진행순서" width={100} height={100} />
                        </div>
                        <section>
                            <div>
                                <Image src="/icons/process_4.png" alt="안전 철거 및 폐기물 처리" width={209} height={115} />
                            </div>
                            <h3>안전 철거 및 폐기물 처리</h3>
                            <p className="mo">법규 준수, 안전 중심의 철거 및 폐기물 처리</p>
                            <p className="pc">모든 작업은 안전 수칙과 법규를 준수하여 진행하며, 발생한 폐기물은 즉시·분리·운반 처리합니다.</p>
                        </section>
                        <div>
                            <Image src="/icons/process_arrow.png" alt="진행순서" width={100} height={100} />
                        </div>
                        <section>
                            <div>
                                <Image src="/icons/process_5.png" alt="현장 정리 및 최종 확인" width={143} height={167} />
                            </div>
                            <h3>현장 정리 및<br />최종 확인</h3>
                            <p className="mo">철거 완료 후 정리·청소, 고객과 최종 확인</p>
                            <p className="pc">철거 완료 후 청소 및 정리 작업을 마무리하고, 고객님과 함께 최종 결과를 확인합니다.</p>
                        </section>
                    </div>
                </div>
            </div>
            <div className="business-portfolio">
                <h1>대표 현장 포트폴리오</h1>
                <PortfolioList />
            </div>
        </article>

    )
}