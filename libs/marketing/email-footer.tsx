import instagram_white from '@cuhacking/shared/assets/icons/socials/instagram-white-1.svg'
import linkedin_white from '@cuhacking/shared/assets/icons/socials/linkedin-white-1.svg'
import linktree_white from '@cuhacking/shared/assets/icons/socials/linktree-white-1.svg'
import website_white from '@cuhacking/shared/assets/icons/socials/website-white-1.svg'
import cuHackingLogo from 'libs/shared/features/awesome-feature/assets/cuhacking-logo.svg'

export default function EmailFooter() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        borderTop: '1px solid #333',
        marginTop: '40px',
        backgroundColor: 'rgba(25, 25, 25, 0.9)',
      }}
    >
      {/* Social Icons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram_white.src} alt="Instagram" style={{ width: '20px' }} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={website_white.src} alt="GitHub" style={{ width: '20px' }} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedin_white.src} alt="LinkedIn" style={{ width: '20px' }} />
        </a>
        <a href="https://linktree.com" target="_blank" rel="noopener noreferrer">
          <img src={linktree_white.src} alt="Linktree" style={{ width: '20px' }} />
        </a>
      </div>

      {/* Logo */}
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img
          src={cuHackingLogo.src}
          alt="cuHacking Logo"
          style={{
            width: '30px',
            margin: '20px auto',
          }}
        />
      </a>

      {/* Additional Footer Info */}
      <p
        style={{
          fontSize: '12px',
          color: '#888',
          marginTop: '10px',
          marginBottom: '20px',
          fontFamily: 'monospace',
        }}
      >
        Unsubscribe
      </p>
      <p
        style={{
          fontSize: '5px',
          color: '#555',
          fontFamily: 'monospace',
        }}
      >
        &copy; 2025 cuHacking. All rights reserved.
      </p>
    </div>
  )
}
