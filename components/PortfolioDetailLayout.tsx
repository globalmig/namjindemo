"use client"
import { CATEGORY_MAP } from "@/data/category";
import { PortfolioData } from "@/data/portfolio";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

export default function PortfolioLayout() {

    const [loading, setLoading] = useState<boolean>(true);
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

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <article className="bg-[#f7f7f8]">
            <div className="pt-25">
                <div className="text-center mt-17.5 mb-25 pc:mb-37.5">
                    <p>시공사례</p>
                    <h2 className="before:content-[''] before:w-10 before:my-5 before:mx-auto
                    before:block before:border-t before:border-black
                    pc:text-[2rem]">{detail.name}</h2>
                </div>
                {loading ?
                    Array.from({ length: 4 }).map((_, index) => (
                        <Skeleton key={index} className="w-full max-w-250 my-10 mx-auto h-100 pc:h-200 pc:my-20" />
                    )) :
                    <div className="max-w-250 my-0 mx-auto">
                        {wastePathname ?
                            <section className="my-10 pc:my-20">
                                <div className="my-3.75 pc:my-7.5">
                                    <Image
                                        src="/images/waste_ing.jpg"
                                        alt="폐기물 처리 진행"
                                        className="w-full h-auto"
                                        width={1366}
                                        height={200} />
                                </div>
                                {detail.before && detail.before.map((d, index) =>
                                    <div key={index}
                                        className="my-3.75 pc:my-7.5">
                                        <Image
                                            src={d}
                                            alt={`폐기물 처리${index}`}
                                            className="w-full h-auto"
                                            width={1366}
                                            height={1000} />
                                    </div>
                                )}
                                {detail.ing && detail.ing.map((d, index) =>
                                    <div key={index}
                                        className="my-3.75 pc:my-7.5">
                                        <Image
                                            src={d}
                                            alt={`폐기물 처리${index}`}
                                            className="w-full h-auto"
                                            width={1366}
                                            height={1000} />
                                    </div>
                                )}
                                {detail.end && detail.end.map((d, index) =>
                                    <div key={index}
                                        className="my-3.75 pc:my-7.5">
                                        <Image
                                            src={d}
                                            alt={`폐기물 처리${index}`}
                                            className="w-full h-auto"
                                            width={1366}
                                            height={1000} />
                                    </div>
                                )}
                            </section>
                            : restorationPathname ?
                                <>
                                    {detail.before &&
                                        <section className="my-10 pc:my-20">
                                            <div className="my-3.75 pc:my-7.5">
                                                <Image
                                                    src="/images/restoration_before.jpg"
                                                    alt="원상복구 전 모습"
                                                    className="w-full h-auto"
                                                    width={1366}
                                                    height={200} />
                                            </div>
                                            {detail.before.map((d, index) =>
                                                <div key={index}
                                                    className="my-3.75 pc:my-7.5">
                                                    <Image
                                                        src={d}
                                                        alt={`원상복구 전 모습${index}`}
                                                        className="w-full h-auto"
                                                        width={1366}
                                                        height={1000} />
                                                </div>
                                            )}
                                        </section>
                                    }
                                    {detail.end &&
                                        <section className="my-10 pc:my-20">
                                            <div className="my-3.75 pc:my-7.5">
                                                <Image
                                                    src="/images/restoration_after.jpg"
                                                    alt="원상복구 진행"
                                                    className="w-full h-auto"
                                                    width={1366}
                                                    height={200} />
                                            </div>
                                            {detail.end.map((d, index) =>
                                                <div key={index}
                                                    className="my-3.75 pc:my-7.5">
                                                    <Image
                                                        src={d}
                                                        alt={`원상복구 진행${index}`}
                                                        className="w-full h-auto"
                                                        width={1366}
                                                        height={1000} />
                                                </div>
                                            )}
                                        </section>
                                    }
                                </> :
                                <>
                                    {detail.before &&
                                        <section className="my-10 pc:my-20">
                                            <div className="my-3.75 pc:my-7.5">
                                                <Image
                                                    src="/images/demo_before.jpg"
                                                    alt="철거 전 모습"
                                                    className="w-full h-auto"
                                                    width={1366}
                                                    height={200} />
                                            </div>
                                            {detail.before.map((d, index) =>
                                                <div key={index}
                                                    className="my-3.75 pc:my-7.5">
                                                    <Image
                                                        src={d}
                                                        alt={`철거 전 모습${index}`}
                                                        className="w-full h-auto"
                                                        width={1366}
                                                        height={1000} />
                                                </div>
                                            )}
                                        </section>}
                                    {detail.ing &&
                                        <section className="my-10 pc:my-20">
                                            <div className="my-3.75 pc:my-7.5">
                                                <Image
                                                    src="/images/demo_ing.jpg"
                                                    alt="철거 진행 모습"
                                                    className="w-full h-auto"
                                                    width={1366}
                                                    height={200} />
                                            </div>
                                            {detail.ing.map((d, index) =>
                                                <div key={index}
                                                    className="my-3.75 pc:my-7.5">
                                                    <Image
                                                        src={d}
                                                        alt={`철거 진행 모습${index}`}
                                                        className="w-full h-auto"
                                                        width={1366}
                                                        height={1000} />
                                                </div>
                                            )}
                                        </section>}
                                    {detail.end &&
                                        <section className="my-10 pc:my-20">
                                            <div className="my-3.75 pc:my-7.5">
                                                <Image
                                                    src="/images/demo_after.jpg"
                                                    alt="철거 후 모습"
                                                    className="w-full h-auto"
                                                    width={1366}
                                                    height={200} />
                                            </div>
                                            {detail.end.map((d, index) =>
                                                <div
                                                    key={index}
                                                    className="my-3.75 pc:my-7.5">
                                                    <Image
                                                        src={d}
                                                        alt={`철거 후 모습${index}`}
                                                        className="w-full h-auto"
                                                        width={1366}
                                                        height={1000} />
                                                </div>
                                            )}
                                        </section>}
                                </>
                        }
                    </div>
                }
                <div className="mt-20">
                    <div>
                        {prev &&
                            <p className="cursor-pointer py-2.5 border-b border-[#ccc] hover:bg-[#eee]
                                            pc:py-5 pc:text-[1.1rem]"
                                onClick={() => goDetail(detailIndex - 1)}>
                                <span className="text-blue pc:mr-3.75">이전 사례</span> {prev.name}
                            </p>
                        }
                        {next &&
                            <p className="cursor-pointer py-2.5 hover:bg-[#eee] pc:py-5 pc:text-[1.1rem]"
                                onClick={() => goDetail(detailIndex + 1)}>
                                <span className="text-blue pc:mr-3.75">다음 사례</span> {next.name}
                            </p>
                        }
                    </div>
                    <button
                        className="mt-7.5 py-1.25 px-6.25 text-white bg-blue cursor-pointer hover:bg-[#aaa]
                        pc:mt-10 pc:py-2 pc:px-8.75 pc:text-[1rem]"
                        onClick={() => router.push(`/portfolio/${categoryValue}`)}>
                        목록
                    </button>
                </div>
            </div>
        </article>
    )
}