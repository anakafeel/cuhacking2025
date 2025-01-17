import bgKeyCap from 'libs/website/assets/ui/introduction/bg-keycap-2.webp'

export default function EmailBackground() {
  return (
    <div style={{
      fontFamily: 'monospace',
      lineHeight: 1.5,
      backgroundColor: '#000',
      color: '#fff',
      maxWidth: '600px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden',
    }}
    >

      {/* Floating Keycaps */}
      <div style={{ margin: '40px 0' }}>
        <img
          src={bgKeyCap.src}
          alt=""
          style={{
            width: '100%',
            borderRadius: '8px',
          }}
        />
      </div>

    </div>
  )
}
