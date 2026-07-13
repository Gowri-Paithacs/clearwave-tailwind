function Pricing() {
  return (
    <>
      <section className="w-full bg-[#F3F9F7] py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#DFECEA] border border-[#C7DCDA] rounded-full px-5 py-2 mb-6">
              <i className="fa-solid fa-circle text-[7px] text-[#1F8A7C] mr-2"></i>
              <small className="uppercase font-bold tracking-wide text-[#1F8A7C]">
                Pricing
              </small>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-[#101820] leading-tight">
              Simple,
              <span
                className="text-[#1F8A7C] italic font-medium ml-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                transparent
              </span>{" "}
              pricing
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-5 max-w-xl mx-auto">
              No hidden fees. No surprise overages. Cancel anytime.
            </p>

            {/* Toggle */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
              <span className="font-semibold text-[#1F8A7C]">Monthly</span>
              <div className="w-11 h-6 bg-[#1F8A7C] rounded-full relative">
                <div className="absolute left-[3px] top-[3px] w-[18px] h-[18px] bg-white rounded-full"></div>
              </div>
              <span className="font-semibold text-gray-500">Annual</span>
              <span className="bg-[#DFECEA] text-[#1F8A7C] text-xs font-semibold px-3 py-1 rounded-full">
                Save 35%
              </span>
            </div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white rounded-[28px] p-6 lg:p-8 shadow-sm">
              <small className="uppercase tracking-[2px] text-xs font-bold text-[#7D9591]">
                Starter
              </small>
              <div className="my-8">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl md:text-6xl lg:text-[64px] font-bold leading-none">
                  20
                </span>
                <span className="text-gray-500"> / mo</span>
              </div>
              <p className="text-gray-500 leading-7 mb-6">
                For individuals and small teams getting started with structured
                workflows.
              </p>
              <hr className="mb-6" />
              <ul className="space-y-4">
                {[
                  "Up to 5 team members",
                  "10 active dashboards",
                  "Basic automations (50/mo)",
                  "7-day data history",
                  "Email support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-[#1F8A7C]"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full py-3 md:py-4 border border-[#1A7A6E] text-[#1A7A6E] py-4 rounded-full font-semibold hover:bg-[#1A7A6E] hover:text-white transition">
                Start Free Trial
              </button>
            </div>
            {/* Professional */}
            <div className="relative bg-[#021F1B] rounded-[28px] p-6 lg:p-8 text-white shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1F8A7C] text-white text-xs font-bold tracking-wide px-5 py-2 rounded-full">
                MOST POPULAR
              </div>
              <small className="uppercase tracking-[2px] text-xs font-bold text-[#8EC9C1]">
                Professional
              </small>
              <div className="my-8">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl md:text-6xl lg:text-[64px] font-bold leading-none">
                  60
                </span> 
                <span className="text-gray-300"> / mo</span>
              </div>
              <p className="text-gray-300 leading-7 mb-6">
                For growing teams that need powerful automation and advanced
                reporting.
              </p>
              <hr className="border-gray-700 mb-6" />
              <ul className="space-y-4">
                {[
                  "Up to 25 team members",
                  "Unlimited dashboards",
                  "Advanced automations",
                  "90-day data history",
                  "Priority chat support",
                  "Mobile app access",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-[#1F8A7C]"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full py-3 md:py-4 bg-[#1F8A7C] hover:bg-[#187065] py-4 rounded-full font-semibold transition">
                Start Free Trial
              </button>
            </div>
            {/* Enterprise */}
            <div className="bg-white rounded-[28px] p-8 shadow-sm">
              <small className="uppercase tracking-[2px] text-xs font-bold text-[#7D9591]">
                Enterprise
              </small>
              <div className="my-8">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl md:text-6xl lg:text-[64px] font-bold leading-none">
                  150
                </span>
                <span className="text-gray-500"> / mo</span>
              </div>
              <p className="text-gray-500 leading-7 mb-6">
                For large organizations with custom requirements and compliance
                needs.
              </p>
              <hr className="mb-6" />
              <ul className="space-y-4">
                {[
                  "Unlimited members",
                  "Custom integrations & API",
                  "SSO & permissions",
                  "Unlimited data history",
                  "Dedicated success manager",
                  "SOC 2 reports",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-[#1F8A7C]"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full py-3 md:py-4 border border-[#1A7A6E] text-[#1A7A6E] py-4 rounded-full font-semibold hover:bg-[#1A7A6E] hover:text-white transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Pricing;
