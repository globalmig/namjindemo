import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>

            <div>
                <div>
                    <div className="display-flex-flow">
                        <h2>남진철거</h2>
                        <h2>철거 공사 문의. 010-4691-7723</h2>
                    </div>
                </div>
                <div className="display-flex-flow">
                    <ul>
                        <li>상호명: 남진철거</li>
                        <li>대표이사 : 김창남</li>
                        <li>사업자번호 : 415-07-75435</li>
                        <li>주소 : 서울특별시 중랑구 공릉로 12가길 52-2(목동)</li>
                    </ul>
                    <p>Copyright ©2025. 남진철거. All rights reserved.</p>
                </div>
            </div>

            <div>
                <div>
                    <Link href="tel:010-4691-7723">
                        <Image src="/icons/tel.png" alt="전화문의" width={70} height={70} />
                    </Link>
                </div>
                <div>
                    <Link href="/public">
                        <Image src="/icons/kakao.png" alt="카카오톡 문의" width={70} height={70} />
                    </Link>
                </div>
            </div>

        </footer>
    )
}