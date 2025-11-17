'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InquireCommon() {

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = pathnameSplit[1];
    const isSurpport = category === "surpport";

    return (
        <div className={`inquire-section ${isSurpport ? "inquire-surpport" : ""}`}>
            {isSurpport ?
                <div>
                    <h1>남진철거와 함께 <br/>폐업 정부지원 신청하세요!</h1>
                    <h2>서류 준비부터 제출까지 안전하게 원스톱 지원</h2>
                    <button>
                        <Link href="/inquire">폐업 지원 상담 신청</Link>
                    </button>
                    <h3>정부 지원 최대 600만원까지, 놓치지 마세요!</h3>
                </div> :
                <div>
                    <h1>남진철거와 함께 <br />건축주의 꿈을 실현하십시오.</h1>
                    <button>
                        <Link href="/inquire">문의하기</Link>
                    </button>
                </div>
            }
        </div>
    )
}