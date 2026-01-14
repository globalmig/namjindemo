interface ServiceProps {
  title: string,
  subTitle: string,
  content?: string,
  clasName: string,
}

export default function Service({ title, subTitle, content, clasName }: ServiceProps) {

  const isCommercial = clasName === "commercial";
  const isSurpport = clasName === "with-namjin";

  return (
    <article className={`home-7 ${clasName}`}>
      <div>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <h4>{subTitle}</h4>
        <p>{content}</p>
        {isCommercial &&
          <ul className="commercial_list">
            <li><span>[서류 작성 지원]</span><br />필요한 모든 신청서류를 전문가가 꼼꼼히 작성</li>
            <li><span>[신속한 제출]</span><br />제출 과정까지 논스톱 처리, 지원금 수령까지 빠르게</li>
            <li><span>[철거와 동시에 진행]</span><br />상가 철거 일정과 맞춰 지원금 절차를 동시에 진행</li>
            <li><span>[추가 비용 부담 없음]</span><br />지원금 신청 과정은 철거 서비스와 함께 안전하게 진행</li>
            <li>* 폐업 절차와 철거를 동시에 진행하며, 소상공인 고객님께 시간과 비용 부담을 최소화합니다.</li>
          </ul>
        }
        {isSurpport &&
          <ul className="surpport_list">
            <li><span>[원스톱 지원]</span><br />신청서 작성부터 제출까지 모든 과정 지원</li>
            <li><span>[서류 누락 위험 감소]</span><br />자격 미충족으로 인한 탈락 방지</li>
            <li><span>[최대 지원금 확보]</span><br />점포 철거비 부담 최소화</li>
            <li><span>[재기 지원 프로그램 기회 확보]</span><br />폐업 이후 새 출발 준비</li>
          </ul>
        }
      </div>
    </article>
  )
}