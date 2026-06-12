import Image from "next/image";
import Link from "next/link";

const footerInfo = [
    "회사명: 남진철거 | 사업자등록번호: 415-07-75435",
    "본사주소 : 서울특별시 중랑구 공릉로 12가길 52-2(묵동)",
    "전화번호 : 010-4691-7723",
    "이메일 : suk48555@naver.com"
]

export default function Footer() {
    return (
        <footer className="bg-[#222] text-white pt-5 px-[5%] pb-12.5 relative
                            pc:pt-7.5 pc:px-0 pc:pb-12.5">

            <div>
                <div className="pc:border-b border-[#ccc]">
                    <div className="display-flex-flow max-w-300 my-0 mx-auto">
                        <h2 className="text-[1.5rem] w-full pb-3.75 border-b border-[#ccc] pc:w-100 pc:pb-0 pc:border-0 pc:my-auto pc:mx-0">남진철거</h2>
                        <h2 className="text-[1.5rem] my-5">철거 공사 문의. 010-4691-7723</h2>
                    </div>
                </div>
                <div className="display-flex-flow max-w-300 my-0 mx-auto">
                    <ul className="mb-7.5 pc:my-12.5">
                        {footerInfo.map((item, index) =>
                            <li key={index} className="text-[#ccc] text-[0.8rem] my-2">{item}</li>
                        )}
                    </ul>
                    <p className="text-[#ccc] text-[0.8rem] pc:my-auto pc:mx-0">Copyright ©2025. 남진철거. All rights reserved.</p>
                </div>
            </div>

            <div className="fixed bottom-12.5 right-[5%] pc:bottom-25 pc:right-20">
                <div className="rounded-full mb-3.75">
                    <Link href="tel:010-4691-7723">
                        <Image src="/icons/tel.png" alt="전화문의" className="w-full h-auto" width={50} height={50} />
                    </Link>
                </div>
                <div className="rounded-full">
                    <Link href="http://pf.kakao.com/_xavSHn/chat">
                        <Image src="/icons/kakao.png" alt="카카오톡 문의" className="w-full h-auto" width={50} height={50} />
                    </Link>
                </div>
            </div>

        </footer>
    )
}