import EmailBannerBackgroundText from './email-banner-background-text'
import EmailContent from './email-content'
import EmailFooter from './email-footer'
import EmailKeyboard from './email-keyboard'

export default function Email() {
  return (
    <div className="font-mono leading-6 bg-black text-white max-w-xl mx-auto relative overflow-hidden">
      <EmailBannerBackgroundText />
      <EmailContent />
      <EmailKeyboard />
      <EmailFooter />
    </div>
  )
}
