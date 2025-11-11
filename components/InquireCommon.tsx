import Link from "next/link";

export default function InquireCommon() {
    return (
        <div className="inquire-section">
            <div>
                <h1>남진철거와 함께 <br/>건축주의 꿈을 실현하십시오.</h1>
                <button>
                    <Link href="/inquire">문의하기</Link>
                </button>
            </div>
        </div>
    )
}