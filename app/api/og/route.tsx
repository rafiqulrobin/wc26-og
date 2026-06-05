import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const t1 = (searchParams.get('t1') || 'Team 1').substring(0, 14);
  const t2 = (searchParams.get('t2') || 'Team 2').substring(0, 14);
  const s1 = searchParams.get('s1') || '0';
  const s2 = searchParams.get('s2') || '0';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          padding: '48px 64px',
          background: '#07080d',
          fontFamily: 'Arial Black, Arial, sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '-80px', left: '-80px',
          width: '500px', height: '400px',
          background: 'radial-gradient(circle, rgba(240,192,64,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          display: 'flex',
        }} />

        {/* Border */}
        <div style={{
          position: 'absolute', inset: '16px',
          border: '1.5px solid rgba(240,192,64,0.25)',
          borderRadius: '16px',
          display: 'flex',
        }} />

        {/* Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', position: 'relative' }}>
          <div style={{ display: 'flex' }}>
            <span style={{ fontSize: '46px', fontWeight: '900', color: '#ffffff' }}>LIVE</span>
            <span style={{ fontSize: '46px', fontWeight: '900', color: '#f0c040' }}>WC26</span>
          </div>
          <div style={{
            background: 'rgba(240,192,64,0.12)',
            border: '1px solid rgba(240,192,64,0.3)',
            borderRadius: '100px',
            padding: '10px 24px',
            fontSize: '13px',
            color: '#f0c040',
            letterSpacing: '2px',
            display: 'flex',
          }}>
            MY WC26 PREDICTION
          </div>
        </div>

        {/* Main card */}
        <div style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f1018',
          border: '1px solid rgba(240,192,64,0.25)',
          borderRadius: '20px',
          padding: '32px',
          position: 'relative',
        }}>
          {/* Teams + Score */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            {/* Team 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1' }}>
              <span style={{ fontSize: '36px', fontWeight: '900', color: '#ffffff', textAlign: 'center' }}>{t1}</span>
            </div>

            {/* Score */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '120px', fontWeight: '900', color: '#f0c040', lineHeight: '1' }}>{s1}</span>
                <span style={{ fontSize: '72px', fontWeight: '900', color: '#333344' }}>—</span>
                <span style={{ fontSize: '120px', fontWeight: '900', color: '#f0c040', lineHeight: '1' }}>{s2}</span>
              </div>
              <span style={{ fontSize: '13px', color: '#7a7a8a', letterSpacing: '3px', marginTop: '6px' }}>MY PREDICTION</span>
            </div>

            {/* Team 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1' }}>
              <span style={{ fontSize: '36px', fontWeight: '900', color: '#ffffff', textAlign: 'center' }}>{t2}</span>
            </div>
          </div>

          {/* CTA */}
          <div style={{
            marginTop: '24px',
            background: 'rgba(240,192,64,0.08)',
            border: '1px solid rgba(240,192,64,0.2)',
            borderRadius: '12px',
            padding: '10px 28px',
            fontSize: '18px',
            color: '#f0c040',
            display: 'flex',
          }}>
            Make your own prediction → livewc26.com
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', position: 'relative' }}>
          <span style={{ fontSize: '17px', color: '#444455' }}>livewc26.com</span>
          <span style={{ fontSize: '15px', color: '#444455' }}>#WorldCup2026</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
