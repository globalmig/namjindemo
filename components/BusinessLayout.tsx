'use client'
import Image from "next/image";
import PortfolioList from "./PortfolioList";
import { usePathname } from "next/navigation";
import { BUSINESS_DATA } from "@/data/business";

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
                            <h1 className="pc">{categoryContents.intro_pc}</h1>
                            <p className="pc">{categoryContents.contents_pc}</p>
                        </div>
                    </div>}
            </div>
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
                            <h3>현장 정리 및<br/>최종 확인</h3>
                            <p className="mo">철거 완료 후 정리·청소, 고객과 최종 확인</p>
                            <p className="pc">철거 완료 후 청소 및 정리 작업을 마무리하고, 고객님과 함께 최종 결과를 확인합니다.</p>
                        </section>
                    </div>
                </div>
            </div>
            {
                isRestoration ? <></> :
                    <div className="business-portfolio">
                        <h1>대표 현장 포트폴리오</h1>
                        <PortfolioList />
                    </div>
            }
        </article>

    )
}