function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#EEF6F3]">
        <nav className="py-5">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-3xl font-bold text-[#0D1E1C]">
              clear
              <span className="text-[#1A7A6E]">wave</span>
            </a>
            {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-10 text-[#0D1E1C] font-medium">
              <li>
                <a href="#" className="hover:text-[#1A7A6E] transition-colors">
                  App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1A7A6E] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1A7A6E] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1A7A6E] transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1A7A6E] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
            {/* Right Side */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="#"
                className="text-[#0D1E1C] hover:text-[#1A7A6E] transition-colors"
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-[#1A7A6E] text-white px-6 py-3 rounded-full hover:bg-[#2A9D8F] transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </nav>
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-24">
          <div className="grid grid-cols-[45%_55%] items-center gap-14">
            {/* Left */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm mb-6">
                <i className="fa-solid fa-circle-plus text-[#1A7A6E] mr-2"></i>
                <span className="text-sm font-bold text-[#0D1E1C]">
                  Rated
                  <span className="text-[#1A7A6E]"> #1 Productivity SaaS </span>
                  of 2026
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[72px] font-bold leading-[0.95] text-[#0D1E1C]">
                Your workflow,
              </h1>

              <h1
                className="text-[72px] italic leading-[0.95] text-[#1A7A6E] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                finally clear.
              </h1>

              {/* Description */}
              <p className="max-w-[520px] text-[18px] leading-8 text-gray-500 mb-8">
                Clearwave unifies your team's projects, data, and communication
                into one calm, focused surface. Less noise, more done.
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <a
                  href="#"
                  className="bg-[#1A7A6E] text-white px-7 py-4 rounded-full font-medium hover:bg-[#17695e] transition"
                >
                  Start Free – No Card →
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 border border-[#D8E5E1] bg-[#F8FCFB] px-7 py-4 rounded-full text-[#0D1E1C]"
                >
                  <span className="w-6 h-6 rounded-full bg-[#1A7A6E] text-white flex items-center justify-center text-[10px]">
                    <i className="fa-solid fa-play"></i>
                  </span>
                  See it in action
                </a>
              </div>

              {/* Features */}
              <div className="flex items-center gap-8 text-gray-500">
                <span>
                  <i className="fa-solid fa-shield-halved text-[#1A7A6E] mr-2"></i>
                  SOC 2 Certified
                </span>

                <span>
                  <i className="fa-solid fa-bolt text-[#1A7A6E] mr-2"></i>
                  99.9% Uptime SLA
                </span>

                <span>
                  <i className="fa-solid fa-users text-[#1A7A6E] mr-2"></i>
                  50k+ Teams
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-end">
              <div className="relative bg-white rounded-[24px] w-[540px] shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
                {/* Dashboard Header */}
                <div className="bg-[#DFF2EE] rounded-t-[24px] px-5 py-4">
                  <span className="inline-block w-[10px] h-[10px] rounded-full bg-red-400 mr-2"></span>
                  <span className="inline-block w-[10px] h-[10px] rounded-full bg-yellow-400 mr-2"></span>
                  <span className="inline-block w-[10px] h-[10px] rounded-full bg-green-500"></span>
                </div>

                <div className="p-6">
                  <h6 className="font-bold text-[#0D1E1C] mb-6">
                    Team Performance
                  </h6>

                  {/* Bars */}
                  <div className="flex items-end gap-[10px] h-[130px] mb-6">
                    <div className="w-10 h-[35px] rounded bg-[#E5ECEB]"></div>
                    <div className="w-10 h-[50px] rounded bg-[#E5ECEB]"></div>
                    <div className="w-10 h-[40px] rounded bg-[#E5ECEB]"></div>
                    <div className="w-10 h-[65px] rounded bg-[#1A7A6E]"></div>
                    <div className="w-10 h-[45px] rounded bg-[#E5ECEB]"></div>
                    <div className="w-10 h-[70px] rounded bg-[#1A7A6E]"></div>
                    <div className="w-10 h-[60px] rounded bg-[#E5ECEB]"></div>
                    <div className="w-10 h-[75px] rounded bg-[#1A7A6E]"></div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-[#EEF4F2] rounded-2xl p-4">
                      <h4 className="text-xl font-bold">94%</h4>
                      <small className="text-gray-500">Task Rate</small>
                    </div>

                    <div className="bg-[#EEF4F2] rounded-2xl p-4">
                      <h4 className="text-xl font-bold">2.4k</h4>
                      <small className="text-gray-500">Active Users</small>
                    </div>

                    <div className="bg-[#EEF4F2] rounded-2xl p-4">
                      <h4 className="text-xl font-bold">18h</h4>
                      <small className="text-gray-500">Saved / week</small>
                    </div>
                  </div>
                </div>

                {/* Growth Card */}
                <div className="absolute top-5 -right-7 bg-[#1A7A6E] text-white rounded-2xl px-6 py-4 shadow-xl">
                  <h4 className="text-2xl font-bold">↑ 34%</h4>
                  <small>Output this week</small>
                </div>

                {/* Integration Card */}
                <div className="absolute -left-6 -bottom-6 bg-white rounded-2xl px-5 py-3 flex items-center gap-3 shadow-xl">
                  <div className="w-9 h-9 rounded-lg bg-[#1A7A6E] flex items-center justify-center text-white">
                    <i className="fa-solid fa-plus"></i>
                  </div>

                  <div>
                    <h6 className="font-bold text-[#0D1E1C]">
                      New integration
                    </h6>
                    <small className="text-gray-500">
                      Slack connected · just now
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="w-full bg-[#F5FAF8] border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[14px] tracking-[2px] font-semibold text-gray-500 mb-12">
            TRUSTED BY FORWARD-THINKING TEAMS AT
          </p>

          <div className="grid grid-cols-6 items-center text-center">
            <h5 className="flex items-center justify-center text-lg font-semibold text-gray-500">
              <i className="fa-solid fa-cube text-[#1A7A6E] mr-2"></i>
              Nexaflow
            </h5>

            <h5 className="flex items-center justify-center text-lg font-semibold text-gray-500">
              <i className="fa-regular fa-clock text-[#1A7A6E] mr-2"></i>
              Meridian
            </h5>

            <h5 className="flex items-center justify-center text-lg font-semibold text-gray-500">
              <i className="fa-solid fa-play text-[#1A7A6E] mr-2"></i>
              Vanta Labs
            </h5>

            <h5 className="flex items-center justify-center text-lg font-semibold text-gray-500">
              <i className="fa-regular fa-square text-[#1A7A6E] mr-2"></i>
              Pulsar HQ
            </h5>

            <h5 className="flex items-center justify-center text-lg font-semibold text-gray-500">
              <i className="fa-regular fa-user text-[#1A7A6E] mr-2"></i>
              Arclight
            </h5>

            <h5 className="flex items-center justify-center text-lg font-semibold text-gray-500">
              <i className="fa-solid fa-layer-group text-[#1A7A6E] mr-2"></i>
              Korova Co.
            </h5>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
