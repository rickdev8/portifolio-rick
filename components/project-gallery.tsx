'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project, ProjectImage } from '@/data/projects'

type ProjectGalleryProps = {
  images: ProjectImage[]
  projectTitle: string
  visual: Project['visual']
}

export function ProjectGallery({ images, projectTitle, visual }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]
  const hasMultipleImages = images.length > 1

  function showPreviousImage() {
    setActiveIndex((current) => (current - 1 + images.length) % images.length)
  }

  function showNextImage() {
    setActiveIndex((current) => (current + 1) % images.length)
  }

  return (
    <div
      className="project-gallery"
      role="group"
      aria-label={`Fotos de ${projectTitle}`}
      aria-roledescription="carrossel"
    >
      <div className={`detail-visual detail-visual-${visual}`}>
        <Image
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 650px) calc(100vw - 38px), 1000px"
          className="detail-screenshot"
        />
      </div>

      {hasMultipleImages && (
        <div className="project-gallery-controls">
          <button
            type="button"
            className="project-gallery-arrow"
            onClick={showPreviousImage}
            aria-label="Foto anterior"
          >
            <ChevronLeft size={17} />
          </button>

          <div className="project-gallery-dots" role="group" aria-label="Escolher foto">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className="project-gallery-dot"
                onClick={() => setActiveIndex(index)}
                aria-label={`Mostrar foto ${index + 1}`}
                aria-pressed={activeIndex === index}
              />
            ))}
          </div>

          <span className="project-gallery-count" aria-live="polite">
            {activeIndex + 1} / {images.length}
          </span>

          <button
            type="button"
            className="project-gallery-arrow"
            onClick={showNextImage}
            aria-label="Próxima foto"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      )}
    </div>
  )
}
