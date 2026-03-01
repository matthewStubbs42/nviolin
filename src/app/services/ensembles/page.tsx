import Image from "next/image";
import Link from "next/link";

export default function Ensembles() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="https://media.naomiviolin.ca/images/naomi+matt photo 2.jpg"
              alt="Naomi and Matt performing together"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="section-title">Services</p>
            <h1 className="text-3xl md:text-4xl font-light mb-8 leading-tight" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Ensembles
            </h1>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              For larger venues where a fuller sound can help fill the space,
              ensemble configurations offer the perfect solution for your event.
            </p>
            <Link href="/contact" className="btn">
              Inquire
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider mx-6 md:mx-12 lg:mx-24" />

      {/* naomi+matt Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-title">Duo</p>
            <h2 className="text-2xl font-light mb-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              naomi+matt
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              A violin/piano duo featuring Naomi Garrett and her husband Matthew Stubbs.
              The pair has performed together since meeting at a classical music festival in 2015
              and are based in the Quinte region since 2023.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              They offer performances for weddings and concerts, with repertoire spanning
              classical masterworks to contemporary favorites.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="https://media.naomiviolin.ca/images/naomi+matt photo.jpg"
              alt="Naomi and Matt"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* County Strings Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
        <p className="section-title">String Ensembles</p>
        <h2 className="text-2xl font-light mb-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          County Strings
        </h2>
        <p className="text-[#6B6B6B] leading-relaxed mb-10 max-w-2xl">
          Founded by cellists Amber Walton-Amar and violinist Jenna Gallagher alongside Naomi,
          County Strings provides flexible instrumentation options for your event.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
          <div className="py-4 border-b border-[#E5E5E5]">
            <p className="text-[#6B6B6B]">Violin / Violin Duo</p>
          </div>
          <div className="py-4 border-b border-[#E5E5E5]">
            <p className="text-[#6B6B6B]">Violin / Viola Duo</p>
          </div>
          <div className="py-4 border-b border-[#E5E5E5]">
            <p className="text-[#6B6B6B]">Violin / Cello Duo</p>
          </div>
          <div className="py-4 border-b border-[#E5E5E5]">
            <p className="text-[#6B6B6B]">Violin / Viola / Cello Trio</p>
          </div>
        </div>
        <p className="text-sm text-[#6B6B6B] mt-8">
          Special arrangements with additional instruments may be available upon request.
        </p>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 text-center">
        <p className="text-[#6B6B6B] mb-6">Ready to discuss your event?</p>
        <Link href="/contact" className="btn">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
