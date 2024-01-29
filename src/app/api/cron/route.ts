import { getLastChapter } from "@/app/utils";

export async function GET() {
    const chapter = await getLastChapter();

    // save to blob
    // const blob

    return Response.json({
        success: true,
        data: chapter
    });
}