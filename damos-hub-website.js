export default function DamosHubStorefront() {
  const products = [
    {
      title: "AI Folder Locker",
      price: "$9",
      description: "Password + facial recognition desktop vault utility for Windows.",
      checkoutUrl: "https://buy.stripe.com/placeholder-folder-locker"
    },
    {
      title: "Self-Healing PC Utility",
      price: "$15",
      description: "Advanced Windows maintenance and repair toolkit.",
      checkoutUrl: "https://buy.stripe.com/placeholder-pc-utility"
    },
    {
      title: "Fantasy Art Pack",
      price: "$5",
      description: "High-quality AI fantasy artwork and wallpapers.",
      checkoutUrl: "https://buy.stripe.com/placeholder-art-pack"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
              Damo's Hub
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              AI Tools,
              <br />
              Digital Utilities
              <br />
              & Creative Builds
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl">
              Independent digital storefront featuring AI-powered Windows tools,
              automation utilities, digital artwork, and future SaaS projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-bold hover:scale-105 transition"
              >
                Explore Products
              </a>

              <a
                href="#about"
                className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-cyan-400 transition"
              >
                About Damo's Hub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-2">Featured Products</h2>
            <p className="text-zinc-400">
              Downloadable tools, digital products, and AI creations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl hover:border-cyan-400 transition"
            >
              <div className="h-44 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 mb-6 flex items-center justify-center text-zinc-500 text-sm">
                Product Preview
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{product.title}</h3>
                <span className="text-cyan-400 font-bold">{product.price}</span>
              </div>

              <p className="text-zinc-400 mb-6">{product.description}</p>

              <a
                href={product.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-2xl bg-white text-black py-3 font-bold hover:scale-[1.02] transition"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-800 bg-zinc-950/50"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Built Independently</h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Damo's Hub is focused on practical AI-enhanced tools,
              cybersecurity utilities, desktop automation, and creative digital
              projects.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Future plans include SaaS subscriptions, member downloads,
              AI-powered support tools, and premium software releases.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-black p-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-zinc-400">Hosting</span>
                <span className="font-semibold">GitHub Pages</span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-zinc-400">Payments</span>
                <span className="font-semibold">Stripe / Lemon Squeezy</span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-zinc-400">Products</span>
                <span className="font-semibold">Digital Downloads</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Launch Goal</span>
                <span className="font-semibold text-cyan-400">
                  Live Storefront
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8 px-6 text-center text-zinc-500 text-sm">
        © 2026 Damo's Hub — Independent AI Tools & Digital Products
      </footer>
    </div>
  );
}
