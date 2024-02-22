'use client';

import React, { useMemo, useRef } from 'react'

export default function ZoomImage({ image }: {
    image: string
}) {
    const canvasRef = useRef(null);
    const pictureRef = useRef(null);
    const observer = useRef(null);
    const background = useMemo(() => new Image(), [image]);
  return (
    <div>ZoomImage</div>
  )
}
