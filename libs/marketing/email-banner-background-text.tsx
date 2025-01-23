import logoIconWordmarkGradientGreen from '@cuhacking/shared/assets/logos/cuHacking/logo-icon-wordmark-gradient-green.png'
import React from 'react'

export default function EmailBannerBackgroundText() {
  return (
    <div className="text-center pt-4 mr-2">
      <h1 className="text-xl font-mono font-normal text-white">
        We hope to
      </h1>
      <div className="mt-2">
        <img
          src={logoIconWordmarkGradientGreen.src}
          alt="cuHacking Logo"
          className="mx-auto max-w-xs md:max-w-sm"
        />
      </div>
    </div>
  )
}
