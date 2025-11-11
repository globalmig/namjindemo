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
    "원상복구공사"
];

export default function InquireForm() {

    const router = useRouter();

    const [vaild, setVaild] = useState<boolean>(false);
    const [phoneVaild, setPhoneVaild] = useState<boolean>(false);
    const [fileVaild, setFileVaild] = useState<boolean>(false);

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
            setVaild(true);
            return;
        }

        const phone = form.phoneFront + form.phoneMiddle + form.phoneLast;
        if (!/^[0-9]{10,11}$/.test(phone)) {
            setPhoneVaild(true);
            return;
        }

        if (form.file) {
            const ext = form.file.name.split('.').pop()?.toLowerCase() ?? "";
            const allowedExtensions = ["jpg", "jpeg"];

            if (!allowedExtensions.includes(ext)) {
                setFileVaild(true);
                return;
            }

            const fileSizeKB = form.file.size / 1024;
            if (fileSizeKB > 200) {
                setFileVaild(true);
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
            <form onSubmit={onSubmitForm}>
                <div>
                    <label htmlFor="name"><h3 className="required">1. (필수) 성함</h3></label>
                    <input type="text" id="name" name="name" placeholder="성함을 입력해주세요." onChange={onChangeForm} value={form.name} />
                </div>

                <div>
                    <legend><h3 className="required">2. (필수) 연락처</h3></legend>
                    <div className="display-flex">
                        <input type="text" inputMode="numeric" id="phoneFront" name="phoneFront" maxLength={3} onChange={onChangeForm} value={form.phoneFront} />
                        <p>-</p>
                        <input type="text" inputMode="numeric" id="phoneMiddle" name="phoneMiddle" maxLength={4} onChange={onChangeForm} value={form.phoneMiddle} />
                        <p>-</p>
                        <input type="text" inputMode="numeric" id="phoneLast" name="phoneLast" maxLength={4} onChange={onChangeForm} value={form.phoneLast} />
                    </div>
                </div>

                <div>
                    <label htmlFor="address"><h3 className="required">3. (필수) 주소지</h3></label>
                    <input type="text" id="address" name="address" placeholder="주소지를 입력해주세요." onChange={onChangeForm} value={form.address} />
                </div>

                <div>
                    <label><h3>4. (선택) 문의 공사 종류</h3></label>
                    <ul>
                        {OPTION_LIST.map(op => (
                            <li key={op} className="display-flex">
                                <input
                                    type="checkbox"
                                    checked={form.option.includes(op)}
                                    onChange={() => onChangeOption(op)}
                                />
                                <p>{op}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <label htmlFor="demolitionDate"><h3>5. (선택) 철거 예정일</h3></label>
                    <input type="date" id="demolitionDate" name="demolitionDate" onChange={onChangeForm} value={form.demolitionDate} />
                </div>

                <div>
                    <label htmlFor="request"><h3>6. (선택) 공사 요청사항</h3></label>
                    <textarea id="request" name="request" rows={10} placeholder="공사 요청사항을 입력해주세요." onChange={onChangeForm} value={form.request} />
                </div>

                <div>
                    <label htmlFor="file"><h3>
                        7. (선택) 첨부파일<br /><span>사진(JPG)만 업로드 가능하며, 최대 용량 200KB입니다.</span>
                    </h3></label>
                    <input type="file" id="file" name="file" accept=".jpg,.jpeg" onChange={onChangeForm} />
                </div>

                <button type="submit">
                    개인정보 수집 및 이용에 동의하고, 견적 문의합니다.
                </button>

                <ul>
                    <li>- 아래 개인정보를 수집하며, 상담 외 다른 목적으로 사용되지 않습니다.</li>
                    <li>- 수집 항목: 이름, 전화번호, 주소, 첨부파일(선택)</li>
                    <li>- 이용 목적: 철거 견적 상담 및 고객 응대</li>
                    <li>- 보유 기간: 문의일로부터 1년간 보관 후 즉시 파기</li>
                    <li>* 동의 거부 시, 서비스 이용이 제한될 수 있습니다.</li>
                </ul>
            </form>
            {vaild ?
                <div className="inquire-isvaild">
                    <div>
                        {vaild && <p>필수 항목을 입력해주세요.</p>}
                        <button onClick={() => setVaild(false)}>확인</button>
                    </div>
                </div> :
                phoneVaild ? <div className="inquire-isvaild">
                    <div>
                        {phoneVaild && <p>연락처는 숫자만 10~11자리로 입력해주세요.</p>}
                        <button onClick={() => setPhoneVaild(false)}>확인</button>
                    </div>
                </div> :
                    fileVaild ? <div className="inquire-isvaild">
                        <div>
                            {fileVaild && <p>JPG 파일만 업로드 가능하며, 용량은 200KB이하이어야 합니다.</p>}
                            <button onClick={() => setFileVaild(false)}>확인</button>
                        </div>
                    </div> : <></>

            }
            {vaild || phoneVaild || fileVaild ? <div className="black-bg"></div> : <></>}
        </>
    );
}
