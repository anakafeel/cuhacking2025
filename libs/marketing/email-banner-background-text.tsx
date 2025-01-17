import logoIconWordmarkGradientGreen from '@cuhacking/shared/assets/logos/cuHacking/logo-icon-wordmark-gradient-green.png'
import bgKeyCap from '@website/assets/ui/introduction/bg-keycap-2.webp'

export default function EmailBannerBackgroundText() {
  return (
    <div
      style={{
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
      {/* Floating Key Caps Background */}
      <img
        src={bgKeyCap.src}
        alt=""
        style={{
          width: '100%',
          marginLeft: '23px',
          height: '125%',
          objectFit: 'cover',
          marginTop: '-36px',
          zIndex: -1,
        }}
      />

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            paddingTop: '40px',
            paddingBottom: '20px',
            position: 'relative',
          }}
        >
          <h1
            style={{
              fontSize: '24px',
              margin: '20px 0',
              fontFamily: 'monospace',
              fontWeight: 'normal',
              textAlign: 'center',
            }}
          >
            We hope to
          </h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0 20px',
            }}
          >
            <img
              src={logoIconWordmarkGradientGreen.src}
              alt="cuHacking Logo"
              style={{
                maxWidth: '250px',
                margin: '0 auto',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
