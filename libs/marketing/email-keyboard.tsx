import bgKeyboard from 'libs/website/assets/ui/introduction/bg-keyboard-1.webp'

export default function EmailKeyboard() {
  return (
    <div className="font-mono leading-6 bg-black text-white max-w-xl mx-auto relative overflow-hidden">
      <div className="my-10">
        <img
          src={bgKeyboard.src}
          alt=""
          className="w-full rounded-lg"
        />
      </div>
    </div>
  )
}
