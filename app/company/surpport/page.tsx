import CategoryBanner from "@/components/CategoryBanner";
import InquireCommon from "@/components/InquireCommon";
import Process from "@/components/Process";
import Service from "@/components/Service";
import Image from "next/image";

export default function SurpportPage() {
    return (
        <>
            <CategoryBanner />
            <article className="surpport-1">
                <div>

                    <div>
                        <h1>폐업 부담, 남진철거가 정부 지원과 함께 덜어드립니다!</h1>
                        <h2><span>최대 600만원!</span><br />점포 철거비 지원, 놓치지 마세요.</h2>
                        <div className="display-flex-flow">
                            <div className="display-flex">
                                <div>
                                    <Image src="/images/surpport_통계.png" alt="폐업 정부 지원" width={435} height={435} />
                                </div>
                                 <h1>80<span>%</span></h1>
                            </div>
                            <div>
                                <h2>폐업 시 가장 큰 부담 중 하나,</h2>
                                <h2>바로 <span>점포 철거비</span>입니다.</h2>
                                <h3>우리나라 <span>80% 이상</span>의 소상공인이 정부 지원 제도를 몰라 지원을 받지 못하고 있습니다.</h3>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="display-flex-flow">
                            <section>
                                <h2>폐업 점포 철거비 지원</h2>
                                <ul>
                                    <li><span>지원 금액:</span> 최대 600만원</li>
                                    <li><span>지원 기준:</span> 평당 20만원 기준, 인테리어 철거 및 원상복구 비용 포함</li>
                                    <li><Image src="/icons/참고.png" alt="폐업 철거비 최대 600만원 지원" width={65} height={65} /><p>등록된 철거업체를 이용해야 지원 가능</p></li>
                                </ul>
                            </section>
                            <section>
                                <h2>지원 자격</h2>
                                <ul>
                                    <li>- 소상공인기본법상 소상공인</li>
                                    <li>- 사업자등록 후 60일 이상 경과</li>
                                    <li>- 임대사업장 운영 (자가 건물 제외)</li>
                                    <li>- 폐업 예정자 또는 폐업자</li>
                                    <li><Image src="/icons/참고.png" alt="폐업 철거비 지원 자격" width={65} height={65} /><p>단, 금융업·보험업·유흥업·사행성 업종은 제외</p></li>
                                </ul>
                            </section>
                        </div>
                        <div>
                            <p>※ 자격 조건을 제대로 확인하지 않으면 신청이 반려될 수 있습니다.</p>
                        </div>
                    </div>
                </div>
            </article>
            <Process />
            <Service
                title="남진철거와 함께라면?"
                subTitle="정부 지원 혜택을 놓치지 마세요. 남진철거가 든든하게 함께합니다."
                clasName="with-namjin"
            />

            <article className="surpport-2">
                <div>
                    <h1>지원금 기간을 놓치면 생기는 문제</h1>
                    <div className="display-flex-flow">
                        <section>
                            <div>
                                <Image src="/icons/전액부담.png" alt="철거비 전액 부담" width={174} height={174}/>
                            </div>
                            <div>
                                <h3>철거비를<br/>전액 부담해야 함</h3>
                                <p>수백만원 부담</p>
                            </div>
                        </section>
                        <section>
                            <div>
                                <Image src="/icons/재정적부담.png" alt="재정적 부담 증가" width={215} height={160}/>
                            </div>
                            <div>
                                <h3>세무 정리·채무 조정 등<br/>추가 비용 발생</h3>
                                <p>재정적 부담 증가</p>
                            </div>
                        </section>
                        <section>
                            <div>
                                <Image src="/icons/기회상실.png" alt="재기 지원 프로그램 기회 상실" width={158} height={176}/>
                            </div>
                            <div>
                                <h3>재기 지원 프로그램<br/>기회 상실</h3>
                                <p>새 출발 어려움</p>
                            </div>
                        </section>
                    </div>
                </div>
            </article>

            <InquireCommon />
        </>
    )
}