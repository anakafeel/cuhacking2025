import logoIconWordmarkGradientGreen from '@cuhacking/shared/assets/logos/cuHacking/logo-icon-wordmark-gradient-green.png'
import bgKeyCap from '@website/assets/ui/introduction/bg-keycap-2.webp'

export default function EmailBannerBackgroundText() {
  return (
    <div className="font-mono leading-6 bg-black text-white max-w-xl mx-auto relative overflow-hidden">
      {/* Floating Key Caps Background */}
      <img
        src={bgKeyCap.src}
        alt=""
        className="w-full ml-[23px] h-[125%] object-cover -mt-9 -z-10"
      />

      {/* Main Content */}
      <div className="relative z-1 p-5">
        {/* Header */}
        <div className="text-center pt-10 pb-5 relative">
          <h1 className="text-2xl my-5 font-mono font-normal text-center">
            We hope to
          </h1>
          <div className="flex justify-center items-center px-5">
            <img
              src={logoIconWordmarkGradientGreen.src}
              alt="cuHacking Logo"
              className="max-w-[250px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
