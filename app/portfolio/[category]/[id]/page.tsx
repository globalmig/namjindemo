import type { Metadata } from "next";
import InquireCommon from "@/components/InquireCommon";
import PortfolioLayout from "@/components/PortfolioDetailLayout";
import { PortfolioData } from "@/data/portfolio";

type Props = {
    params: Promise<{ category: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category, id } = await params;
    const detail = PortfolioData.find(p => p.url === category && p.id === Number(id));
    if (!detail) return {};

    return {
        title: `${detail.name} 시공사례`,
        description: `${detail.name} - 남진철거가 진행한 ${detail.category} 시공 사진을 확인해보세요.`,
    };
}

export default function PortfolioDetailPage() {
    return(
        <>
        <PortfolioLayout/>
        <InquireCommon/>
        </>
    )
}