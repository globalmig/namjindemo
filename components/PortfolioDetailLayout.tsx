"use client"
import { CATEGORY_MAP } from "@/data/category";
import { PortfolioData } from "@/data/portfolio";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation"
import { useRouter } from "next/navigation";

export default function PortfolioLayout() {

    const pathname = usePathname();
    const wastePathname = pathname.startsWith("/portfolio/waste");
    const restorationPathname = pathname.startsWith("/portfolio/restoration");
    const params = useParams();
    const { category, id } = params;
    const detailId = Number(id);

    const validCategories = CATEGORY_MAP.portfolio.categories?.map(c => c.url) ?? [];
    const categoryValue = Array.isArray(category) ? category[0] : category || "";

    const filterList = validCategories.includes(categoryValue)
        ? PortfolioData.filter(p => p.url === categoryValue)
        : [];

    const detailIndex = filterList.findIndex(p => p.id === detailId);
    const detail = filterList[detailIndex];

    const prev = filterList[detailIndex - 1];
    const next = filterList[detailIndex + 1];

    const goDetail = (targetIndex: number) => {
        const target = filterList[targetIndex];
        router.push(`/portfolio/${category}/${target.id}`);
    };

    const router = useRouter();

    if (!detail) return (
        <article className="loading">
            <div>
                상세내용을 불러오는 중입니다. <br /> 잠시만 기다려주세요.
            </div>
        </article>
    )

    return (
        <article className="portfolio-detail">
            <div>
                <div>
                    <p>시공사례</p>
                    <h2>{detail.name}</h2>
                </div>
                <div>
                    {wastePathname ?
                        <section>
                            <div>
                                <Image src="/images/waste_ing.jpg" alt="폐기물 처리 진행" width={1366} height={200} />
                            </div>
                            {detail.before && detail.before.map((d, index) =>
                                <div key={index}>
                                    <Image src={d} alt={`폐기물 처리${index}`} width={1366} height={1000} />
                                </div>
                            )}
                            {detail.ing && detail.ing.map((d, index) =>
                                <div key={index}>
                                    <Image src={d} alt={`폐기물 처리${index}`} width={1366} height={1000} />
                                </div>
                            )}
                            {detail.end && detail.end.map((d, index) =>
                                <div key={index}>
                                    <Image src={d} alt={`폐기물 처리${index}`} width={1366} height={1000} />
                                </div>
                            )}
                        </section>
                        : restorationPathname ?
                        <>
                            {detail.before && <section>
                                <div>
                                    <Image src="/images/restoration_before.jpg" alt="원상복구 전 모습" width={1366} height={200} />
                                </div>
                                {detail.before.map((d, index) =>
                                    <div key={index}>
                                        <Image src={d} alt={`원상복구 전 모습${index}`} width={1366} height={1000} />
                                    </div>
                                )}
                            </section>}
                            {detail.end && <section>
                                <div>
                                    <Image src="/images/restoration_after.jpg" alt="원상복구 진행" width={1366} height={200} />
                                </div>
                                {detail.end.map((d, index) =>
                                    <div key={index}>
                                        <Image src={d} alt={`원상복구 진행${index}`} width={1366} height={1000} />
                                    </div>
                                )}
                            </section>}
                        </> :
                        <>
                            {detail.before && <section>
                                <div>
                                    <Image src="/images/demo_before.jpg" alt="철거 전 모습" width={1366} height={200} />
                                </div>
                                {detail.before.map((d, index) =>
                                    <div key={index}>
                                        <Image src={d} alt={`철거 전 모습${index}`} width={1366} height={1000} />
                                    </div>
                                )}
                            </section>}
                            {detail.ing && <section>
                                <div>
                                    <Image src="/images/demo_ing.jpg" alt="철거 진행 모습" width={1366} height={200} />
                                </div>
                                {detail.ing.map((d, index) =>
                                    <div key={index}>
                                        <Image src={d} alt={`철거 진행 모습${index}`} width={1366} height={1000} />
                                    </div>
                                )}
                            </section>}
                            {detail.end && <section>
                                <div>
                                    <Image src="/images/demo_after.jpg" alt="철거 후 모습" width={1366} height={200} />
                                </div>
                                {detail.end.map((d, index) =>
                                    <div key={index}>
                                        <Image src={d} alt={`철거 후 모습${index}`} width={1366} height={1000} />
                                    </div>
                                )}
                            </section>}
                        </>
                    }
                </div>
                <div>
                    <div>
                        {prev &&
                            <p onClick={() => goDetail(detailIndex - 1)}><span>이전 사례</span> {prev.name}</p>
                        }
                        {next &&
                            <p onClick={() => goDetail(detailIndex + 1)}><span>다음 사례</span> {next.name} </p>
                        }
                    </div>
                    <button onClick={() => router.push(`/portfolio/${categoryValue}`)}>
                        목록
                    </button>
                </div>
            </div>
        </article>
    )
}