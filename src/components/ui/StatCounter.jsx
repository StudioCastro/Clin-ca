import { useCountUp } from '../../hooks/useCountUp.js'

export default function StatCounter({ value, suffix = '', label, isText = false }) {
  const { ref, value: animatedValue } = useCountUp(typeof value === 'number' ? value : 0)

  if (isText) {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold text-white sm:text-xl">{label}</p>
      </div>
    )
  }

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
        {animatedValue.toLocaleString('pt-BR')}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-white/75 sm:text-base">{label}</p>
    </div>
  )
}
