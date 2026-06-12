import CategoryBanner from "@/components/CategoryBanner"
import InquireForm from "@/components/InquireForm"

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