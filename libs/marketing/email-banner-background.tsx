import bgKeyCap from 'libs/website/assets/ui/introduction/bg-keycap-2.webp'

export default function EmailBackground() {
  return (
    <div className="font-mono leading-6 bg-black text-white max-w-xl mx-auto relative overflow-hidden">

      {/* Floating Keycaps */}
      <div style={{ margin: '40px 0' }}>
        <img
          src={bgKeyCap.src}
          alt=""
          className="w-full rounded-lg"
        />
      </div>

    </div>
  )
}
