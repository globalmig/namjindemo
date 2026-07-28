import Image from "next/image";

export default function Home1() {
    return (
        <article>
            <div className="text-center">
                <div>
                    <h2>왜 <span className="text-blue">남진철거</span>일까요?</h2>
                    <h3 className="text-[1.2rem] mt-2.5 pc:text-[2rem] mb-10 pc:mb-20">남진철거는 다양한 현장 경험과 전문성을 가지고 있습니다.</h3>
                    <div>
                        <Image
                            src="/images/demolition_1.jpg"
                            alt="전국 아파트·주택·상가 철거 전문 업체"
                            className="w-full h-50 object-cover rounded-lg mb-5
                                            pc:w-[85%] pc:h-125 pc:my-0 pc:mx-auto pc:object-cover pc:rounded-4xl pc:mb-5"
                            width={1366}
                            height={250} />
                    </div>
                    <p className="mt-10 mb-5 pc:text-[1.3rem] pc:mt-15">
                        상가(카페, 식당, 사무실, 술집, 미용실, 네일샵, 헬스장, 병원 등)부터<br />주거공간(아파트, 주택, 빌라)에 이르기까지 <span className="text-blue font-bold">인테리어 내부 철거 작업</span>을 전문적으로 수행합니다.
                    </p>
                    <p className="pc:text-[1.3rem]">
                        또한, 철거 후 발생하는 폐기물 처리까지 전 지역에서 책임 있게 도와드리고 있습니다.
                    </p>
                </div>
            </div>
        </article>
    )
}