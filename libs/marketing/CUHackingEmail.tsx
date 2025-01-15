import figma_white from '@cuhacking/shared/assets/icons/socials/figma-white-1.svg'
import github_white from '@cuhacking/shared/assets/icons/socials/github-white-1.svg'
import instagram_white from '@cuhacking/shared/assets/icons/socials/instagram-white-1.svg'
import linkedin_white from '@cuhacking/shared/assets/icons/socials/linkedin-white-1.svg'
import linktree_white from '@cuhacking/shared/assets/icons/socials/linktree-white-1.svg'
import logoIconWordmarkGradientGreen from '@cuhacking/shared/assets/logos/cuHacking/logo-icon-wordmark-gradient-green.png'
import { Button } from '@cuhacking/shared/ui/button'
import cuHackingLogo from 'libs/shared/features/awesome-feature/assets/cuhacking-logo.svg'
import bgKeyboard from 'libs/website/assets/ui/introduction/bg-keyboard-1.webp'
import bgKeyCap from 'libs/website/assets/ui/introduction/bg-keycap-1.webp'
import React from 'react'

function CUHackingEmail() {
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
      {/* Floating Key Caps Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '300px',
        zIndex: 0,
        overflow: 'hidden',
      }}
      >
        <img
          src={bgKeyCap.src}
          alt=""
          style={{
            width: '100%',
            marginLeft: '23px',
            height: '125%',
            objectFit: 'cover',
            marginTop: '-36px',
          }}
        />
      </div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          paddingTop: '40px',
          paddingBottom: '20px',
          position: 'relative',
        }}
        >
          {/* Blur Background */}
          <div style={{
            position: 'absolute',
            top: '60px',
            left: '90px',
            right: '90px',
            bottom: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(5px)',
            zIndex: -1,
          }}
          />

          <h1 style={{
            fontSize: '24px',
            margin: '20px 0',
            fontFamily: 'monospace',
            fontWeight: 'normal',
            textAlign: 'center',
          }}
          >
            We hope to
          </h1>
          <div style={{
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

        {/* Keyboard Image */}
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

        {/* Next Steps Section */}
        <div style={{
          backgroundColor: 'rgba(25, 25, 25, 0.9)',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #333',
        }}
        >
          <h3 style={{
            fontSize: '18px',
            marginBottom: '10px',
            textAlign: 'center',
            color: '#fff',
            fontFamily: 'monospace',
          }}
          >
            Next Steps
          </h3>
          <p style={{
            fontSize: '14px',
            marginBottom: '20px',
            textAlign: 'center',
            color: '#e6e6e6',
            fontFamily: 'monospace',
          }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
          <div style={{ textAlign: 'center' }}>
            <Button
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
              Next Steps
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          padding: '20px',
          borderTop: '1px solid #333',
          marginTop: '40px',
        }}
        >
          {/* Social Icons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '20px',
          }}
          >
            <a href="https://instagram.com">
              <img src={instagram_white.src} alt="Instagram" style={{ width: '20px' }} />
            </a>
            <a href="https://linkedin.com">
              <img src={linkedin_white.src} alt="LinkedIn" style={{ width: '20px' }} />
            </a>
            <a href="https://github.com">
              <img src={github_white.src} alt="GitHub" style={{ width: '20px' }} />
            </a>
            <a href="https://linktree.com">
              <img src={linktree_white.src} alt="Linktree" style={{ width: '20px' }} />
            </a>
            <a href="https://figma.com">
              <img src={figma_white.src} alt="Figma" style={{ width: '20px' }} />
            </a>
          </div>

          {/* Logo */}
          <a href="/">
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
          <p style={{
            fontSize: '12px',
            color: '#888',
            marginTop: '10px',
            fontFamily: 'monospace',
          }}
          >
            Unsubscribe
          </p>
          <p style={{
            fontSize: '10px',
            color: '#555',
            fontFamily: 'monospace',
          }}
          >
            &copy; 2023 cuHacking. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CUHackingEmail
