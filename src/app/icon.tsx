import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0F2044',
          borderRadius: 7,
          color: '#C4965A',
          fontSize: 20,
          fontWeight: 900,
          fontFamily: 'sans-serif',
          letterSpacing: -1,
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
