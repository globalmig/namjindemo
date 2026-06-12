'use client'
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";

interface FormProps {
    name: string;
    phoneFront: string;
    phoneMiddle: string;
    phoneLast: string;
    address: string;
    option: string;
    demolitionDate?: string;
    request?: string;
    file?: File | null;
}

const OPTION_LIST = [
    "상가 폐업 인테리어 내부 철거 (*소상공인지원)",
    "아파트/주택 인테리어 내부 철거",
    "건축물 철거",
    "구조물 철거",
    "가정집 폐기물 처리",
    "상가 폐기물 처리",
    "원상복구공사",
    "폐업 지원 상담 신청"
];

export default function InquireForm() {

    const router = useRouter();
    const [vaild, setVaild] = useState<String | null>(null);

    const [form, setForm] = useState<FormProps>({
        name: "",
        phoneFront: "010",
        phoneMiddle: "",
        phoneLast: "",
        address: "",
        option: "",
        demolitionDate: "",
        request: "",
        file: null,
    });

    const onChangeForm = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === "file") {
            const fileInput = e.target as HTMLInputElement;
            const file = fileInput.files?.[0] ?? null;
            setForm(prev => ({ ...prev, file }));
            return;
        }

        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    }, []);

    const onChangeOption = useCallback((option: string) => {
        setForm(prev => ({
            ...prev,
            option: prev.option === option ? "" : option
        }));
    }, []);

    const onSubmitForm = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name.trim() || !form.phoneMiddle.trim()
            || !form.phoneLast.trim() || !form.address.trim()) {
            setVaild("필수 항목을 입력해주세요.");
            return;
        }

        const phone = form.phoneFront + form.phoneMiddle + form.phoneLast;
        if (!/^[0-9]{10,11}$/.test(phone)) {
            setVaild("연락처는 숫자만 10~11자리로 입력해주세요.");
            return;
        }

        if (form.file) {
            const ext = form.file.name.split('.').pop()?.toLowerCase() ?? "";
            const allowedExtensions = ["jpg", "jpeg"];

            if (!allowedExtensions.includes(ext)) {
                setVaild("JPG 파일만 업로드 가능하며, 용량은 200KB이하이어야 합니다.");
                return;
            }

            const fileSizeKB = form.file.size / 1024;
            if (fileSizeKB > 200) {
                setVaild("JPG 파일만 업로드 가능하며, 용량은 200KB이하이어야 합니다.");
                return;
            }
        }

        // SMS 
        try {
            const formData = new FormData();
            Object.entries(form).forEach(([key, value]) => {
                if (value !== null) formData.append(key, value as any);
            });

            const response = await fetch("/api/inquire", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                alert("문의가 정상적으로 접수되었습니다.");
                router.push("/");
                window.location.reload();
            } else {
                alert("문자 발송 중 오류가 발생했습니다.");
            }
        } catch (error) {
            console.error(error);
            alert("서버 오류가 발생했습니다. 다시 시도해주세요.");
        }

    }, [form]);

    return (
        <>
            <form onSubmit={onSubmitForm}
                className="max-w-200 my-0 mx-auto">
                <div className="mb-12.5 pc:mb-17.5">
                    <label htmlFor="name">
                        <h3 className="text-[1.2rem] mb-5 pc:text-[1.5rem]">1. (필수) 성함<span className="font-bold ml-1.25 text-blue">*</span></h3>
                    </label>
                    <input type="text"
                        className="text-[0.9rem] p-2.5 w-full border border-[#ccc] bg-[#f7f7f8]
                            pc:text-[1.1rem] pc:py-5 pc:px-3.75"
                        id="name"
                        name="name"
                        placeholder="성함을 입력해주세요."
                        onChange={onChangeForm} value={form.name} />
                </div>

                <div className="mb-12.5 pc:mb-17.5">
                    <legend>
                        <h3 className="text-[1.2rem] mb-5 pc:text-[1.5rem]">2. (필수) 연락처<span className="font-bold ml-1.25 text-blue">*</span></h3>
                    </legend>
                    <div className="display-flex">
                        <input type="text"
                            className="text-[0.9rem] p-2.5 w-[28%] border border-[#ccc] bg-[#f7f7f8]
                            pc:text-[1.1rem] pc:py-5 pc:px-3.75"
                            inputMode="numeric"
                            id="phoneFront"
                            name="phoneFront"
                            maxLength={3}
                            onChange={onChangeForm}
                            value={form.phoneFront} />
                        <p className="my-auto mx-0">-</p>
                        <input type="text"
                            className="text-[0.9rem] p-2.5 w-[28%] border border-[#ccc] bg-[#f7f7f8]
                            pc:text-[1.1rem] pc:py-5 pc:px-3.75"
                            inputMode="numeric"
                            id="phoneMiddle"
                            name="phoneMiddle"
                            maxLength={4}
                            onChange={onChangeForm}
                            value={form.phoneMiddle} />
                        <p className="my-auto mx-0">-</p>
                        <input type="text"
                            className="text-[0.9rem] p-2.5 w-[28%] border border-[#ccc] bg-[#f7f7f8]
                            pc:text-[1.1rem] pc:py-5 pc:px-3.75"
                            inputMode="numeric"
                            id="phoneLast"
                            name="phoneLast"
                            maxLength={4}
                            onChange={onChangeForm}
                            value={form.phoneLast} />
                    </div>
                </div>

                <div className="mb-12.5 pc:mb-17.5">
                    <label htmlFor="address">
                        <h3 className="text-[1.2rem] mb-5 pc:text-[1.5rem]">3. (필수) 주소지<span className="font-bold ml-1.25 text-blue">*</span></h3>
                    </label>
                    <input type="text"
                        className="text-[0.9rem] p-2.5 w-full border border-[#ccc] bg-[#f7f7f8]
                            pc:text-[1.1rem] pc:py-5 pc:px-3.75"
                        id="address"
                        name="address"
                        placeholder="주소지를 입력해주세요."
                        onChange={onChangeForm}
                        value={form.address} />
                </div>

                <div className="mb-12.5 pc:mb-17.5">
                    <label>
                        <h3 className="text-[1.2rem] mb-5 pc:text-[1.5rem]">4. (선택) 문의 공사 종류</h3>
                    </label>
                    <ul>
                        {OPTION_LIST.map(op => (
                            <li key={op} className="flex justify-left gap-5 my-2 mx-0">
                                <input
                                    type="checkbox"
                                    className="text-[0.9rem] p-2.5 w-auto border border-[#ccc] bg-[#f7f7f8]
                            pc:text-[1.1rem] pc:py-5 pc:px-3.75"
                                    checked={form.option.includes(op)}
                                    onChange={() => onChangeOption(op)}
                                />
                                <p>{op}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-12.5 pc:mb-17.5">
                    <label htmlFor="demolitionDate">
                        <h3 className="text-[1.2rem] mb-5 pc:text-[1.5rem]">5. (선택) 철거 예정일</h3>
                    </label>
                    <input type="date"
                        className="text-[0.9rem] p-2.5 w-full border border-[#ccc] bg-[#f7f7f8]
                            pc:text-[1.1rem] pc:py-5 pc:px-3.75"
                        id="demolitionDate"
                        name="demolitionDate"
                        onChange={onChangeForm}
                        value={form.demolitionDate} />
                </div>

                <div className="mb-12.5 pc:mb-17.5">
                    <label htmlFor="request">
                        <h3 className="text-[1.2rem] mb-5 pc:text-[1.5rem]">6. (선택) 공사 요청사항</h3>
                    </label>
                    <textarea id="request"
                        className="w-full p-2.5 border border-[#ccc] bg-[#f7f7f8]
                            pc:text-[1.1rem] pc:py-5 pc:px-3.75"
                        name="request"
                        rows={10}
                        placeholder="공사 요청사항을 입력해주세요."
                        onChange={onChangeForm}
                        value={form.request} />
                </div>

                <div className="mb-12.5 pc:mb-17.5">
                    <label htmlFor="file">
                        <h3 className="text-[1.2rem] mb-5 pc:text-[1.5rem]">
                            7. (선택) 첨부파일<br /><span className="text-[1rem] pc:text-[1.2rem]">사진(JPG)만 업로드 가능하며, 최대 용량 200KB입니다.</span>
                        </h3>
                    </label>
                    <input type="file"
                        className="text-[0.9rem] p-2.5 w-full border border-[#ccc] bg-[#f7f7f8]
                            pc:text-[1.1rem] pc:py-5 pc:px-3.75"
                        id="file"
                        name="file"
                        accept=".jpg,.jpeg"
                        onChange={onChangeForm} />
                </div>

                <button type="submit"
                    className="bg-blue p-5 w-full mt-7.5 mb-5 cursor-pointer
                        text-center text-white font-bold text-[1.2rem]
                        pc:p-6.25 pc:my-7.5">
                    개인정보 수집 및 이용에 동의하고, 견적 문의합니다.
                </button>

                <ul className="mt-5 pc:mt-12.5">
                    <li className="font-bold my-1.25">- 아래 개인정보를 수집하며, 상담 외 다른 목적으로 사용되지 않습니다.</li>
                    <li className="my-1.25">- 수집 항목: 이름, 전화번호, 주소, 첨부파일(선택)</li>
                    <li className="my-1.25">- 이용 목적: 철거 견적 상담 및 고객 응대</li>
                    <li className="my-1.25">- 보유 기간: 문의일로부터 1년간 보관 후 즉시 파기</li>
                    <li className="mt-5 pc:mt-12.5">* 동의 거부 시, 서비스 이용이 제한될 수 있습니다.</li>
                </ul>
            </form>
            {vaild &&
                <div className="fixed top-[40%] left-1/2 transtorm -translate-x-1/2 -translate-y-1/2 bg-white z-50 rounded-lg pt-12.5 pb-5 text-center w-1/2 pc:w-100">
                    <div>
                        <p className="px-7.5 pb-12.5 border-b border-[#ccc]">{vaild}</p>
                        <button
                            onClick={() => setVaild(null)}
                            className="cursor-pointer pt-5">
                            확인
                        </button>
                    </div>
                </div>
            }
            {vaild ? <div className="black-bg"></div> : <></>}
        </>
    );
}
