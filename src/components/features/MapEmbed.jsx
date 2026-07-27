import { siteConfig } from '../../constants/siteConfig.js'

export default function MapEmbed() {
  return (
    <div className="shadow-soft overflow-hidden rounded-2xl">
      <iframe
        title={`Mapa de localização da ${siteConfig.name}`}
        src={siteConfig.mapsEmbedSrc}
        width="100%"
        height="360"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block"
      />
    </div>
  )
}
