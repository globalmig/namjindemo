interface ServiceProps {
  title: string,
  subTitle: string,
  content?: string,
  clasName: string,
  bgImg: string,
}

export default function Service({ title, subTitle, content, clasName, bgImg }: ServiceProps) {

  const isCommercial = clasName === "commercial";
  const isSupport = clasName === "with-namjin";

  return (
    <article
    style={{ backgroundImage: `url(${bgImg})` }}
    className={`bg-no-repeat bg-cover bg-center bg-fixed w-full ${isCommercial ? 'h-175 pc:h-225' : isSupport ? 'h-125 pc:h-200' : 'h-100 pc:h-175'} relative text-center text-white`}>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] p-0">
        <h2 className="text-[1.8rem] pc:text-[3rem]" dangerouslySetInnerHTML={{ __html: title }} />
        <h4 className="mt-5 mb-2.5 bg-blue inline-block pc:text-[2rem]">{subTitle}</h4>
        <p className="pc:text-[1.8rem]">{content}</p>
        {isCommercial &&
          <ul className="mt-5 py-3.75 px-5 rounded-xs border-2 border-[#ccc] bg-[#ffffff33] text-left
              pc:w-[80%] pc:my-0 pc:mx-auto pc:mt-10 pc:p-10 pc:rounded-lg pc:border">
            <li className="my-2.5 pc:my-5 pc:text-[1.2rem]"><span className="font-bold">[서류 작성 지원]</span><br />필요한 모든 신청서류를 전문가가 꼼꼼히 작성</li>
            <li className="my-2.5 pc:text-[1.2rem]"><span className="font-bold">[신속한 제출]</span><br />제출 과정까지 논스톱 처리, 지원금 수령까지 빠르게</li>
            <li className="my-2.5 pc:text-[1.2rem]"><span className="font-bold">[철거와 동시에 진행]</span><br />상가 철거 일정과 맞춰 지원금 절차를 동시에 진행</li>
            <li className="my-2.5 pc:text-[1.2rem]"><span className="font-bold">[추가 비용 부담 없음]</span><br />지원금 신청 과정은 철거 서비스와 함께 안전하게 진행</li>
            <li className="my-2.5 mt-3.75 pc:text-[1.2rem]">* 폐업 절차와 철거를 동시에 진행하며, 소상공인 고객님께 시간과 비용 부담을 최소화합니다.</li>
          </ul> 
        }
        {isSupport &&
          <ul className="mt-5 py-3.75 px-5 rounded-xs border-2 border-[#ccc] bg-[#ffffff33] text-left
              pc:w-[80%] pc:my-0 pc:mx-auto pc:mt-10 pc:p-10 pc:rounded-lg pc:border">
            <li className="my-2.5 pc:text-[1.2rem]"><span className="font-bold">[원스톱 지원]</span><br />신청서 작성부터 제출까지 모든 과정 지원</li>
            <li className="my-2.5 pc:text-[1.2rem]"><span className="font-bold">[서류 누락 위험 감소]</span><br />자격 미충족으로 인한 탈락 방지</li>
            <li className="my-2.5 pc:text-[1.2rem]"><span className="font-bold">[최대 지원금 확보]</span><br />점포 철거비 부담 최소화</li>
            <li className="my-2.5 mt-3.75 pc:text-[1.2rem]"><span className="font-bold">[재기 지원 프로그램 기회 확보]</span><br />폐업 이후 새 출발 준비</li>
          </ul>
        }
      </div>
    </article>
  )
}