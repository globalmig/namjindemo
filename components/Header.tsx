'use client'
import Image from "next/image";
import Link from "next/link";
import { CATEGORY_MAP } from "@/data/category";
import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";

export default function Header() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScroll, setIsScroll] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<string | null>(null);
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const pathname = usePathname();
    const params = useParams();
    const { id } = params;
    const category = pathname.split('/').filter(Boolean);;

    const clickMenu = category[0];

    useEffect(() => {
        if (id) {
            setIsScroll(true);
            return;
        }

        setIsScroll(window.scrollY > 50);

        const onScroll = () => {
            setIsScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [id]);

    return (
        <>
            <header className={`fixed left-0 top-0 w-full py-3.75 px-[5%]
                                border-b border-[#ffffff7f] z-10
                                ${isScroll ? 'bg-white border-b border-[#ccc]' : ''}
                                pc:py-5 pc:px-0`}>

                <div className="display-flex max-w-300 my-0 mx-auto">

                    <div>
                        <Link href='/'>
                            <Image
                                src="/icons/logo.png"
                                alt="전국 아파트·주택·상가 철거, 폐기물 처리 전문. 남진철거"
                                className={`my-auto mx-0 w-12.5 h-auto ${isScroll ? 'invert-0' : 'invert brightness-0'}`}
                                width={50}
                                height={50} />
                        </Link>
                    </div>

                    <div className="display-flex pc:w-150">
                        <nav className="pc:my-auto pc:mx-0">
                            <ul className="hidden pc:flex pc:justify-between gap-18.75">
                                {Object.entries(CATEGORY_MAP).map(([key, c]) => {
                                    return (
                                        <li key={key} onMouseEnter={() => setIsHover(key)}
                                            onMouseLeave={() => setIsHover(null)}
                                            className="pc:relative">
                                            <Link href={c.categories ?
                                                `/${key}/${c.categories?.[0].url}`
                                                : `/${key}`}
                                                className={`${clickMenu === key ?
                                                    'text-blue'
                                                    : 'text-white'}
                                                    ${isScroll ? 'pc:text-black' : 'text-black pc:text-white'}
                                                    pc:text-[1.2rem] pc:font-bold
                                                `}
                                            >{c.title}
                                            </Link>
                                            {c.categories && (
                                                <ul className={`${isHover === key ?
                                                    'pc:opacity-100 pc:visibility-hidden'
                                                    : 'pc:opacity-0 pc:visibility-visible'} 
                                                                pc:absolute pc:top-12.5 pc:w-75 pc:bg-white pc:duration-300`}>
                                                    {c.categories.map((sub) => (
                                                        <li key={sub.url}>
                                                            <Link href={`/${key}/${sub.url}`}
                                                                onClick={() => {
                                                                    setIsOpen(false); setIsHover(null)
                                                                }
                                                                }
                                                                className="pc:text-[1rem] pc:block pc:p-3.75 pc:w-full
                                                                pc:hover:bg-blue pc:hover:text-white">
                                                                {sub.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>

                                    )
                                })}
                            </ul>
                            <div className={`absolute bg-white h-screen w-[80%] top-0 duration-500
                                            ${isOpen ? 'right-0 z-50' : '-right-full overflow-x-hidden z-20'}
                                            pc:w-[30%]`}>
                                <ul>
                                    {Object.entries(CATEGORY_MAP).map(([key, c]) => (
                                        <li key={key}>
                                            <div className="display-flex p-5"
                                                onClick={() => setOpenMenu(openMenu === key ? null : key)}>
                                                {c.categories && c.categories.length > 0 ? (
                                                    <>
                                                        <p className="text-[1.1rem] font-bold duration-300">{c.title}</p>
                                                        <div className="my-auto mx-0">
                                                            <Image
                                                                src="/icons/nav_sub.png"
                                                                alt="서브메뉴 열기"
                                                                width={22}
                                                                height={12}
                                                            />
                                                        </div>
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={`/${key}`}
                                                        className="text-[1.1rem] font-bold duration-300"
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            setIsHover(null)
                                                        }
                                                        }>{c.title}</Link>
                                                )}
                                            </div>
                                            {c.categories && (
                                                <ul className={`overflow-hidden transform duration-800
                                                                ${openMenu === key ?
                                                        "max-h-125 opacity-100 translate-y-0"
                                                        : "max-h-0 opacity-0 -translate-y-1.5"}`}>
                                                    {c.categories.map((sub) => (
                                                        <li key={sub.url}>
                                                            <Link
                                                                href={`/${key}/${sub.url}`}
                                                                className="text-[1rem] py-5 px-7.5 text-[#555] block hover:bg-blue hover:text-white"
                                                                onClick={() => {
                                                                    setIsOpen(false);
                                                                    setIsHover(null);
                                                                    setOpenMenu(null)
                                                                }
                                                                }>{sub.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                <div onClick={() => setIsOpen(false)}
                                    className="absolute top-5 -left-12.5 cursor-pointer">
                                    <Image src="/icons/nav_close.png" alt="메뉴 닫기" className="pc:w-5 pc:h-5" width={30} height={30} />
                                </div>
                            </div>
                        </nav>
                        <div onClick={() => setIsOpen(true)}
                            className={`cursor-pointer my-auto mx-0 ${isScroll ? "invert" : ""}`}>
                            <Image src="/icons/nav.png" alt="메뉴열기" width={30} height={22} />
                        </div>
                    </div>
                    <div className="black-bg" style={{ display: isOpen ? "block" : "none" }}></div>
                </div>
            </header>
        </>
    )
}