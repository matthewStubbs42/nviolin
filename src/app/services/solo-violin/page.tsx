import Image from "next/image";
import Link from "next/link";

export default function SoloViolin() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
            <Image
              src="/images/20250506-NaomiGarrett-Talent-10-Web.jpg"
              alt="Naomi Garrett with violin"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="section-title">Services</p>
            <h1 className="text-3xl md:text-4xl font-light mb-8 leading-tight" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Solo Violin
            </h1>
            <p className="quote mb-8">
              Solo violin is the simplest option for live music and lends itself well
              to intimate weddings, engagements, and elopements.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              For couples who prefer to keep things simple and elegant while still
              incorporating live musical performance into their celebrations, solo
              violin offers the perfect balance of sophistication and intimacy.
            </p>
            <Link href="/contact" className="btn">
              Inquire
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider mx-6 md:mx-12 lg:mx-24" />

      {/* Perfect For Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <p className="section-title text-center">Ideal For</p>
        <h2 className="text-2xl font-light text-center mb-12" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Perfect Occasions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 border border-[#E5E5E5]">
            <h3 className="font-medium mb-3">Weddings</h3>
            <p className="text-[#6B6B6B] text-sm leading-relaxed">
              Ceremony music, cocktail hour, and reception background music
            </p>
          </div>
          <div className="text-center p-8 border border-[#E5E5E5]">
            <h3 className="font-medium mb-3">Engagements</h3>
            <p className="text-[#6B6B6B] text-sm leading-relaxed">
              Set the romantic atmosphere for your proposal or engagement party
            </p>
          </div>
          <div className="text-center p-8 border border-[#E5E5E5]">
            <h3 className="font-medium mb-3">Elopements</h3>
            <p className="text-[#6B6B6B] text-sm leading-relaxed">
              Intimate celebrations deserve beautiful live music
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 text-center bg-white">
        <p className="text-[#6B6B6B] mb-6">Ready to add elegance to your special day?</p>
        <Link href="/contact" className="btn">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
