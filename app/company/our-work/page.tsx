import CategoryBanner from "@/components/CategoryBanner";
import InquireCommon from "@/components/InquireCommon";
import { WORK_DATA } from "@/data/work";

export default function OurworkPage() {

    return (
        <>
            <CategoryBanner />
            <article className="our-work">
                <div>
                    <div>
                        <h1>남진철거에서 진행한 현장을 소개합니다.</h1>
                    </div>
                    <div className="display-flex-flow">
                        {WORK_DATA.map(w =>
                            <section key={w.id}>
                                <h3 className="mo">{w.title_mo}</h3>
                                <h2 className="pc">{w.title_pc}</h2>
                                <p className="mo">{w.contents_mo}</p>
                                <h4 className="pc">{w.contents_pc}</h4>
                                <ul className="mo">
                                    <li>{w.date} | {w.contents_mo}</li>
                                    <li>{w.feature_mo}</li>
                                </ul>
                                <ul className="pc">
                                    <li><span>위치:</span> {w.location}</li>
                                    <li><span>기간:</span> {w.date}</li>
                                    <li><span>특징:</span></li>
                                    <li>
                                        {w.feature.map(f => <p key={f}>{f}</p>)}
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