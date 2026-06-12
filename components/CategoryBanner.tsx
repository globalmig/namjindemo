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
        <div 
            style={{backgroundImage: `url(${categoryName.banner})`}}
            className={`bg-cover bg-no-repeat w-full h-75 relative text-center
                        pc:h-125`}>
            <div className="absolute w-[90%] top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                <h1 className="pc:text-[3.2rem] pc:mb-2.5">
                    {subcategoryName}
                </h1>
                <div className="pc pc:flex justify-center gap-3.75">
                    <Image src="/icons/home.png" alt="홈으로 이동" className="w-5 h-auto" width={20} height={18} />
                    <Image src="/icons/pagination_next.png" alt="카테고리분류" className="w-2 h-auto my-auto mx-0 invert" width={10} height={15} />
                    <p className="text-[1.3rem]">{categoryName.title}</p>
                    {subcategoryName && subcategoryName ==="견적문의"
                    ?
                    <></>
                    :
                    <>
                    <Image src="/icons/pagination_next.png" alt="카테고리분류" className="w-2 h-auto my-auto mx-0 invert" width={10} height={15} />
                    <p className="text-[1.3rem]">{subcategoryName}</p>
                    </>
                }
                </div>
            </div>
        </div>
    )
}