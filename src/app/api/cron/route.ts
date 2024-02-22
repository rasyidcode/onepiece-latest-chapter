import { getDataSource } from "@/utils";
import pg from "pg"

export const revalidate = 0;

export async function GET() {
    const { Pool } = pg

    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL
    });

    console.log(pool);

    try {
        const rawop = await getDataSource();
        // const response = await fetch(imageurls[0]);
        // const blob = await response.blob();

        // const result = await pool.query('DELETE FROM op');
        // const { rows } = result
        // await pool.end();

        // check if blob already exist
        // const storedblobs = await list({ token: process.env.BLOB_OP_LAST_CHP_READ_WRITE_TOKEN })
        // if (storedblobs.blobs.length > 0) {
        //     const firstblobpathname = storedblobs.blobs.at(0)?.pathname as string;
        //     for (const imageurl of imageurls) {
        //         if (imageurl.includes(firstblobpathname)) {
        //             return Response.json({
        //                 success: true,
        //                 message: 'Images already stored.',
        //                 data: storedblobs
        //             })
        //         }
        //     }
        // }

        // const blobs: PutBlobResult[] = [];

        // save to vercel blob
        // for (const imageurl of imageurls) {
        //     const match = imageurl.match(/(?:\/)([^\/]+)$/);
        //     if (match) {
        //         const filename = match[1];

        //         const response = await fetch(imageurl);
        //         const blob = await put(filename, await response.blob(), { access: 'public', token: process.env.BLOB_OP_LAST_CHP_READ_WRITE_TOKEN });

        //         blobs.push(blob);
        //     };
        // }

        return Response.json({
            success: true,
            message: 'Images stored',
            data: rawop
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