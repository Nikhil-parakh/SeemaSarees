function Footer({ company, links }) {
  return (
    <footer className="border-t border-burgundy/10 bg-white py-10 text-smoke">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-maroon">{company.name}</p>
            <p className="max-w-sm text-sm text-smoke/80">
              Premium saree manufacturing designed to support retailers and
              wholesale partners with consistent quality and partnership-focused
              service.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-burgundy">
              Quick Links
            </h3>
            <div className="mt-4 space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-smoke/80 transition hover:text-maroon"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-burgundy">
              Contact
            </h3>
            <div className="mt-4 space-y-2 text-sm text-smoke/80">
              <p>{company.phone}</p>
              <p>{company.email}</p>
              <p>{company.address}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-burgundy/10 pt-6 text-center text-xs text-smoke/60">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
