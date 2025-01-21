export default function EmailContentRejection() {
  return (
    <div className="font-mono leading-6 bg-black text-white max-w-xl mx-auto relative overflow-hidden p-5">
      {/* Rejection Content */}
      <div className="bg-[rgba(25,25,25,0.9)] p-5 rounded-lg text-left border border-solid border-[#333]">
        <p className="mb-5">
          Dear
          {' '}
          <strong>John Doe</strong>
          ,
        </p>
        <p className="mb-5">
          Thank you so much for applying to cuHacking 6. Unfortunately, with the small amount of
          people we...
        </p>
        <p className="mb-5">Signed,</p>
        <p>
          <strong>First Last</strong>
          <br />
          Position
          <br />
          cuHacking
        </p>
      </div>
    </div>
  )
}
