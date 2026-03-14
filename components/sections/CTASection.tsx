const NAVY = '#1c1c2e'
const GOLD = '#c9903e'
const GOLD_LIGHT = '#e0b06a'

function CTASection() {
  return (
    <section id="get-involved" style={{ background: NAVY }} className="py-20 sm:py-28 relative overflow-hidden">

      {/* Subtle gold grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${GOLD}18 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — message */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: 32, height: 2, background: GOLD, borderRadius: 1 }} />
              <span
                className="text-xs font-semibold uppercase"
                style={{ color: GOLD, fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.2em' }}
              >
                Walk With Us
              </span>
            </div>
            <h2
              className="font-serif font-bold text-white mb-5 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            >
              Ten years in,<br />
              <span style={{ color: GOLD_LIGHT }}>the work continues.</span>
            </h2>
            <p
              className="leading-relaxed mb-3"
              style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Quicksand, sans-serif', fontSize: '1rem', maxWidth: 440 }}
            >
              Every child we&apos;ve supported was found because someone cared enough to reach out. If you know a child who needs help, tell us. If you can give your time, we welcome you. If you want to be part of this story, there&apos;s a place for you here.
            </p>

            <p
              className="font-serif italic"
              style={{ color: GOLD_LIGHT, fontSize: '1rem', marginTop: '1.5rem' }}
            >
              &quot;When it comes to education, no child deserves to be left behind.&quot;
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div style={{ width: 16, height: 1.5, background: GOLD, borderRadius: 1 }} />
              <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Quicksand, sans-serif', fontSize: '0.72rem', letterSpacing: '0.1em' }}>
                Charulatha, Founder
              </span>
            </div>
          </div>

          {/* Right — actions */}
          <div className="flex flex-col gap-4">
            {[
              {
                href: 'mailto:lawparktrust@gmail.com?subject=Child%20Nomination',
                label: 'Nominate a Child',
                sub: 'Know a child in a rural school who needs support? Tell us.',
                primary: true,
              },
              {
                href: 'mailto:lawparktrust@gmail.com?subject=Volunteer%20Inquiry',
                label: 'Volunteer',
                sub: 'Give your time, skills, or expertise to our programmes.',
                primary: false,
              },
              {
                href: 'mailto:lawparktrust@gmail.com?subject=Partnership%20Inquiry',
                label: 'Partner With Us',
                sub: 'CSR programmes, supply drives, and joint events welcome.',
                primary: false,
              },
            ].map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="flex items-center justify-between gap-4 px-6 py-4 transition-opacity hover:opacity-90"
                style={
                  action.primary
                    ? { background: GOLD }
                    : { background: 'rgba(255,255,255,0.06)', border: `1px solid rgba(255,255,255,0.12)` }
                }
              >
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: action.primary ? NAVY : 'rgba(255,255,255,0.9)', fontFamily: 'Quicksand, sans-serif' }}
                  >
                    {action.label}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: action.primary ? `${NAVY}bb` : 'rgba(255,255,255,0.45)', fontFamily: 'Quicksand, sans-serif' }}
                  >
                    {action.sub}
                  </div>
                </div>
                <span style={{ color: action.primary ? NAVY : GOLD_LIGHT, fontSize: '1.1rem' }}>→</span>
              </a>
            ))}

            {/* Contact strip */}
            <div
              className="mt-2 px-6 py-4 text-xs grid grid-cols-2 gap-2"
              style={{ borderTop: `1px solid rgba(255,255,255,0.1)`, color: 'rgba(255,255,255,0.4)', fontFamily: 'Quicksand, sans-serif' }}
            >
              <div>
                <span style={{ color: GOLD, fontWeight: 600, display: 'block', marginBottom: 2 }}>Email</span>
                lawparktrust@gmail.com
              </div>
              <div>
                <span style={{ color: GOLD, fontWeight: 600, display: 'block', marginBottom: 2 }}>Support</span>
                <a href="https://razorpay.me/@lawparkeducationaltrust" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'inherit' }}>
                  razorpay.me/@lawparkeducationaltrust
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CTASection
