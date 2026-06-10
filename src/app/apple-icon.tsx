import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0F2044 0%, #16305f 100%)',
          color: '#C4965A',
          fontSize: 104,
          fontWeight: 900,
          fontFamily: 'sans-serif',
          letterSpacing: -4,
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
