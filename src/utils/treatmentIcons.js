import {
  Anchor,
  Sparkles,
  Sun,
  MoveHorizontal,
  Layers,
  Activity,
  Grid3x3,
  Gem,
  ShieldCheck,
  Baby,
  Siren,
} from 'lucide-react'

export const TREATMENT_ICONS = {
  Anchor,
  Sparkles,
  Sun,
  MoveHorizontal,
  Layers,
  Activity,
  Grid3x3,
  Gem,
  ShieldCheck,
  Baby,
  Siren,
}

export function getTreatmentIcon(name) {
  return TREATMENT_ICONS[name] ?? Sparkles
}
