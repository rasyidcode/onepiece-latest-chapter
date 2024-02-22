import ChapterView from "@/components/ChapterView";
import { Metadata } from "next";
import pg from 'pg'

export const metadata: Metadata = {
  title: 'One Piece Chapter 1106'
}

export default async function Home() {
  const { Pool } = pg

  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
  });

  const result = await pool.query('SELECT * FROM manga ORDER BY src ASC');
  const { rows } = result
  await pool.end();

  return (
    <>
      <h1 className="p-5 text-white text-center text-5xl font-extrabold">
        One Piece Chapter 1106
      </h1>

      <div className="mt-5">
        <ChapterView images={rows as string[]} />
      </div>
    </>

  );
}
