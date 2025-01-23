import bgKeyCap from 'libs/website/assets/ui/introduction/bg-keycap-2.webp'
import EmailBackground from './email-banner-background'
import EmailBannerBackgroundText from './email-banner-background-text'
import EmailContent from './email-content'
import EmailFooter from './email-footer'
import EmailKeyboard from './email-keyboard'

export default function Email() {
  return (
    <div className="relative font-mono leading-6 bg-black text-white max-w-xl mx-auto overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgKeyCap.src})`,
        }}
      >
        <EmailBackground />
      </div>

      {/* Overlay for Text and Content */}
      <div className="relative z-10">
        <EmailBannerBackgroundText />
        <div className="mt-10 px-4">
          <EmailContent />
          <EmailKeyboard />
          <EmailFooter />
        </div>
      </div>
    </div>
  )
}
