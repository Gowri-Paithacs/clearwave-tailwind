function Footer() {
  return (
    <footer className="bg-[#081C1C] text-[#8EA3A0]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div className="lg:pr-12">
            <h3 className="text-3xl font-bold text-white">
              clear
              <span className="text-[#43D3C3]">wave</span>
            </h3>
            <p className="mt-5 leading-7 max-w-sm">
              The calm, powerful workspace for teams that want to focus on work
              — not on managing it.
            </p>
            <div className="flex gap-3 mt-8">
              {[
                "fa-x-twitter",
                "fa-linkedin-in",
                "fa-youtube",
                "fa-tiktok",
              ].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-[#9AA9A7] hover:border-[#43D3C3] hover:text-[#43D3C3] transition-all duration-300"
                >
                  <i className={`fab ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          {/* Product */}
          <div>
            <h6 className="text-xs font-bold tracking-[2px] text-[#6E7F7D] uppercase mb-6">
              Product
            </h6>
            <ul className="space-y-4">
              {[
                "Features",
                "Mobile App",
                "Pricing",
                "Integrations",
                "Changelog",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#43D3C3] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="text-xs font-bold tracking-[2px] text-[#6E7F7D] uppercase mb-6">
              Company
            </h6>
            <ul className="space-y-4">
              {["About", "Blog", "Careers", "Press Kit", "Status"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#43D3C3] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          
          <div>
            <h6 className="text-xs font-bold tracking-[2px] text-[#6E7F7D] uppercase mb-6">
              Support
            </h6>
            <ul className="space-y-4">
              {[
                "Help Center",
                "Documentation",
                "Security",
                "Contact",
                "Community",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#43D3C3] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-center md:text-left">
            © 2026 Clearwave. Design by TemplateMo
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-[#43D3C3] transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

