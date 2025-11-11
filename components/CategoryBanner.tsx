'use client'
import { CATEGORY_MAP } from "@/data/category";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CategoryBanner() {

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);

    const mainCategory = pathnameSplit[0];
    const subCategory = pathnameSplit[1];
    const categoryName = CATEGORY_MAP[mainCategory];
    const subcategoryName = categoryName?.categories?.find(c => c.url === subCategory)?.name || categoryName?.title;


    return (
        <div className="category-banner" style={{ backgroundImage: `url(${categoryName.banner})` }}>
            <div>
                <h1>
                    {subcategoryName}
                </h1>
                <div className="pc">
                    <Image src="/icons/home.png" alt="홈 아이콘" width={20} height={18} />
                    <Image src="/icons/pagination_next.png" alt="카테고리분류" width={10} height={15} />
                    <p>{categoryName.title}</p>
                    {subcategoryName && subcategoryName ==="견적문의" ?
                    <></>
                    : <>
                    <Image src="/icons/pagination_next.png" alt="카테고리분류" width={10} height={15} />
                    <p>{subcategoryName}</p>
                    </>
                }
                </div>
            </div>
        </div>
    )
}