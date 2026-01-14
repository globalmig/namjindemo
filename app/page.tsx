import InquireCommon from "@/components/InquireCommon";
import PortfolioList from "@/components/PortfolioList";
import Service from "@/components/Service";
import Slide from "@/components/Slide";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>

      <main>
        <div>
          <div>
            <p>Demolish Safely, Rebuild with Trust</p>
            <h2>안전하게 철거하고, 믿음으로 다시 세웁니다.</h2>
            <div>
              <button>
                <Link href="/inquire">빠른 견적 신청</Link>
              </button>
              <div className="mouse_scroll">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <article className="home-1">
        <div>

          <div>
            <h2>왜 <span>남진철거</span>일까요?</h2>
            <h3>남진철거는 다양한 현장 경험과 전문성을 가지고 있습니다.</h3>
            <div>
              <Image src="/images/demolition_1.png" alt="상가와 주거공간 인테리어 내부 철거" width={1366} height={250} />
            </div>
            <p>
              상가(카페, 식당, 사무실, 술집, 미용실, 네일샵, 헬스장, 병원 등)부터<br />주거공간(아파트, 주택, 빌라)에 이르기까지 <span>인테리어 내부 철거 작업</span>을 전문적으로 수행합니다.
            </p>
            <p>
              또한, 철거 후 발생하는 폐기물 처리까지 전 지역에서 책임 있게 도와드리고 있습니다.
            </p>
          </div>

        </div>
      </article>

      <article className="home-2">
        <div>
          <h2><span>합리적인 견적</span>과<br />믿을 수 있는 서비스</h2>
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
          <h2>남진철거를 믿고 맡길 수 있는 이유</h2>
          <div className="display-flex-flow">
            <section>
              <div>
                <Image src="/icons/trust_1.png" alt="철거 및 폐기물 처리 경험" width={70} height={70} />
              </div>
              <p>10년 이상 축적된<br />철거 및 폐기물 처리 경험</p>
            </section>
            <section>
              <div>
                <Image src="/icons/trust_2.png" alt="안전 사고 없는 시공" width={70} height={70} />
              </div>
              <p>안전 지침 및 법규 준수로<br />사고 없는 시공</p>
            </section>
            <section>
              <div>
                <Image src="/icons/trust_3.png" alt="전 지역 철거 및 폐기물 처리" width={70} height={177} />
              </div>
              <p>전 지역 철거<br />및 폐기물 처리 가능</p>
            </section>
            <section>
              <div>
                <Image src="/icons/trust_4.png" alt="무료 방문 견적" width={70} height={70} />
              </div>
              <p>무료 방문 견적<br />& 합리적 비용 제시</p>
            </section>
          </div>
        </div>
      </article>

      <Service
        clasName="commercial"
        title="안심하고 맡기는<br />폐업 지원금 서비스"
        subTitle="소상공인 폐업 지원금 서류 작성부터 제출까지!"
        content="어렵고 복잡한 절차 없이 논스톱으로 빠르고 편리하게 도와드립니다." />

      <article className="home-4">
        <div>
          <div className="display-flex-flow">
            <div>
              <h3>SERVICE</h3>
              <h2>핵심 사업분야</h2>
            </div>
            <div className="display-flex-flow">
              <section>
                <Link href="/business/commercial">
                  <div>
                    <Image src="/images/핵심분야_내부철거.jpg" alt="인테리어 내부 철거" width={1000} height={800} />
                  </div>
                </Link>
                <h3>인테리어 내부 철거</h3>
              </section>
              <section>
                <Link href="/business/waste">
                  <div>
                    <Image src="/images/핵심분야_폐기물처리.jpg" alt="폐기물 처리" width={1000} height={800} />
                  </div>
                </Link>
                <h3>폐기물 처리</h3>
              </section>
            </div>
          </div>
        </div>
      </article>

      <article className="home-5">
        <div>
          <h2>
            축적된 경험을 바탕으로<br />다양한 공사를 책임감 있게 수행합니다.
          </h2>
          <div className="display-flex-flow">
            <section>
              <Link href="/business/commercial">
                <div>
                  <Image src="/images/상가철거.jpg" alt="상가 철거" width={500} height={300} />
                </div>
              </Link>
              <h4>상가철거</h4>
            </section>
            <section>
              <Link href="/business/residential">
                <div>
                  <Image src="/images/아파트철거.jpg" alt="아파트, 주택 철거" width={500} height={300} />
                </div>
              </Link>
              <h4>아파트/주택철거</h4>
            </section>
            <section>
              <Link href="/business/waste">
                <div>
                  <Image src="/images/폐기물처리.jpg" alt="폐기물 철거" width={500} height={300} />
                </div>
              </Link>
              <h4>폐기물처리</h4>
            </section>
            <section>
              <Link href="/business/restoration">
                <div>
                  <Image src="/images/원상복구공사.jpg" alt="원상복구공사" width={500} height={300} />
                </div>
              </Link>
              <h4>원상복구공사</h4>
            </section>
          </div>
        </div>
      </article>

      <article className="home-6">
        <div>
          <div>
            <h3>PORTFOLIO</h3>
            <h2>결과로 증명합니다.</h2>
          </div>
          <PortfolioList />
        </div>
      </article>

      <InquireCommon />
    </>
  );
}
