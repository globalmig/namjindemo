import CategoryBanner from "@/components/CategoryBanner";
import InquireCommon from "@/components/InquireCommon";
import Slide from "@/components/Slide";
import Image from "next/image";

export default function IntroducePage() {
    return (
        <>
            <CategoryBanner />
            <article className="introduce">
                <div>
                    <div>
                        <h1>남진철거</h1>
                        <h3>남진철거는 믿을 수 있는<br/>철거 전문 기업입니다.</h3>
                        <p>
                            남진철거는 2014년 12월 19일 설립 이후, 10년 넘게 전국 각지에서 다양한 철거 및 폐기물 처리 작업을 진행해온 철거 전문 업체입니다.<br/><br/>오랜 경험과 노하우를 바탕으로 안전하고 체계적인 철거 서비스를 제공하며, 모든 현장은 관련 법규와 안전 지침을 철저히 준수하여 진행합니다.
                        </p>
                    </div>
                </div>
            </article>

<article className="home-1">
        <div>

          <div>
            <h1>다양한 현장 경험과 전문성</h1>
            <h3>현장에서 쌓은 경험으로 <span>더 안전하고 정확하게</span> 작업합니다.</h3>
            <div>
              <Image src="/images/demolition_1.png" alt="남진철거 소개" width={1366} height={250} />
            </div>
            <p>
              남진철거는 상가(카페, 식당, 사무실, 술집, 미용실, 네일샵, 헬스장, 병원 등)부터<br />주거공간(아파트, 주택, 빌라)에 이르기까지 <span>인테리어 내부 철거 작업</span>을 전문적으로 수행합니다.
            </p>
            <p>
              또한, 철거 후 발생하는 폐기물 처리까지 전 지역에서 책임 있게 도와드리고 있습니다.
            </p>
          </div>

        </div>
      </article>

      <article className="home-2">
              <div>
                <h1><span>합리적인 견적</span>과<br />믿을 수 있는 서비스</h1>
                <h3>모든 현장은 무료 방문 견적을 통해 정확하게 파악하고,<br/>
                  고객님께 합리적이고 투명한 견적서를 제공합니다.<br/><br/>
                  남진철거는 단순한 철거가 아닌,<br/><span>안전과 신뢰를 바탕으로 한 철거 서비스</span>를 약속드립니다.</h3>
              </div>
              <div>
                <Slide />
              </div>
            </article>
      
            <article className="home-3">
              <div>
                <h1>남진철거를 믿고 맡길 수 있는 이유</h1>
                <div className="display-flex-flow">
                  <section>
                    <div>
                      <Image src="/icons/trust_1.png" alt="아이콘" width={70} height={70} />
                    </div>
                    <p>10년 이상 축적된<br />철거 및 폐기물 처리 경험</p>
                  </section>
                  <section>
                    <div>
                      <Image src="/icons/trust_2.png" alt="아이콘" width={70} height={70} />
                    </div>
                    <p>안전 지침 및 법규 준수로<br />사고 없는 시공</p>
                  </section>
                  <section>
                    <div>
                      <Image src="/icons/trust_3.png" alt="아이콘" width={70} height={177} />
                    </div>
                    <p>전 지역 철거<br />및 폐기물 처리 가능</p>
                  </section>
                  <section>
                    <div>
                      <Image src="/icons/trust_4.png" alt="아이콘" width={70} height={70} />
                    </div>
                    <p>무료 방문 견적<br />& 합리적 비용 제시</p>
                  </section>
                </div>
              </div>
            </article>

            <article className="history">
                <div>
                    <div>
                        <h3>HISTORY</h3>
                        <h2>회사 연혁</h2>
                        <div>
                            <section>
                                <div className="pc">
                                    <h3>2014.12</h3>
                                    <p>남진철거 설립 - "안전하고 믿을 수 있는 철거 서비스 시작" </p>
                                </div>
                                <div className="mo display-flex">
                                    <h3>2014</h3>
                                    <p>설립 (사업자 등록)</p>
                                </div>
                            </section>
                            <section>
                                <div className="pc">
                                    <h3>2016.03</h3>
                                    <p>남진철거 설립 - 폐기물 처리 및 운반 시스템 구축 - "원스톱 철거 서비스 완성" </p>
                                </div>
                                <div className="mo display-flex">
                                    <h3>2016</h3>
                                    <p>폐기물 처리 시스템 구축</p>
                                </div>
                            </section>
                            <section>
                                <div className="pc">
                                    <h3>2018.07</h3>
                                    <p>남진철거 설립 - 상가·주거공간 인테리어 철거 전문화 - "분야별 전문팀 운영" </p>
                                </div>
                                <div className="mo display-flex">
                                    <h3>2018</h3>
                                    <p>상가·주거공간 철거 전문팀 운영</p>
                                </div>
                            </section>
                            <section>
                                <div className="pc">
                                    <h3>2020.05</h3>
                                    <p>남진철거 설립 - 전국 단위 현장 확대 - "전국 어디서나 동일한 품질 제공" </p>
                                </div>
                                <div className="mo display-flex">
                                    <h3>2020</h3>
                                    <p>전국 단위 철거 서비스 확대 </p>
                                </div>
                            </section>
                            <section>
                                <div className="pc">
                                    <h3>2022.11</h3>
                                    <p>남진철거 설립 - 원상복구 공사 서비스 강화 - "철거부터 복구까지 한 번에"</p>
                                </div>
                                <div className="mo display-flex">
                                    <h3>2022</h3>
                                    <p>원상복구 공사팀 신설</p>
                                </div>
                            </section>
                            <section>
                                <div className="pc">
                                    <h3>2024.03</h3>
                                    <p>안전관리 강화 및 내부 교육 시스템 도입 - "사고 없는 현장 실현"</p>
                                </div>
                                <div className="mo display-flex">
                                    <h3>2024</h3>
                                    <p>안전관리 시스템 강화</p>
                                </div>
                            </section>
                            <section>
                                <div className="pc">
                                    <h3>2025</h3>
                                    <p>현재 전국 각지 철거 및 복구 프로젝트 진행 중</p>
                                </div>
                                <div className="mo display-flex">
                                    <h3>2025</h3>
                                    <p>현재 전국 현장 진행 중</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </article>
            <InquireCommon />
        </>
    )
}