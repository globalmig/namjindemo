import dynamic from "next/dynamic";

const Slide = dynamic(() => import("./Slide"));

export default function Home2() {
    return (
        <article className="home2 bg-[#f7f7f8] pt-5 pc:pt-20">
            <div className="text-center pt-12.5 pb-17.5 pc:pb-0">
                <h2>합리적인 견적과<br />믿을 수 있는 서비스</h2>
                <h3 className="text-[1.2rem] w-[90%] mt-6.25 mx-auto mb-0 pc:w-full pc:text-[2rem] pc:line-height-[2.5rem] pc:mt-15">모든 현장은 무료 방문 견적을 통해 정확하게 파악하고,<br />
                    고객님께 합리적이고 투명한 견적서를 제공합니다.<br /><br />
                    남진철거는 단순한 철거가 아닌,<br /><span className="text-blue">안전과 신뢰를 바탕으로 한 철거 서비스</span>를 약속드립니다.</h3>
            </div>
            <div className="pb-20 pc:pb-50">
                <Slide />
            </div>
        </article>
    )
}