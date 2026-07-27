import { cn } from '../../utils/cn.js'

export default function Skeleton({ className }) {
  return (
    <div className={cn('bg-brand-gray-dark/60 animate-pulse rounded-xl', className)} aria-hidden="true" />
  )
}
