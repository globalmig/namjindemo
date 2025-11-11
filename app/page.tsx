'use client'
import InquireCommon from "@/components/InquireCommon";
import PortfolioList from "@/components/PortfolioList";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

export default function Home() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-out",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '50px',
        }
      }
    ]
  };



  return (
    <>

      <main>
        <div>
          <div>
            <p>Demolish Safely, Rebuild with Trust</p>
            <h1>안전하게 철거하고, 믿음으로 다시 세웁니다.</h1>
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
            <h1>왜 <span>남진철거</span>일까요?</h1>
            <h3>남진철거는 다양한 현장 경험과 전문성을 가지고 있습니다.</h3>
            <div>
              <Image src="/images/demolition_1.png" alt="남진철거 소개" width={1366} height={250} />
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
          <h1><span>보이지 않는 곳까지</span><br />책임지는 철거</h1>
          <h3>확실한 마감, 철저한 정리까지!<br />눈에 보이지 않는 부분까지 꼼꼼하게 책임집니다.</h3>
        </div>
        <div>
          <Slider {...settings} className="slider">
            <div>
              <Image src="/images/slider_1.jpg" alt="image" width={1366} height={1025} />
            </div>
            <div>
              <Image src="/images/slider_2.jpg" alt="image" width={1366} height={1025} />
            </div>
            <div>
              <Image src="/images/slider_4.jpg" alt="image" width={1366} height={1025} />
            </div>
            <div>
              <Image src="/images/slider_5.jpg" alt="image" width={1366} height={1025} />
            </div>
            <div>
              <Image src="/images/slider_6.jpg" alt="image" width={1366} height={1025} />
            </div>
            <div>
              <Image src="/images/slider_7.jpg" alt="image" width={1366} height={1025} />
            </div>
          </Slider>
        </div>
      </article>

      <article className="home-3">
        <div>
          <h1>남진철거를 믿고 맡길 수 있는 이유</h1>
          <div className="display-flex-flow">
            <section>
              <div>
                <Image src="/icons/trust_1.png" alt="아이콘" width={171} height={190} />
              </div>
              <p>10년 이상 축적된<br />철거 및 폐기물 처리 경험</p>
            </section>
            <section>
              <div>
                <Image src="/icons/trust_2.png" alt="아이콘" width={210} height={123} />
              </div>
              <p>안전 지침 및 법규 준수로<br />사고 없는 시공</p>
            </section>
            <section>
              <div>
                <Image src="/icons/trust_3.png" alt="아이콘" width={163} height={177} />
              </div>
              <p>전 지역 철거<br />및 폐기물 처리 가능</p>
            </section>
            <section>
              <div>
                <Image src="/icons/trust_4.png" alt="아이콘" width={200} height={179} />
              </div>
              <p>무료 방문 견적<br />& 합리적 비용 제시</p>
            </section>
          </div>
        </div>
      </article>

      <article className="home-7">
        <div>
          <h1>안심하고 맡기는<br />폐업 지원금 서비스</h1>
          <h4>소상공인 폐업 지원금 서류 작성부터 제출까지!</h4>
          <p>어렵고 복잡한 절차 없이 논스톱으로 빠르고 편리하게 도와드립니다.</p>
        </div>
      </article>

      <article className="home-4">
        <div>
          <div className="display-flex-flow">
            <div>
              <h3>SERVICE</h3>
              <h1>핵심 사업분야</h1>
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
                  <Image src="/images/아파트철거.jpg" alt="아파트/주택 철거" width={500} height={300} />
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
            <h1>결과로 증명합니다.</h1>
          </div>
          <PortfolioList />
        </div>
      </article>

      <InquireCommon />
    </>
  );
}
