'use client'

import React, { useState } from 'react'

interface YouTubeEmbedProps {
  videoId: string
  title: string
}

/**
 * Lite YouTube embed. Renders a clickable thumbnail and only loads the
 * heavy YouTube iframe after user interaction. No YouTube IFrame API.
 */
const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => {
  const [activated, setActivated] = useState(false)

  if (activated) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      aria-label={`Play video: ${title}`}
      className="group relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-2xl cursor-pointer"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
      />
      <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center h-20 w-20 rounded-full bg-[var(--aa-red)]/90 group-hover:bg-[var(--aa-red)] transition-colors shadow-xl">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="h-10 w-10 translate-x-0.5"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <span className="sr-only">{title}</span>
    </button>
  )
}

export default YouTubeEmbed
