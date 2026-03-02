const MENU_ITEMS = [
  {
    course: 'I',
    name: 'Osetra Caviar',
    description: 'Hand-harvested osetra on a bed of crème fraîche, with buckwheat blinis and a champagne gelée',
    price: '85',
    tag: 'Opening',
  },
  {
    course: 'IV',
    name: 'Wagyu A5 Tartare',
    description: 'Finely hand-cut Kagoshima A5 wagyu, truffle emulsion, egg yolk confit, smoked paprika ash',
    price: '120',
    tag: 'Signature',
  },
  {
    course: 'VII',
    name: 'Pigeon en Croûte',
    description: 'Bresse pigeon breast encased in black truffle and foie gras farce, sauce Périgueux',
    price: '145',
    tag: 'Main',
  },
  {
    course: 'IX',
    name: 'Comté Soufflé',
    description: '36-month Comté cheese soufflé, walnut praline, and a drizzle of aged Balsamico di Modena',
    price: '65',
    tag: 'Fromage',
  },
  {
    course: 'XI',
    name: 'Mille-Feuille Nocturne',
    description: 'Vanilla of Tahiti, caramelized puff pastry, tonka bean Chantilly, dark chocolate mirror glaze',
    price: '58',
    tag: 'Dessert',
  },
  {
    course: 'XI',
    name: 'Petits Fours',
    description: 'Seasonal mignardises: violet macaron, salted caramel chocolate, bergamot pâte de fruit',
    price: '—',
    tag: 'Finale',
  },
]

export default function Menu({ dishRef }) {
  return (
    <section
      id="menu"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0E0C0A 0%, #131008 50%, #0E0C0A 100%)' }}
    >
      {/* Top section: featured dish landing zone */}
      <div
        className="relative flex flex-col items-center justify-center pt-32 pb-24 px-8"
        style={{ minHeight: '80vh' }}
      >
        {/* Radial glow centered on landing dish */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '80vw',
            height: '80vw',
            maxWidth: 800,
            maxHeight: 800,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,151,58,0.055) 0%, transparent 65%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Ring decorators that echo the dish rings */}
        {[400, 480, 560].map((size) => (
          <div
            key={size}
            className="absolute pointer-events-none"
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              border: '1px solid rgba(200,151,58,0.07)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}

        {/* Dish anchor — the floating image lands here */}
        <div
          id="dish-landing"
          className="relative z-10"
          style={{ width: 300, height: 300, marginBottom: 48 }}
        >
          {/* This is where the floating dish "lands" — no image needed here since the
              fixed-position dish will overlap this zone at the end of the scroll */}
        </div>

        {/* Menu header text below the landing zone */}
        <div className="relative z-10 text-center">
          <span className="section-label block mb-5">
            ✦ &nbsp; The Tasting Menu &nbsp; ✦
          </span>
          <h2
            className="font-display text-cream mb-4 leading-tight"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 400 }}
          >
            Eleven Courses,
            <br />
            <em className="italic" style={{ color: 'var(--gold)' }}>One Journey</em>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4 mb-8">
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
            <div style={{ width: 5, height: 5, background: 'var(--gold)', transform: 'rotate(45deg)' }} />
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          </div>
          <p
            className="font-sans"
            style={{ fontSize: 13, fontWeight: 300, letterSpacing: '0.05em', color: 'rgba(242,234,216,0.45)', maxWidth: 400, margin: '0 auto' }}
          >
            Available Tuesday to Saturday, from 19:00 · €420 per person · Wine pairing from €180
          </p>
        </div>
      </div>

      {/* Menu cards grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-14 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MENU_ITEMS.map((item) => (
            <div key={item.name} className="menu-card p-7 rounded-sm group">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span
                    className="font-display"
                    style={{ fontSize: 11, color: 'var(--gold)', opacity: 0.7, fontStyle: 'italic' }}
                  >
                    Course {item.course}
                  </span>
                  <div style={{ width: 20, height: 1, background: 'rgba(200,151,58,0.3)' }} />
                </div>
                <span
                  className="section-label"
                  style={{ fontSize: '8px', color: 'rgba(200,151,58,0.5)', letterSpacing: '0.25em' }}
                >
                  {item.tag}
                </span>
              </div>

              <h3
                className="font-display text-cream mb-3"
                style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.2 }}
              >
                {item.name}
              </h3>

              <p
                className="font-sans mb-6"
                style={{
                  fontSize: 12,
                  fontWeight: 300,
                  lineHeight: 1.85,
                  letterSpacing: '0.03em',
                  color: 'rgba(242,234,216,0.45)',
                }}
              >
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className="font-display"
                  style={{ fontSize: 20, color: 'var(--gold)', fontWeight: 400 }}
                >
                  {item.price !== '—' ? `€${item.price}` : item.price}
                </span>
                <div
                  className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  style={{ color: 'rgba(200,151,58,0.4)', fontSize: 11 }}
                >
                  <span className="section-label" style={{ fontSize: '8px', color: 'rgba(200,151,58,0.4)' }}>
                    Details
                  </span>
                  <span>→</span>
                </div>
              </div>

              {/* Bottom border accent */}
              <div
                className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, var(--gold), transparent)', opacity: 0.3 }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center mt-20 gap-6">
          <p
            className="font-serif-alt text-center"
            style={{ fontSize: 22, fontStyle: 'italic', color: 'rgba(242,234,216,0.45)', letterSpacing: '0.04em' }}
          >
            "Every plate tells the story of a season."
          </p>
          <span className="section-label" style={{ fontSize: '8px', color: 'rgba(200,151,58,0.4)' }}>
            — Chef Antoine Leroux, Executive Chef
          </span>
          <div className="flex items-center gap-4 mt-4" style={{ height: 1, width: 200, background: 'linear-gradient(90deg, transparent, rgba(200,151,58,0.3), transparent)' }} />
          <div className="flex gap-5 mt-4">
            <a href="#" className="btn-gold">Reserve a Table</a>
            <a href="#" className="btn-gold" style={{ borderColor: 'rgba(200,151,58,0.3)', color: 'rgba(242,234,216,0.5)' }}>
              Download Menu
            </a>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div
        className="border-t py-8 px-8 md:px-14 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderColor: 'rgba(200,151,58,0.1)' }}
      >
        <span className="font-display text-lg" style={{ color: 'rgba(242,234,216,0.3)', letterSpacing: '0.1em' }}>
          NOCTURNE
        </span>
        <p className="font-sans text-center" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(242,234,216,0.2)' }}>
          8 Rue de Rivoli, 75001 Paris · +33 1 42 00 00 00 · nocturne@paris.fr
        </p>
        <p className="font-sans" style={{ fontSize: 10, letterSpacing: '0.15em', color: 'rgba(242,234,216,0.2)' }}>
          © NOCTURNE 2024
        </p>
      </div>
    </section>
  )
}