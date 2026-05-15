'use client'

import React, { useState } from 'react'

interface YouTubeEmbedProps {
  videoId: string
  title: string
}

/**
 * Lite YouTube embed. Renders a clickable thumbnail and only loads the
 * heavy YouTube iframe after user interaction. No YouTube IFrame API.
 *
 * Thumbnail strategy: tries maxresdefault (1280×720) first; falls back to
 * hqdefault (480×360) via onError so the branded gradient background shows
 * through if neither is available.
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
      className="group relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl cursor-pointer bg-gradient-to-br from-[var(--aa-navy-deep)] to-[#1a3a6b]"
    >
      {/* Branded background shown while thumbnail loads or if unavailable */}
      <div className="absolute inset-0 flex items-end p-5 pointer-events-none" aria-hidden="true">
        <span className="text-[var(--aa-cream)]/20 font-black text-6xl leading-none tracking-tighter select-none">
          AA
        </span>
      </div>
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget
          if (!img.dataset.fallback) {
            img.dataset.fallback = '1'
            img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
          }
        }}
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
