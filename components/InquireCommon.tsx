'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InquireCommon() {

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = pathnameSplit[1];
    const isSupport = category === "support";

    return (
        <div 
            style={{backgroundImage: `${isSupport ? 'url(/images/inqurie_section_bg_2.jpg)' : 'url(/images/inqurie_section_bg.jpg)'}`}}
            className={`${isSupport ? 'h-125' : 'h-75'} w-full relative pc:h-150 bg-no-repeat bg-cover bg-center`}>
            {isSupport ?
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[80%]">
                    <h2>남진철거와 함께 <br />폐업 정부지원 신청하세요!</h2>
                    <h2 className="text-[1.5rem] mt-2.5">서류 준비부터 제출까지 안전하게 원스톱 지원</h2>
                    <button className="border border-white bg-[#ffffff4c] py-2.5 px-12.5 mt-7.5 hover:bg-blue hover:border-blue
                    pc:py-3.75 pc:px-17.5">
                        <Link href="/inquire"
                            className="font-bold text-white pc:text-[1.2rem]">
                            폐업 지원 상담 신청
                        </Link>
                    </button>
                    <h3 className="text-[1.2rem] mt-5">정부 지원 최대 600만원까지, 놓치지 마세요!</h3>
                </div>
                :
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[80%]">
                    <h2 className="text-[1.8rem] pc:text-[3rem]">남진철거와 함께 <br />건축주의 꿈을 실현하십시오.</h2>
                    <button className="border border-white bg-[#ffffff4c] py-2.5 px-12.5 mt-7.5 hover:bg-blue hover:border-blue
                    pc:py-3.75 pc:px-17.5">
                        <Link href="/inquire"
                            className="font-bold text-white pc:text-[1.2rem]">
                            문의하기
                        </Link>
                    </button>
                </div>
            }
        </div>
    )
}