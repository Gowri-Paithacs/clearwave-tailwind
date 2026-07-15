function Faq() {
  const faqs = [
    "Is there a free trial?",
    "How does pricing work for larger teams?",
    "Can I migrate data from another tool?",
    "What does the 99.9% uptime SLA mean?",
    "Is my data secure?",
    "Can I cancel anytime?",
  ];
  return (
    <section className="w-full bg-[#E8F2EF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* FAQ */}
        <div className="grid lg:grid-cols-[360px_1fr] gap-20 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center bg-white border border-[#D8EBE7] rounded-full px-5 py-2 shadow-sm mb-8">
              <i className="fa-solid fa-circle text-[6px] text-[#1A7A6E] mr-2"></i>
              <small className="uppercase tracking-[2px] font-semibold text-[#1A7A6E]">
                FAQ
              </small>
            </div>
            <h2 className="text-5xl lg:text-[70px] font-bold leading-none text-[#101820]">
              Questions,
              <br />
              <span
                className="italic text-[#1A7A6E] font-medium"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                answered
              </span>
            </h2>
            <p className="text-gray-500 leading-8 mt-8">
              Can't find what you're looking for?
              <br />
              Reach our team at
              <span className="text-[#1A7A6E] font-semibold">
                {" "}
                hello@clearwave.io
              </span>
              <br />
              We reply within two hours.
            </p>
            <button className="mt-8 text-[#1A7A6E] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              <i className="fa-solid fa-plus"></i>
              Expand all
            </button>
          </div>
          {/* Right */}
          <div className="space-y-1">
            {faqs.map((faq) => (
              <div
                key={faq}
                className="flex items-center justify-between py-7 border-b border-gray-200"
              >
                <span className="text-lg font-medium text-[#101820]">
                  {faq}
                </span>

                <div className="w-10 h-10 rounded-full border border-[#BFE2D9] flex items-center justify-center text-[#1A7A6E]">
                  <i className="fa-solid fa-plus text-sm"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="mt-28 rounded-[36px] bg-gradient-to-r from-[#021C1A] via-[#032C27] to-[#063B34] px-8 md:px-14 py-14 md:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div>
              <div className="inline-flex items-center border border-white/20 rounded-full px-5 py-2 text-white/80 text-xs tracking-[2px] uppercase mb-8">
                GET STARTED TODAY
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight">
                Ready for a{" "}
                <span
                  className="italic text-[#6AD3C5] font-medium"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  clearer workflow?
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-white/70 leading-8 text-lg">
                Join 50,000+ teams who replaced chaos with clarity. Set up in
                under 10 minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <button className="px-8 py-4 rounded-full bg-[#1A7A6E] hover:bg-[#16695f] text-white font-semibold transition">
                Start Free Trial
              </button>
              <button className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#021C1A] transition">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Faq;
