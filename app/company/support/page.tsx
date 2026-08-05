import type { Metadata } from "next";
import CategoryBanner from "@/components/CategoryBanner";
import InquireCommon from "@/components/InquireCommon";
import Process from "@/components/Process";
import Service from "@/components/Service";
import Image from "next/image";

export const metadata: Metadata = {
    title: "폐업 정부 지원 안내",
    description: "소상공인 폐업 시 최대 600만원 점포 철거비 정부 지원. 남진철거가 서류 작성부터 제출까지 원스톱으로 도와드립니다.",
};

const supportData = [
    {
        id: "전액부담",
        imgName: "전액부담.png",
        alt: "철거비 전액 부담",
        width: 174,
        height: 174,
        title: <>철거비를<br />전액 부담해야 함</>,
        desc: "수백만원 부담",
    },
    {
        id: "재정적부담",
        imgName: "재정적부담.png",
        alt: "재정적 부담 증가",
        width: 215,
        height: 160,
        title: <>세무 정리·채무 조정 등<br />추가 비용 발생</>,
        desc: "재정적 부담 증가",
    },
    {
        id: "기회상실",
        imgName: "기회상실.png",
        alt: "재기 지원 프로그램 기회 상실",
        width: 158,
        height: 176,
        title: <>재기 지원 프로그램<br />기회 상실</>,
        desc: "새 출발 어려움",
    },
];

export default function SupportPage() {
    return (
        <>
            <CategoryBanner />
            <article className="support-1">
                <div>

                    <div className="text-center">
                        <h2 className="text-[1.8rem] pc:text-[3rem] pc:m-auto">폐업 부담, 남진철거가 정부 지원과 함께 덜어드립니다!</h2>
                        <h2 className="mt-7.5 mb-12.5 p-7.5 bg-[#f5f5f5] rounded-lg
                        pc:text-[2.5rem] pc:mt-12.5 pc:mb-22.5 pc:py-12.5 pc:px-7.5 pc:rounded-3xl">
                            <span className="line-height-[3.5rem] py-px px-2 rounded-lg text-white bg-blue
                            pc:text-[3rem] pc:line-height-[5.2rem] pc:py-px pc:px-3.75 pc:rounded-lg pc:text-white">최대 600만원!
                            </span>
                            <br />점포 철거비 지원, 놓치지 마세요.
                        </h2>
                        <div className="display-flex-flow gap-5">
                            <div className="display-flex m-auto pc:w-125">
                                <div className="w-[60%]">
                                    <Image
                                        src="/images/surpport_통계.png"
                                        alt="폐업 정부 지원"
                                        className="w-full h-auto my-0 mx-auto pc:w-75"
                                        width={435}
                                        height={435} />
                                </div>
                                <h2 className="text-blue mt-auto pc:flex pc:items-end pc:mb-10">
                                    <span className="text-[4rem] pc:text-[8rem]">80</span>
                                    <span className="pc:text-[3rem]">%</span>
                                    </h2>
                            </div>
                            <div className="pc:w-150 pc:my-auto pc:mx-0">
                                <h2>폐업 시 가장 큰 부담 중 하나,</h2>
                                <h2>바로 <span className="text-blue">점포 철거비</span>입니다.</h2>
                                <h3 className="mt-5">우리나라
                                    <span className="relative after:absolute after:content-[''] after:w-full after:h-2.5 after:block after:left-0 after:bottom-0.5 after:bg-[#ffea28] after:-z-1">80% 이상</span>
                                    의 소상공인이 정부 지원 제도를 몰라 지원을 받지 못하고 있습니다.
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12.5 pc:mt-25">
                        <div className="display-flex-flow">
                            <section className="w-full max-w-145 mx-auto mb-5 py-7.5 px-5 rounded-3xl border border-[#ccc] duration-300 hover:border-blue
                            pc:relative pc:mt-0 pc:mx-0 pc:mb-12.5 pc:pt-10 pc:px-7.5 pc:pb-22.5">
                                <h2 className="text-[1.2rem] pc:text-[1.5rem]">폐업 점포 철거비 지원</h2>
                                <ul className="mt-5">
                                    <li className="my-2 pc:text-[1.2rem] pc:my-2.5">
                                        <span className="font-bold">지원 금액:</span> 최대 600만원
                                    </li>
                                    <li className="my-2 pc:text-[1.2rem] pc:my-2.5">
                                        <span className="font-bold">지원 기준:</span> 평당 20만원 기준, 인테리어 철거 및 원상복구 비용 포함
                                    </li>
                                    <li className="my-2 flex gap-2.5 mt-5 pc:absolute pc:bottom-8.75">
                                        <Image
                                            src="/icons/참고.png"
                                            alt="폐업 철거비 최대 600만원 지원"
                                            className="w-5 h-auto"
                                            width={65}
                                            height={65} />
                                        <p>등록된 철거업체를 이용해야 지원 가능</p>
                                    </li>
                                </ul>
                            </section>
                            <section className="w-full max-w-145 mx-auto mb-5 py-7.5 px-5 rounded-3xl border border-[#ccc] duration-300 hover:border-blue
                            pc:relative pc:mt-0 pc:mx-0 pc:mb-12.5 pc:pt-10 pc:px-7.5 pc:pb-22.5">
                                <h2 className="text-[1.2rem] pc:text-[1.5rem]">지원 자격</h2>
                                <ul className="mt-5">
                                    <li className="my-2 pc:text-[1.2rem] pc:my-2.5">- 소상공인기본법상 소상공인</li>
                                    <li className="my-2 pc:text-[1.2rem] pc:my-2.5">- 사업자등록 후 60일 이상 경과</li>
                                    <li className="my-2 pc:text-[1.2rem] pc:my-2.5">- 임대사업장 운영 (자가 건물 제외)</li>
                                    <li className="my-2 pc:text-[1.2rem] pc:my-2.5">- 폐업 예정자 또는 폐업자</li>
                                    <li className="my-2 flex gap-2.5 mt-5 pc:absolute pc:bottom-8.75">
                                        <Image
                                            src="/icons/참고.png"
                                            alt="폐업 철거비 지원 자격"
                                            className="w-5 h-auto"
                                            width={65}
                                            height={65} />
                                        <p>단, 금융업·보험업·유흥업·사행성 업종은 제외</p>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="text-center">
                            <p className="pc:text-[1.2rem]">※ 자격 조건을 제대로 확인하지 않으면 신청이 반려될 수 있습니다.</p>
                        </div>
                    </div>
                </div>
            </article>
            <Process />
            <Service
                title="남진철거와 함께라면?"
                subTitle="정부 지원 혜택을 놓치지 마세요. 남진철거가 든든하게 함께합니다."
                clasName="with-namjin"
                bgImg="/images/main_banner_5.jpg"
            />

            <article>
                <div>
                    <h2 className="text-center mb-12.5 pc:mb-17.5">지원금 기간을 놓치면 생기는 문제</h2>
                    <div className="display-flex-flow">
                        {supportData.map((item) => (
                            <section key={item.id}
                                className="w-full max-w-95 mx-auto mb-5 py-7.5 px-5 rounded-3xl
                                    border border-[#ccc] duration-300 hover:border-blue
                                    pc:p-12.5 text-center">
                                <div>
                                    <Image
                                        src={`/icons/${item.imgName}`}
                                        alt={item.alt}
                                        className="w-auto h-11.25 mx-auto mb-3.75 pc:h-16.25"
                                        width={item.width}
                                        height={item.height}
                                    />
                                </div>
                                <div>
                                    <h3 className="mb-2.5 text-[1.1rem] pc:text-[1.2rem] pc:mt-6.25">{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </article>

            <InquireCommon />
        </>
    )
}