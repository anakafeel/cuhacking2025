import instagram_white from '@cuhacking/shared/assets/icons/socials/instagram-white-1.svg'
import linkedin_white from '@cuhacking/shared/assets/icons/socials/linkedin-white-1.svg'
import linktree_white from '@cuhacking/shared/assets/icons/socials/linktree-white-1.svg'
import website_white from '@cuhacking/shared/assets/icons/socials/website-white-1.svg'
import cuHackingLogo from 'libs/shared/features/awesome-feature/assets/cuhacking-logo.svg'

export default function EmailFooter() {
  return (
    <div className="text-center p-5 border-t border-[#333] mt-10 bg-[rgba(25,25,25,0.9)]">
      {/* Social Icons */}
      <div className="flex justify-center gap-5 mb-5">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram_white.src} alt="Instagram" className="w-5" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={website_white.src} alt="GitHub" className="w-5" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedin_white.src} alt="LinkedIn" className="w-5" />
        </a>
        <a href="https://linktree.com" target="_blank" rel="noopener noreferrer">
          <img src={linktree_white.src} alt="Linktree" className="w-5" />
        </a>
      </div>

      {/* Logo */}
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={cuHackingLogo.src} alt="cuHacking Logo" className="w-7 my-5 mx-auto" />
      </a>

      {/* Additional Footer Info */}
      <p className="text-s text-[#888] mt-2 mb-5 font-mono">
        Unsubscribe
      </p>
      <p className="text-[10px] text-[#555] font-mono">
        &copy; 2025 cuHacking. All rights reserved.
      </p>
    </div>
  )
}
