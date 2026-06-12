import Image from "next/image";

const trustData = [
  {
    id: 1,
    alt: "철거 및 폐기물 처리 경험",
    text: <>10년 이상 축적된<br />철거 및 폐기물 처리 경험</>,
    height: 70,
  },
  {
    id: 2,
    alt: "안전 사고 없는 시공",
    text: <>안전 지침 및 법규 준수로<br />사고 없는 시공</>,
    height: 70,
  },
  {
    id: 3,
    alt: "전 지역 철거 및 폐기물 처리",
    text: <>전 지역 철거<br />및 폐기물 처리 가능</>,
    height: 177, // 기존 코드의 177 반영
  },
  {
    id: 4,
    alt: "무료 방문 견적",
    text: <>무료 방문 견적<br />& 합리적 비용 제시</>,
    height: 70,
  },
];

export default function Home3 () {
    return(
        <article className="bg-[#041631]">
        <div className="text-center text-white pc:py-50 pc:pb-70">
          <h2>남진철거를 믿고 맡길 수 있는 이유</h2>
          <div className="display-flex-flow mt-7.5 p-0 pc:mt-25">
            {trustData.map((item) => (
              <section key={item.id} className="w-full my-0 mx-auto py-10 border-b border-[#445368] last:border-b-0 last:pb-0
                      pc:w-75 pc:pt-0 pc:pb-0 pc:border-b-0 pc:border-r pc:border-[rgb(68,83,104)] pc:last:border-r-0">
                <div className="pc:h-full pc:relative">
                  <Image
                    src={`/icons/trust_${item.id}.png`}
                    alt={item.alt}
                    className="w-12.5 h-auto m-auto pc:w-17.5 pc:m-0 pc:absolute pc:top-1/2 pc:left-1/2 pc:transform pc:-translate-x-1/2 pc:-translate-y-1/2"
                    width={70}
                    height={item.height}
                  />
                </div>
                <p className="font-bold mt-7.5 pc:text-[1.2rem]">{item.text}</p>
              </section>
            ))}
          </div>
        </div>
      </article>
    )
}