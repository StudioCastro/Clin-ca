import { useState } from 'react'
import { cn } from '../../utils/cn.js'

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  imgClassName,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <span className={cn('bg-brand-gray relative block overflow-hidden', className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          imgClassName,
        )}
        {...props}
      />
    </span>
  )
}
