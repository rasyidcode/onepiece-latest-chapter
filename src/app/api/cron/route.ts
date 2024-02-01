import { getChapterImageURLs } from "@/utils";
import { PutBlobResult, list, put } from "@vercel/blob";

export const revalidate = 0;

export async function GET() {
    try {
        const imageurls = await getChapterImageURLs();

        // check if blob already exist
        const storedblobs = await list({ token: process.env.BLOB_OP_LAST_CHP_READ_WRITE_TOKEN })
        if (storedblobs.blobs.length > 0) {
            const firstblobpathname = storedblobs.blobs.at(0)?.pathname as string;
            for (const imageurl of imageurls) {
                if (imageurl.includes(firstblobpathname)) {
                    return Response.json({
                        success: true,
                        message: 'Images already stored.',
                        data: storedblobs
                    })
                }
            }
        }

        const blobs: PutBlobResult[] = [];

        // save to vercel blob
        for (const imageurl of imageurls) {
            const match = imageurl.match(/(?:\/)([^\/]+)$/);
            if (match) {
                const filename = match[1];

                const response = await fetch(imageurl);
                const blob = await put(filename, await response.blob(), { access: 'public', token: process.env.BLOB_OP_LAST_CHP_READ_WRITE_TOKEN });

                blobs.push(blob);
            };
        }

        return Response.json({
            success: true,
            message: 'Images stored',
            data: blobs
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return Response.json({
                success: false,
                error: {
                    message: e.message,
                    name: e.name,
                    stack: e.stack
                },
            });
        }

        return Response.json({
            success: false,
            error: 'Unkown error'
        });
    }
}