import { NextResponse } from "next/server";
import { SolapiMessageService } from "solapi";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const file = formData.get("file") as File | null;
        const name = formData.get("name");
        const phoneFront = formData.get("phoneFront");
        const phoneMiddle = formData.get("phoneMiddle");
        const phoneLast = formData.get("phoneLast");
        const address = formData.get("address");
        const option = formData.get("option");
        const demolitionDate = formData.get("demolitionDate");
        const requestText = formData.get("request");

        const apiKey = process.env.SOLAPI_API_KEY!;
        const apiSecret = process.env.SOLAPI_API_SECRET!;
        const apinumber = process.env.SOLAPI_API_NUMBER!;

        const messageService = new SolapiMessageService(apiKey, apiSecret);

        let fileId: string | undefined;

        if (file) {
            const tempDir = path.join(process.cwd(), "uploads");
            await fs.mkdir(tempDir, { recursive: true });

            const tempFilePath = path.join(tempDir, file.name);

            const buffer = Buffer.from(await file.arrayBuffer());
            await fs.writeFile(tempFilePath, buffer);

            const uploadRes = await messageService.uploadFile(tempFilePath, "MMS");
            fileId = uploadRes.fileId;

            await fs.unlink(tempFilePath);
        }

        const message = `
[견적 문의]

성함: ${name}
연락처: ${phoneFront}-${phoneMiddle}-${phoneLast}
주소: ${address}
공사 종류: ${option || "-"}
철거 예정일: ${demolitionDate || "-"}
요청 사항: ${requestText || "-"}
첨부파일: ${file ? file.name : "-"}
`.trim();

        const sendResult = await messageService.sendOne({
            to: apinumber,
            from: apinumber,
            text: message,
            subject: "[견적문의]",
            ...(fileId && { imageId: fileId })
        });

        console.log(message);

        return NextResponse.json({ success: true, sendResult });

    } catch (error: any) {
        console.error("MMS 발송 실패:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
