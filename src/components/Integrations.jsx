function Integrations() {
  const rows = [
    [
      "Slack",
      "Google Sheets",
      "Google Drive",
      "Zapier",
      "Stripe",
      "GitHub",
      "Notion",
    ],
    [
      "Mailchimp",
      "HubSpot",
      "Airtable",
      "Intercom",
      "Salesforce",
      "Figma",
      "Linear",
    ],
    ["Jira", "Webflow"],
  ];
  return (
    <section className="w-full bg-[#F2F8F6] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-[#D8EBE7] bg-white px-5 py-2 shadow-sm mb-8">
          <i className="fa-solid fa-circle text-[6px] text-[#1A7A6E] mr-2"></i>
          <small className="uppercase tracking-[2px] font-semibold text-[#1A7A6E]">
            Integrations
          </small>
        </div>
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#101820] leading-tight">
          Connects with your
        </h2>
        <h2
          className="text-4xl md:text-5xl lg:text-[56px] italic font-medium text-[#1A7A6E] leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          existing stack
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-500 leading-8 mb-16">
          Connect your existing tools in minutes. Clearwave works with the
          platforms your team already relies on.
        </p>

        {/* Integration Pills */}
        <div className="space-y-5">
          {rows.map((row, index) => (
            <div key={index} className="flex flex-wrap justify-center gap-4">
              {row.map((tool) => (
                <div
                  key={tool}
                  className="px-7 py-4 rounded-full bg-white text-[#5F7572] font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-default"
                >
                  {tool}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Integrations;
