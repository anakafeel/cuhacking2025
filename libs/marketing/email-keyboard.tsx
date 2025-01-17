import bgKeyboard from 'libs/website/assets/ui/introduction/bg-keyboard-1.webp'

export default function EmailKeyboard() {
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
      <div style={{ margin: '40px 0' }}>
        <img
          src={bgKeyboard.src}
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
