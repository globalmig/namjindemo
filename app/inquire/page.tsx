import CategoryBanner from "@/components/CategoryBanner"
import InquireForm from "@/components/InquireForm"

export default function formPage() {
 
    return (
        <>
            <CategoryBanner/>
            <article className="inquire">
                <div>
                    <InquireForm/>
                </div>
            </article>
        </>
    )
}