import CategoryBanner from "@/components/CategoryBanner";
import InquireCommon from "@/components/InquireCommon";

export default function IntroducePage() {
    // 회사 소개 및 연혁
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