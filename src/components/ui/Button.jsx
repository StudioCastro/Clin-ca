import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn.js'

const VARIANTS = {
  primary: 'bg-brand-navy text-white shadow-soft hover:bg-brand-navy-dark focus-visible:outline-brand-navy',
  secondary:
    'bg-white text-brand-navy border border-brand-navy/20 shadow-soft hover:border-brand-navy/50 hover:bg-brand-blue-light',
  outline: 'bg-transparent text-white border border-white/70 hover:bg-white/10',
  ghost: 'bg-transparent text-brand-navy hover:bg-brand-blue-light',
}

const SIZES = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const Button = forwardRef(function Button(
  { to, href, variant = 'primary', size = 'md', className, children, ...props },
  ref,
) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60',
    VARIANTS[variant],
    SIZES[size],
    className,
  )

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button ref={ref} type={props.type ?? 'button'} className={classes} {...props}>
      {children}
    </button>
  )
})

export default Button
