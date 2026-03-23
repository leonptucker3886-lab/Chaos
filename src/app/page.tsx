export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="text-2xl">✦ U</div>
        <nav className="flex gap-8 text-sm tracking-widest">
          <a href="#" className="hover:text-gray-300 transition-colors">THE GRAND COMPOSITION</a>
          <a href="#" className="hover:text-gray-300 transition-colors">SCRIPTURE</a>
          <a href="#" className="hover:text-gray-300 transition-colors">RULES OF ENGAGEMENT</a>
        </nav>
      </header>

      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <p className="text-xl mb-8">C</p>
          <h1 className="text-5xl md:text-7xl font-serif tracking-wider mb-6">CHURCH OF THE UNIVERSE</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            A spiritual community honoring the cosmos as our cathedral, the stars as our congregation,
            and the infinite mysteries of existence as our sacred text.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif tracking-wider mb-8">What is</h2>
          <h3 className="text-4xl font-serif mb-6">CHURCH OF THE UNIVERSE</h3>
          <p className="text-gray-300 leading-relaxed">
            We believe the Universe is everything—it was here before us and will be here after.
            We are a community seeking the divine in the infinite expanse above and within.
            The stars are our lineage; the cosmos, our sacred ground.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { title: "CONTEMPLATION", desc: "Meditating on cosmic truths" },
            { title: "DISCOVERY", desc: "Exploring the unknown" },
            { title: "CONNECTION", desc: "Unitng with the infinite" },
          ].map((item) => (
            <div key={item.title} className="text-center px-8 py-6">
              <p className="text-2xl mb-4">✦</p>
              <h4 className="text-lg tracking-widest mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 text-center text-sm">
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="hover:text-gray-300 transition-colors">SCRIPTURE</a>
          <a href="#" className="hover:text-gray-300 transition-colors">THE GRAND COMPOSITION</a>
          <a href="#" className="hover:text-gray-300 transition-colors">RULES OF ENGAGEMENT</a>
        </div>
        <p className="text-gray-500">© 2026 CHURCH OF THE UNIVERSE • ALL RIGHTS RESERVED</p>
      </footer>
    </main>
  );
}