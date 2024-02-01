'use client';

import { ListBlobResultBlob } from '@vercel/blob'
import Image from 'next/image'
import React from 'react'

export default function ChapterView({ blobs }: {
    blobs: ListBlobResultBlob[]
}) {
    return (
        <div className=' flex flex-col justify-center items-center'>
            {blobs.map((img) => (<Image
                key={img.uploadedAt.toString()}
                src={img.url}
                alt={img.pathname}
                className=' cursor-zoom-in'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
                placeholder={'blur'}
                loading={'lazy'}
                height={1280}
                width={850}
            />))}
        </div>
    )
}
