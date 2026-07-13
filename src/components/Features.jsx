function Features() {
  return (
    <>
      <section className="w-full bg-[#EEF6F3]">
        <section className=" py-24">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-24">
              <div className="inline-flex items-center bg-[#E7F3F0] border border-[#D8EBE7] rounded-full px-5 py-2 shadow-sm mb-6">
                <small className="uppercase font-semibold tracking-wide text-[#1A7A6E] text-xs">
                  <i className="fa-solid fa-circle text-[6px] mr-2"></i>
                  Platform Features
                </small>
              </div>
              <h1 className="text-[56px] font-bold leading-tight text-[#0D1E1C]">
                Built for{" "}
                <span
                  className="text-[#1A7A6E] italic font-medium"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  clarity
                </span>
                <br />
                at every scale
              </h1>
              <p className="w-[560px] mx-auto mt-6 text-lg leading-8 text-gray-500">
                Every feature is designed to reduce friction and surface what
                matters. No bloat, no configuration maze.
              </p>
            </div>
            {/* Feature 01 */}
            <div className="grid grid-cols-2 gap-20 items-center">
              {/* Left Content */}
              <div>
                <p className="text-[11px] tracking-[1.5px] font-bold text-[#78BDB4] uppercase">
                  01 — Unified Dashboard
                </p>
                <h2 className="text-5xl font-bold text-[#101820] mt-5 leading-tight">
                  Every metric,
                  <br />
                  one calm surface
                </h2>
                <p className="text-gray-500 text-lg leading-8 mt-6">
                  Pull data from any source into a single, composable view.
                  Share live dashboards with stakeholders — no exports, no
                  screenshots.
                </p>
                <ul className="mt-8 space-y-5">
                  {[
                    "Drag-and-drop widget builder",
                    "Real-time data sync across all sources",
                    "Role-based sharing with granular permissions",
                  ].map((item) => (
                    <li key={item} className="flex items-center text-[#101820]">
                      <span className="w-5 h-5 rounded-full bg-[#DFF2EE] text-[#1A7A6E] flex items-center justify-center text-[11px] mr-4">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right Card */}
              <div>
                <div className="bg-white rounded-[24px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                  {/* Top Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="bg-[#F7F9F8] rounded-2xl p-5">
                      <small className="text-gray-500">Monthly Revenue</small>
                      <h4 className="text-3xl font-bold mt-2">$84.2k</h4>
                      <div className="mt-4 h-[3px] rounded-full bg-gradient-to-r from-[#1A7A6E] from-[75%] to-[#D9E4E2] to-[75%]"></div>
                    </div>
                    <div className="bg-[#F7F9F8] rounded-2xl p-5">
                      <small className="text-gray-500">Active Users</small>
                      <h4 className="text-3xl font-bold mt-2">12,481</h4>
                      <div className="mt-4 h-[3px] rounded-full bg-gradient-to-r from-[#1A7A6E] from-[75%] to-[#D9E4E2] to-[75%]"></div>
                    </div>
                  </div>
                  {/* Activity */}
                  <div className="bg-[#F7F9F8] rounded-2xl p-5">
                    <h6 className="font-semibold text-[#101820] mb-4">
                      Recent Activity
                    </h6>
                    {[
                      ["Q3 Report synced", "Done"],
                      ["Team review pending", "Active"],
                      ["Analytics export", "Queued"],
                    ].map(([title, status]) => (
                      <div
                        key={title}
                        className="flex justify-between items-center bg-[#EDF5F2] rounded-xl px-4 py-3 mb-3 last:mb-0"
                      >
                        <span>{title}</span>
                        <small className="font-semibold text-[#1A7A6E]">
                          {status}
                        </small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Part 2 */}
            <section className="max-w-7xl mx-auto py-20">
              <div className="grid grid-cols-2 gap-20 items-center">
                {/* Left Card */}
                <div>
                  <div className="bg-white rounded-[24px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                    <div className="space-y-3">
                      {[
                        ["Weekly digest → Slack", "Running"],
                        ["Lead scored → Notify sales", "Running"],
                        ["Invoice due → Alert CFO", "Active"],
                        ["Report sync → Drive", "Paused"],
                      ].map(([title, status], i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center bg-[#EDF5F2] rounded-xl px-4 py-3"
                        >
                          <span>{title}</span>
                          <small className="bg-[#DFF2EE] text-[#1A7A6E] px-3 py-1 rounded-full text-xs font-semibold">
                            {status}
                          </small>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-[2fr_1fr] gap-4 mt-5">
                      <div className="bg-[#F8FAF9] rounded-2xl p-5">
                        <small className="text-gray-500">
                          Hours Saved This Month
                        </small>
                        <h4 className="text-3xl font-bold mt-2">148h</h4>

                        <div className="h-[3px] rounded-full bg-[#D9E4E2] mt-4 overflow-hidden">
                          <div className="w-3/4 h-full bg-[#1A7A6E]"></div>
                        </div>
                      </div>
                      <div className="bg-[#F8FAF9] rounded-2xl p-5">
                        <small className="text-gray-500">Flows</small>
                        <h4 className="text-3xl font-bold mt-2">24</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div>
                  <small className="uppercase tracking-[1.5px] text-[#78BDB4] font-bold text-[11px]">
                    02 — Automation Flows
                  </small>

                  <h2 className="text-5xl font-bold mt-4 leading-tight">
                    Routines that run
                    <br />
                    <span
                      className="italic text-[#1A7A6E]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      themselves
                    </span>
                  </h2>
                  <p className="text-gray-500 leading-8 mt-6">
                    Build automation flows with natural language. Clearwave
                    understands your intent and suggests the next step — no
                    flowchart diagrams needed.
                  </p>
                  <ul className="space-y-4 mt-8">
                    {[
                      "Natural language automation builder",
                      "500+ pre-built trigger templates",
                      "Full audit trail for every action",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#DFF2EE] text-[#1A7A6E] flex items-center justify-center text-xs">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Part 3 */}
            <section className="max-w-7xl mx-auto py-20">
              <div className="grid grid-cols-2 gap-20 items-center">
                {/* Left */}
                <div>
                  <small className="uppercase tracking-[1.5px] text-[#78BDB4] font-bold text-[11px]">
                    03 — Team Collaboration
                  </small>
                  <h2 className="text-5xl font-bold mt-4 leading-tight">
                    Comments, context,
                    <br />
                    and clarity
                  </h2>
                  <p className="text-gray-500 leading-8 mt-6">
                    Annotate anything, assign tasks inline, and resolve
                    conversations without switching tabs. The work and
                    discussion stay together.
                  </p>
                  <ul className="space-y-4 mt-8">
                    {[
                      "Inline comments on any data point",
                      "Threaded task assignments",
                      "Real-time presence and live cursors",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#DFF2EE] text-[#1A7A6E] flex items-center justify-center text-xs">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right */}
                <div>
                  <div className="bg-white rounded-[24px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                    <div className="grid grid-cols-[7fr_5fr] gap-4 mb-4">
                      <div className="bg-[#F8FAF9] rounded-2xl p-5">
                        <small className="text-gray-500">Online Now</small>

                        <div className="flex mt-4">
                          <span className="w-8 h-8 rounded-full bg-[#17806D] text-white flex items-center justify-center text-xs border-2 border-white">
                            A
                          </span>
                          <span className="-ml-2 w-8 h-8 rounded-full bg-[#3F8B90] text-white flex items-center justify-center text-xs border-2 border-white">
                            K
                          </span>
                          <span className="-ml-2 w-8 h-8 rounded-full bg-[#646464] text-white flex items-center justify-center text-xs border-2 border-white">
                            M
                          </span>
                          <span className="-ml-2 w-8 h-8 rounded-full bg-[#67B8B2] text-white flex items-center justify-center text-xs border-2 border-white">
                            +5
                          </span>
                        </div>
                      </div>

                      <div className="bg-[#F8FAF9] rounded-2xl p-5">
                        <small className="text-gray-500">Open Tasks</small>
                        <h4 className="text-3xl font-bold mt-2">37</h4>
                      </div>
                    </div>
                    <div className="bg-[#EEF5F2] rounded-2xl p-4">
                      <h6 className="font-semibold mb-3">Recent Comments</h6>

                      {[
                        ["Alex → Q3 chart updated", "Resolved"],
                        ["Kim → Review needed", "Open"],
                        ["Maya → Approved & shipped", "Done"],
                      ].map(([title, status]) => (
                        <div
                          key={title}
                          className="flex justify-between bg-[#EDF5F2] rounded-xl px-4 py-3 mb-2"
                        >
                          <span>{title}</span>
                          <small className="text-[#1A7A6E] font-semibold">
                            {status}
                          </small>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Stats Footer */}
            <section className="w-full bg-[#EDF5F2] border-t border-gray-200 py-20">
              <div className="max-w-7xl mx-auto grid grid-cols-4">
                {[
                  ["17", "K+", "Teams Worldwide", "Across 80+ countries"],
                  [
                    "11",
                    "%",
                    "Avg. Productivity Gain",
                    "Measured in first 30 days",
                  ],
                  ["34.3", "%", "Uptime SLA", "Guaranteed and monitored"],
                  [
                    "6",
                    "h",
                    "Saved Per Team Weekly",
                    "On average across all plans",
                  ],
                ].map(([num, unit, title, desc], i) => (
                  <div
                    key={i}
                    className={`px-10 ${
                      i !== 3 ? "border-r border-gray-300" : ""
                    }`}
                  >
                    <div className="w-8 h-1 rounded-full bg-[#1A7A6E] mb-8"></div>
                    <h2 className="text-6xl font-bold leading-none text-[#101820]">
                      {num}
                      <span className="text-4xl text-[#1A7A6E]">{unit}</span>
                    </h2>
                    <h6 className="text-xl font-semibold mt-5">{title}</h6>
                    <p className="text-gray-500 mt-2">{desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}
export default Features;
