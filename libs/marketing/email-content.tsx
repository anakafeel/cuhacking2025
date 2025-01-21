import { Button } from '@cuhacking/shared/ui/button'

export default function EmailContent() {
  return (
    <div className="font-mono leading-6 bg-black text-white max-w-xl mx-auto relative overflow-hidden">
      {/* Congratulations Section */}
      <div className="bg-[rgba(25,25,25,0.9)] p-5 rounded-lg mb-5 text-center border border-solid border-[#333] mt-11">
        <h2 className="text-[#00ff00] text-xl my-2 font-mono">
          Congratulations, Name
        </h2>
        <p className="text-sm mb-5 text-[#e6e6e6] font-mono">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          variant="secondary"
          className="bg-[#00ff00] text-black border-none py-2 px-6 rounded cursor-pointer font-mono"
        >
          RSVP
        </Button>
      </div>
    </div>
  )
}
