import { Button } from '@cuhacking/shared/ui/button'

export default function EmailContent() {
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

      {/* Congratulations Section */}
      <div style={{
        backgroundColor: 'rgba(25, 25, 25, 0.9)',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        textAlign: 'center',
        border: '1px solid #333',
        marginTop: '43px',
      }}
      >
        <h2 style={{
          color: '#00ff00',
          fontSize: '20px',
          margin: '10px 0',
          fontFamily: 'monospace',
        }}
        >
          Congratulations, Name
        </h2>
        <p style={{
          fontSize: '14px',
          marginBottom: '20px',
          color: '#e6e6e6',
          fontFamily: 'monospace',
        }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          variant="secondary"
          style={{
            backgroundColor: '#00ff00',
            color: '#000',
            border: 'none',
            padding: '8px 24px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'monospace',
          }}
        >
          RSVP
        </Button>
      </div>
    </div>
  )
}
