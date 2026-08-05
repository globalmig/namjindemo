import type { Metadata } from "next";
import CategoryBanner from "@/components/CategoryBanner";
import InquireCommon from "@/components/InquireCommon";
import PortfolioList from "@/components/PortfolioList";
import { CATEGORY_MAP } from "@/data/category";

type Props = {
    params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params;
    const name = CATEGORY_MAP.portfolio.categories?.find(c => c.url === category)?.name;
    if (!name) return {};

    return {
        title: `${name} 시공사례`,
        description: `남진철거가 진행한 ${name} 시공 전/후 사진을 확인해보세요.`,
    };
}

export default function PortfolioPage() {

    return(
        <>
        <CategoryBanner/>
        <article>
            <PortfolioList/>
        </article>
        <InquireCommon/>
        </>
    )
}