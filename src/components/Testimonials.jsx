function Testimonials() {
  const testimonials = [
    {
      initials: "MR",
      name: "Marcus Reyes",
      role: "Product Director · Meridian",
      stars: true,
      text: "The mobile app alone justified the switch. I can review dashboards and approve tasks between meetings.",
    },
    {
      initials: "PK",
      name: "Priya Kapoor",
      role: "Engineering Lead · Vanta Labs",
      stars: true,
      text: "Onboarding our 30-person team took one afternoon. The learning curve is genuinely flat.",
    },
    {
      initials: "TW",
      name: "Tom Wainwright",
      role: "CFO · Pulsar HQ",
      stars: false,
      text: "...ahead of what we had. We can finally show stakeholders live data instead of preparing decks.",
    },
    {
      initials: "AN",
      name: "Aiko Nakamura",
      role: "CTO · Nexaflow",
      stars: false,
      text: "...message. Had a custom integration question answered in under two hours.",
    },
  ];
  return (
    <section className="w-full bg-[#EEF6F3] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="w-[120px] h-[2px] bg-[#C8DDDD] rounded-full mx-auto mb-6"></div>

          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#101820] leading-tight">
            Teams that{" "}
            <span
              className="text-[#1F8A7C] italic font-medium"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              love
            </span>{" "}
            Clearwave
          </h2>
          <p className="max-w-[420px] mx-auto mt-6 text-gray-500 text-base md:text-lg leading-8">
            Don't take our word for it — here's what real teams say after 90
            days.
          </p>
        </div>
        {/* Cards */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
          {/* Large Card */}
          <div className="bg-white rounded-[24px] shadow-sm p-8 h-full">
            <div className="text-[#1F8A7C] tracking-[3px] text-sm mb-6">
              ★★★★★
            </div>
            <p className="text-[#6B8C88] italic leading-9">
              "We replaced three separate tools with Clearwave and actually have
              fewer meetings now. The automation flows handle the handoffs our
              team used to spend mornings sorting out. It's the calmest workflow
              has ever felt."
            </p>
            <div className="flex items-center mt-8">
              <div className="w-11 h-11 rounded-full bg-[#E5F1EF] text-[#1F8A7C] font-bold text-xs flex items-center justify-center">
                SL
              </div>
              <div className="ml-4">
                <h6 className="font-bold text-[#101820]">Sarah Lindqvist</h6>
                <p className="text-sm text-gray-500">
                  Head of Operations · Stratum IO
                </p>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-[24px] shadow-sm p-7 h-full flex flex-col"
              >
                {item.stars && (
                  <div className="text-[#1F8A7C] tracking-[3px] text-sm mb-4">
                    ★★★★★
                  </div>
                )}
                <p className="text-[#6B8C88] italic leading-8">"{item.text}"</p>
                <div className="flex items-center mt-8">
                  <div className="w-11 h-11 rounded-full bg-[#E5F1EF] text-[#1F8A7C] font-bold text-xs flex items-center justify-center">
                    {item.initials}
                  </div>
                  <div className="ml-4">
                    <h6 className="font-bold text-[#101820]">{item.name}</h6>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
