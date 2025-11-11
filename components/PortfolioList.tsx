'use client'

import { PortfolioData } from "@/data/portfolio"
import PortfolioItem from "./PortfolioItem"
import { usePathname } from "next/navigation"
import { CATEGORY_MAP } from "@/data/category";
import Pagination from "./Pagination";
import { useState } from "react";
import Link from "next/link";

export default function PortfolioList() {

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const mainCategory = pathnameSplit[0];
    const pathCategory = pathnameSplit[1];
    const portfolioKey = CATEGORY_MAP[mainCategory];

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

    const displayedData = isPathnameBusiness
        ? PortfolioData.filter(p => p.url === pathCategory).slice(0,4)
        : currentData;

    return (
        <>
            <div className="portfolio">
                <div>
                    <div className="display-flex-flow">
                        {displayedData.map(p => (
                            <section key={p.id}>
                                <PortfolioItem data={p} />
                            </section>
                        ))}
                    </div>
                    {isPathnameBusiness ? <button>
                        <Link href={`/portfolio/${pathCategory}`}>더보기</Link>
                    </button>
                        : <Pagination dataCount={dataCount} dataPerPage={dataPerPage} setStartPage={setStartPage} currentPage={1} />
                    }
                </div>
            </div>
        </>
    )
}