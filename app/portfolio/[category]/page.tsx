import CategoryBanner from "@/components/CategoryBanner";
import InquireCommon from "@/components/InquireCommon";
import PortfolioList from "@/components/PortfolioList";

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