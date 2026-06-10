import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #071628 0%, #0F2044 60%, #0a1d3a 100%)',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #C4965A, #DDB57E)',
              color: '#0B1830',
              fontSize: 36,
              fontWeight: 900,
            }}
          >
            S
          </div>
          <div style={{ display: 'flex', fontSize: 40, fontWeight: 900, color: 'white' }}>
            SAER<span style={{ color: '#C4965A' }}>&nbsp;TI</span>
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 900, color: 'white', lineHeight: 1.1, maxWidth: 900 }}>
          Tecnología que transforma industrias
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: 'rgba(255,255,255,0.6)', marginTop: 24 }}>
          FleetCore · Licitex · Desarrollo a medida · Apps web y móviles
        </div>
      </div>
    ),
    { ...size }
  );
}
