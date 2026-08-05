import type { Metadata } from "next";
import CategoryBanner from "@/components/CategoryBanner"
import InquireForm from "@/components/InquireForm"

export const metadata: Metadata = {
    title: "견적문의",
    description: "전국 아파트·주택·상가 철거, 폐기물 처리 무료 견적 상담. 전화 010-4691-7723 또는 온라인으로 빠르게 문의하세요.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function formPage() {
 
    return (
        <>
            <CategoryBanner/>
            <article>
                <div className="relative">
                    <InquireForm/>
                </div>
            </article>
        </>
    )
}