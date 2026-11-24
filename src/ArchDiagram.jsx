import { useEffect, useState } from 'react'

// Hero picture: the ride-hailing adapter architecture Nitin built,
// with request "pulses" travelling from the rider app to each provider.
const providers = [
  { id: 'ola', label: 'Ola', sub: 'adapter', y: 104 },
  { id: 'bharat', label: 'Bharat Taxi', sub: 'adapter · via ONDC', y: 244 },
]

function Box({ x, y, w, h, title, sub, variant = 'plain' }) {
  return (
    <g className={`node node-${variant}`}>
      <rect x={x + 4} y={y + 6} width={w} height={h} rx="12" className="node-shadow" />
      <rect x={x} y={y} width={w} height={h} rx="12" className="node-body" />
      <text x={x + w / 2} y={sub ? y + h / 2 - 3 : y + h / 2 + 5} textAnchor="middle" className="node-title">{title}</text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 15} textAnchor="middle" className="node-sub">{sub}</text>}
    </g>
  )
}

export default function ArchDiagram() {
  const [motion, setMotion] = useState(false)
  useEffect(() => {
    try {
      setMotion(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    } catch {
      setMotion(false)
    }
  }, [])

  const gw = { x: 168, y: 150, w: 170, h: 104 }
  const toGw = 'M 128 202 L 168 202'
  const paths = providers.map(p => `M 338 202 C 380 202, 370 ${p.y + 28}, 406 ${p.y + 28}`)

  return (
    <figure className="arch" aria-label="Architecture of the ride-hailing backend: rider app to the Mobility ride-hailing backend (FastAPI), backed by Redis and PostgreSQL, routing to the Ola adapter and the Bharat Taxi adapter via ONDC.">
      <svg viewBox="0 0 560 400" role="img">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="grid-dot" />
          </pattern>
        </defs>
        <rect width="560" height="400" fill="url(#grid)" />

        {/* links */}
        <path d={toGw} className="link" />
        <path d="M 253 150 L 253 98" className="link link-dashed" />
        <path d="M 253 254 L 253 306" className="link link-dashed" />
        {paths.map((d, i) => <path key={i} d={d} className="link" />)}

        <Box x={18} y={174} w={110} h={56} title="Rider app" sub="search · book" />
        <Box x={gw.x} y={gw.y} w={gw.w} h={gw.h} title="Mobility" sub="ride-hailing · FastAPI" variant="main" />
        <Box x={188} y={42} w={130} h={56} title="Redis" sub="cache" variant="data" />
        <Box x={188} y={306} w={130} h={56} title="PostgreSQL" sub="tuned queries" variant="data" />
        {providers.map(p => (
          <Box key={p.id} x={406} y={p.y} w={138} h={56} title={p.label} sub={p.sub} variant="provider" />
        ))}

        <text x="475" y="334" textAnchor="middle" className="caption">one adapter per provider</text>

        {motion && (
          <g className="pulses">
            <circle r="4.5" className="pulse">
              <animateMotion dur="1.2s" repeatCount="indefinite" path={toGw} />
            </circle>
            {paths.map((d, i) => (
              <circle key={i} r="4.5" className="pulse">
                <animateMotion dur="1.8s" begin={`${i * -0.9}s`} repeatCount="indefinite" path={d} />
              </circle>
            ))}
          </g>
        )}
      </svg>
      <figcaption>Ride-hailing backend I built: one API, many ride providers.</figcaption>
    </figure>
  )
}
