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
    const category =pathname.split('/').filter(Boolean);;

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
            <header className={`${isScroll ? 'header-scroll' : ''}`}>

                <div className="display-flex">

                    <div>
                        <Link href='/'>
                        <Image src="/icons/logo.png" alt="홈으로" width={50} height={50}/>
                        </Link>
                    </div>

                    <div className="display-flex">
                        <nav>
                            <ul>
                                {Object.entries(CATEGORY_MAP).map(([key, c]) => {
                                    return (
                                        <li key={key} onMouseEnter={() => setIsHover(key)}
                                            onMouseLeave={() => setIsHover(null)}>
                                            <Link href={
                                                c.categories ?
                                                    `/${key}/${c.categories?.[0].url}`
                                                    : `/${key}`
                                            } style={{color: clickMenu === key ? "rgb(0, 102, 255)" : ""}}>{c.title}</Link>
                                            {c.categories && (
                                                <ul className={`${isHover === key ? 'nav-hover' : ''}`}>
                                                    {c.categories.map((sub) => (
                                                        <li key={sub.url}>
                                                            <Link href={`/${key}/${sub.url}`} onClick={() => {
                                                                setIsOpen(false); setIsHover(null)
                                                            }
                                                            }>{sub.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>

                                    )
                                })}
                            </ul>
                            <div className={`${isOpen ? 'nav-open' : 'nav-close'}`}>
                                <ul>
                                    {Object.entries(CATEGORY_MAP).map(([key, c]) => (
                                        <li key={key}>
                                            <div className="display-flex" onClick={() => setOpenMenu(openMenu === key ? null : key)}>
                                                {c.categories && c.categories.length > 0 ? (
                                                    <>
                                                        <p>{c.title}</p>
                                                        <div>
                                                            <Image
                                                                src="/icons/nav_sub.png"
                                                                alt="서브메뉴 열기"
                                                                width={22}
                                                                height={12}
                                                            />
                                                        </div>
                                                    </>
                                                ) : (
                                                    <Link href={`/${key}`}onClick={() => {
                                                                setIsOpen(false); setIsHover(null)
                                                            }
                                                            }>{c.title}</Link>
                                                )}
                                            </div>
                                            {c.categories && (
                                                <ul className={`submenu ${openMenu === key ? "sub-open" : ""}`}>
                                                    {c.categories.map((sub) => (
                                                        <li key={sub.url}>
                                                            <Link href={`/${key}/${sub.url}`} onClick={() => {
                                                                setIsOpen(false); setIsHover(null); setOpenMenu(null)
                                                            }
                                                            }>{sub.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                <div onClick={() => setIsOpen(false)}>
                                    <Image src="/icons/nav_close.png" alt="메뉴 닫기" width={30} height={30} />
                                </div>
                            </div>
                        </nav>
                        <div onClick={() => setIsOpen(true)}>
                            <Image src="/icons/nav.png" alt="메뉴열기" width={30} height={22} />
                        </div>
                    </div>
                    <div className="black-bg" style={{ display: isOpen ? "block" : "none" }}></div>
                </div>
            </header>
        </>
    )
}