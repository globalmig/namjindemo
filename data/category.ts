export const CATEGORY_MAP: { [key: string]: { title: string; categories?: {name: string, url: string}[], banner: string } } = {
    company: {
        title: '회사소개',
        categories: [
            {name: "회사소개 및 연혁", url: "introduce"},
            {name: "현장 소개", url: "our-work"}
        ],
        banner: "/images/banner_company.jpg",
    },
    business: {
        title: '사업분야',
        categories: [
            {name: "상가철거", url: "commercial"},
            {name: "아파트/주택철거", url: "residential"},
            {name: "폐기물처리", url: "waste"},
            {name: "원상복구공사", url: "restoration"},
        ],
        banner: "/images/banner_business.jpg",
    },
    portfolio: {
        title: '시공사례',
        categories: [
            {name: "상가 내부 철거 전/후", url: "commercial"},
            {name: "아파트/주택 내부 철거 전/후", url: "residential"},
            {name: "폐기물처리", url: "waste"},
            {name: "원상복구공사", url: "restoration"},
        ],
        banner: "/images/banner_portfolio.jpg",
    },
    inquire : {
        title: '견적문의',
        banner: "/images/banner_inquire.jpg",
    }
};