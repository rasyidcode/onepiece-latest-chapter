import React from 'react'
import Image from 'next/image';

export default function ChapterView({ images }: {
    images: any[]
}) {
    return (
        <div className=' flex flex-col justify-center items-center'>
            {images.map((img, idx) => (<picture key={idx} className=' max-w-7xl max-h-max'>
                <Image
                    src={`/${img.assetpath}`}
                    alt={img.alt}
                    width={img.width}
                    height={img.height} />
            </picture>))}
        </div>
    )
}
