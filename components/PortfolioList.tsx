'use client'

import { PortfolioData } from "@/data/portfolio"
import PortfolioItem from "./PortfolioItem"
import { usePathname } from "next/navigation"
import { CATEGORY_MAP } from "@/data/category";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from "./Skeleton";

export default function PortfolioList() {

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const mainCategory = pathnameSplit[0];
    const pathCategory = pathnameSplit[1];
    const portfolioKey = CATEGORY_MAP[mainCategory];
    const [loading, setLoading] = useState<boolean>(true);

    const isPathnameBusiness = mainCategory === "business";

    const [startPage, setStartPage] = useState(1);
    const dataPerPage = 4;

    const filter = portfolioKey?.categories?.find(c => c.url === pathCategory)?.name;
    const filterData = filter
        ? PortfolioData.filter(p => p.category === filter)
        : PortfolioData;

    const dataCount = filterData.length;
    const startIndex = (startPage - 1) * dataPerPage;
    const currentData = filterData.slice(startIndex, startIndex + dataPerPage);

    // 최종 portfolio
    const displayedData = isPathnameBusiness
        ? PortfolioData.filter(p => p.url === pathCategory).slice(0, 4)
        : currentData;

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer); 
    }, [pathname]);

     if (loading) {
        return (
            <div className="display-flex-flow pc:justify-start pc:gap-9.25">
                {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton key={index} className="w-[48%] max-w-145 h-40 rounded-2xl pc:h-120 pc:rounded-4xl"/>
                ))}
            </div>
        );
    }
    if (displayedData.length === 0) return <div className="loading">해당 카테고리의 제품이 존재하지 않습니다.</div>


    return (
        <>
            <div>
                <div className="pc:text-center">
                    <div className="display-flex-flow">
                        {displayedData.map(p => (
                            <section key={p.id}
                                className="w-[48%] max-w-145 mb-10">
                                <PortfolioItem data={p} />
                            </section>
                        ))}
                    </div>
                    {isPathnameBusiness ?
                        <button className="bg-[#555] p-3.75 w-full text-center hover:bg-blue
                                        pc:w-1/2 pc:p-5 pc:text-[1.2rem] pc:mt-12.5">
                            <Link href={`/portfolio/${pathCategory}`} className="text-white">더보기</Link>
                        </button>
                        :
                        <Pagination dataCount={dataCount} dataPerPage={dataPerPage} setStartPage={setStartPage} />
                    }
                </div>
            </div>
        </>
    )
}