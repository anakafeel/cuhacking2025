import React from 'react'

function CUHackingEmail() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.5, backgroundColor: '#000', color: '#fff', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
        <img
          src="https://your-image-url.com/logo.png"
          alt="cuHacking Logo"
          style={{ maxWidth: '100%' }}
        />
        <h1 style={{ fontSize: '24px', margin: '20px 0' }}>
          We hope to
          <strong>cuHacking</strong>
        </h1>
      </div>

      {/* Congratulations Section */}
      <div style={{ backgroundColor: '#191919', padding: '20px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>
        <h2 style={{ color: '#00ff00', fontSize: '20px', margin: '10px 0' }}>Congratulations, Name</h2>
        <p style={{ fontSize: '14px', marginBottom: '20px', color: '#e6e6e6' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a
          href="https://your-rsvp-link.com"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#00ff00',
            color: '#000',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          RSVP
        </a>
      </div>

      {/* Image Section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src="https://your-image-url.com/keyboard.png"
          alt="Keyboard"
          style={{ maxWidth: '100%', borderRadius: '8px' }}
        />
      </div>

      {/* Next Steps Section */}
      <div style={{ backgroundColor: '#f4f4f4', color: '#000', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '10px', textAlign: 'center' }}>Next Steps</h3>
        <p style={{ fontSize: '14px', marginBottom: '20px', textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
        <a
          href="https://your-next-steps-link.com"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#00ff00',
            color: '#000',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          Button
        </a>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', padding: '20px 0', borderTop: '1px solid #333' }}>
        <p style={{ fontSize: '12px', color: '#888' }}>Follow us on:</p>
        <div>
          <a href="https://instagram.com" style={{ margin: '0 10px' }}>
            <img src="https://your-social-icon-url.com/instagram.png" alt="Instagram" style={{ width: '20px' }} />
          </a>
          <a href="https://twitter.com" style={{ margin: '0 10px' }}>
            <img src="https://your-social-icon-url.com/twitter.png" alt="Twitter" style={{ width: '20px' }} />
          </a>
          <a href="https://facebook.com" style={{ margin: '0 10px' }}>
            <img src="https://your-social-icon-url.com/facebook.png" alt="Facebook" style={{ width: '20px' }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CUHackingEmail
