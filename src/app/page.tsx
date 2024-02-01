import ChapterView from "@/components/ChapterView";
import { list } from "@vercel/blob";

export default async function Home() {
  const images = await list({ token: process.env.BLOB_OP_LAST_CHP_READ_WRITE_TOKEN })
  return (
    <>
      <h1>One Piece Latest Manga</h1>
      <ChapterView blobs={images.blobs} />    
    </>

  );
}
