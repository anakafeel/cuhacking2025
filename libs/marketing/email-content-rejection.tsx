export default function EmailContentRejection() {
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
        padding: '20px',
      }}
    >
      {/* Rejection Content */}
      <div
        style={{
          backgroundColor: 'rgba(25, 25, 25, 0.9)',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'left',
          border: '1px solid #333',
        }}
      >
        <p style={{ marginBottom: '20px' }}>
          Dear
          {' '}
          <strong>John Doe</strong>
          ,
        </p>
        <p style={{ marginBottom: '20px' }}>
          Thank you so much for applying to cuHacking 6. Unfortunately, with the small amount of
          people we...
        </p>
        <p style={{ marginBottom: '20px' }}>Signed,</p>
        <p>
          <strong>First Last</strong>
          <br />
          Position
          <br />
          cuHacking
        </p>
      </div>
    </div>
  )
}
