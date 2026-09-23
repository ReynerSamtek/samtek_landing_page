"use client"

import { useEffect, useRef } from "react"
import createGlobe from "cobe"

export interface LiveMarker {
  id: string
  name?: string
  location: [number, number]
}

interface GlobeLiveProps {
  markers?: LiveMarker[]
  className?: string
  speed?: number
}

export const defaultMarkers: LiveMarker[] = [
  { id: "mdn", name: "Medan", location: [3.5952, 98.6722] },
  { id: "sby", name: "Surabaya", location: [-7.2575, 112.7521] },
  { id: "bdg", name: "Bandung", location: [-6.9175, 107.6191] },
  { id: "pwk", name: "Purwakarta", location: [-6.5569, 107.4433] },
  { id: "jkt", name: "Jakarta", location: [-6.2088, 106.8456] },
]

export function GlobeLive({
  markers = defaultMarkers,
  className = "",
  speed = 0.0025,
}: GlobeLiveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 3 // initial angle facing Indonesia (lon ~106°-112°E)

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 3,
        theta: -0.1,
        dark: 1,
        diffuse: 1.6,
        mapSamples: 16000,
        mapBrightness: 4.5,
        mapBaseBrightness: 0.08,
        baseColor: [0.1, 0.2, 0.28], // Deep Blue tone (#0C6791 palette)
        markerColor: [0.15, 0.85, 0.45], // Vibrant green markers
        glowColor: [0.05, 0.4, 0.57], // Deep Blue glow
        markerElevation: 0.03,
        markers: markers.map((m) => ({ location: m.location, size: 0.05, id: m.id })),
        arcs: [],
        opacity: 0.9,
      })

      function animate() {
        phi += speed
        globe!.update({
          phi,
          theta: -0.1,
        })
        animationId = requestAnimationFrame(animate)
      }

      animate()
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [markers, speed])

  return (
    <div className={`relative aspect-square select-none pointer-events-none ${className}`}>
      <style>{`
        @keyframes online-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      {markers.map((m) => (
        <div
          key={m.id}
          style={
            {
              position: "absolute",
              positionAnchor: `--cobe-${m.id}`,
              bottom: "anchor(top)",
              left: "anchor(center)",
              translate: "-50% 0",
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.25rem 0.55rem",
              background: "rgba(10, 15, 18, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(4px)",
              borderRadius: 6,
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              transform: "rotate(30deg)",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              opacity: `var(--cobe-visible-${m.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 6px))`,
              transition: "opacity 0.4s, filter 0.4s",
            } as React.CSSProperties
          }
        >
          <span
            style={{
              width: 6,
              height: 6,
              background: "#10b981",
              borderRadius: "50%",
              boxShadow: "0 0 6px #10b981",
              animation: "online-pulse 1.8s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#34d399",
              textTransform: "uppercase" as const,
            }}
          >
            ONLINE
          </span>
          {m.name && (
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.6rem",
                color: "rgba(230, 241, 240, 0.85)",
                paddingLeft: "0.35rem",
                borderLeft: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {m.name}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
