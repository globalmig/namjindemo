import type { Metadata } from "next";
import CategoryBanner from "@/components/CategoryBanner";
import InquireCommon from "@/components/InquireCommon";
import { WORK_DATA } from "@/data/work";

export const metadata: Metadata = {
    title: "현장 소개",
    description: "남진철거가 진행한 상가, 아파트, 주택 철거 현장 사례를 소개합니다.",
};

export default function OurworkPage() {

    return (
        <>
            <CategoryBanner />
            <article>
                <div>
                    <div className="text-center mb-12.5 pc:mb-17.5">
                        <h2>남진철거에서 진행한 현장을 소개합니다.</h2>
                    </div>
                    <div className="display-flex-flow">
                        {WORK_DATA.map(w =>
                            <section key={w.id} className="w-full max-w-145 mx-auto mb-5 py-10 px-5 rounded-3xl border border-[#ccc] duration-300 hover:border-blue pc:mx-0 pc:mb-10 pc:p-10">
                                <h3 className="mo text-blue">{w.title_mo}</h3>
                                <h2 className="pc text-blue text-[1.5rem]">{w.title_pc}</h2>
                                <p className="mo font-bold mt-2 mb-1.25">{w.contents_mo}</p>
                                <h4 className="pc pc:mt-2.5 pc:mb-5">{w.contents_pc}</h4>
                                <ul className="mo mt-5">
                                    <li className="my-2">{w.date} | {w.contents_mo}</li>
                                    <li className="my-2">{w.feature_mo}</li>
                                </ul>
                                <ul className="pc">
                                    <li className="my-2.5 text-[#555]"><span className="font-bold text-black">위치:</span> {w.location}</li>
                                    <li className="my-2.5 text-[#555]"><span className="font-bold text-black">기간:</span> {w.date}</li>
                                    <li className="my-2.5 text-[#555]"><span className="font-bold text-black">특징:</span></li>
                                    <li className="my-2.5 text-[#555]">
                                        {w.feature.map(f => <p key={f} className="text-[#555] before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#aaa] before:rounded-full before:mr-2.5 before:flex-direction-column">
                                            {f}
                                        </p>)}
                                    </li>
                                </ul>
                            </section>
                        )}
                    </div>
                </div>
            </article>
            <InquireCommon />
        </>
    )
}