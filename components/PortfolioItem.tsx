'use client'

import { CATEGORY_MAP } from "@/data/category";
import { PortfolioData } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PortfolioItemProps {
    data: {
        id: number;
        name: string;
        category: string;
        thumnail: string;
        before?: string[];
        ing?: string[];
        end?: string[];
    }
}

export default function PortfolioItem({ data}: PortfolioItemProps) {

    const {id, name, thumnail} = data;

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const mainCategory = pathnameSplit[0]; // portfolio
    const pathCategory = pathnameSplit[1]; // commercial
    const portfolioKey = CATEGORY_MAP[mainCategory]; 
    const portfolioCategoryURL = portfolioKey?.categories?.find(c => c.url === pathCategory)?.url;
    const portfolioID = PortfolioData.find(p => p.id === id)?.url;

    return (
        <>
            <div>
                <Link href={`/portfolio/${portfolioCategoryURL ? portfolioCategoryURL : portfolioID }/${id}`}>
                <Image src={thumnail} alt={`${name} 대표 이미지`} width={1366} height={1000}/>
                </Link>
            </div>
            <p>{name}</p>
        </>
    )
}