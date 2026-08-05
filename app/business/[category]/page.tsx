import type { Metadata } from "next";
import BusinessLayout from "@/components/BusinessLayout";
import CategoryBanner from "@/components/CategoryBanner";
import InquireCommon from "@/components/InquireCommon";
import { BUSINESS_DATA } from "@/data/business";
import { CATEGORY_MAP } from "@/data/category";

type Props = {
    params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params;
    const data = BUSINESS_DATA.find(b => b.category === category);
    if (!data) return {};

    const name = CATEGORY_MAP.business.categories?.find(c => c.url === category)?.name ?? data.title;

    return {
        title: name,
        description: data.contents_pc,
    };
}

export default function BusinessPage() {
    return(
        <>
        <CategoryBanner/>
        <BusinessLayout/>
        <InquireCommon/>
        </>
    )
}