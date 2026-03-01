import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="image-wrapper aspect-[3/4] w-full max-w-lg mx-auto lg:mx-0">
              <Image
                src="https://media.naomiviolin.ca/images/20250506-NaomiGarrett-Talent-01-Web.jpg"
                alt="Naomi Garrett with violin"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="section-title animate-fade-in">Welcome</p>
            <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight animate-fade-in" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', animationDelay: '0.1s' }}>
              Creating beautiful moments through <span className="gradient-text">music</span>
            </h1>
            <p className="text-[#7D7D7D] mb-8 leading-relaxed text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Professional violinist available for weddings, special events, and private lessons
              throughout the Quinte and Prince Edward County regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link href="/contact" className="btn text-center">
                Let&apos;s Connect
              </Link>
              <Link href="/about" className="btn btn-outline text-center">
                About Naomi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 warm-section">
        <div className="text-center mb-14">
          <p className="section-title">What I Offer</p>
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Wedding & Event Music
          </h2>
          <div className="decorative-line"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          <Link href="/services/solo-violin" className="service-card block">
            <h3 className="text-xl font-medium mb-3">Solo Violin</h3>
            <p className="text-[#7D7D7D] text-sm leading-relaxed">
              Elegant solo performances for intimate weddings, engagements, and elopements.
            </p>
          </Link>
          <Link href="/services/ensembles" className="service-card block">
            <h3 className="text-xl font-medium mb-3">Ensembles</h3>
            <p className="text-[#7D7D7D] text-sm leading-relaxed">
              Duo and trio configurations with violin, viola, cello, and piano.
            </p>
          </Link>
          <Link href="/lessons" className="service-card block">
            <h3 className="text-xl font-medium mb-3">Private Lessons</h3>
            <p className="text-[#7D7D7D] text-sm leading-relaxed">
              Personalized instruction for students of all ages and skill levels.
            </p>
          </Link>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light italic text-[#5D5D5D] leading-relaxed mb-6">
            &quot;Music is enough for a lifetime, but a lifetime is not enough for music.&quot;
          </p>
          <p className="text-[#7D7D7D]">— Sergei Rachmaninoff</p>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="image-wrapper aspect-square">
            <Image
              src="https://media.naomiviolin.ca/images/20250506-NaomiGarrett-Talent-02-Web.jpg"
              alt="Naomi Garrett"
              fill
              className="object-cover"
            />
          </div>
          <div className="image-wrapper aspect-square">
            <Image
              src="https://media.naomiviolin.ca/images/20250506-NaomiGarrett-Talent-03-Web.jpg"
              alt="Naomi Garrett"
              fill
              className="object-cover"
            />
          </div>
          <div className="image-wrapper aspect-square">
            <Image
              src="https://media.naomiviolin.ca/images/20250506-NaomiGarrett-Talent-04-Web.jpg"
              alt="Naomi Garrett"
              fill
              className="object-cover"
            />
          </div>
          <div className="image-wrapper aspect-square">
            <Image
              src="https://media.naomiviolin.ca/images/20250506-NaomiGarrett-Talent-06-Web.jpg"
              alt="Naomi Garrett"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 warm-section text-center">
        <p className="section-title">Ready to Get Started?</p>
        <h2 className="text-2xl md:text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Let&apos;s make your day unforgettable
        </h2>
        <Link href="/contact" className="btn">
          Get in Touch
        </Link>
      </section>

      {/* Instagram Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12 text-center">
        <a
          href="https://instagram.com/_naomiviolin_"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-[#7D7D7D] hover:text-[#C17B6E] transition-colors group"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className="text-sm tracking-wider">Follow along @_naomiviolin_</span>
        </a>
      </section>
    </div>
  );
}
