import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
            <Image
              src="/images/20250506-NaomiGarrett-Talent-05-Web.jpg"
              alt="Naomi Garrett portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="section-title">About</p>
            <h1 className="text-3xl md:text-4xl font-light mb-8 leading-tight" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Naomi Garrett
            </h1>
            <p className="text-[#6B6B6B] mb-6 leading-relaxed">
              Naomi Garrett is a violinist, soprano, and music educator from Belleville, Ontario,
              raised in Prince Edward County. Coming from a musical family, she began violin studies
              at age five with Gisele Dalbec-Szczesniak and voice training at age eight with Phyllis Antognini.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              She joined the professional musicians&apos; union at the age of 16, when she became a section
              violinist with the Kingston Symphony Association.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider mx-6 md:mx-12 lg:mx-24" />

      {/* Performance Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="section-title">Performance</p>
            <h2 className="text-2xl font-light mb-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              As a Violinist
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Naomi has performed across Canada in prestigious venues including Koerner Hall (Toronto),
              National Arts Centre (Ottawa), Centennial Concert Hall (Winnipeg), Jack Singer Concert Hall (Calgary),
              Windspear Centre (Edmonton), and Chan Centre (Vancouver).
            </p>
          </div>
          <div>
            <p className="section-title">&nbsp;</p>
            <h2 className="text-2xl font-light mb-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              As a Vocalist
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Naomi has performed in musical theatre productions throughout her life, including roles in
              various Gilbert and Sullivan productions, <em>Into the Woods</em>, <em>Oliver!</em>, and
              <em> Little Shop of Horrors</em>.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              She became the founding director of Music at Port Milford&apos;s Choral Day Camp program in 2016
              and sings lead vocals with the Brighton All Star Show Band.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
        <p className="section-title">Background</p>
        <h2 className="text-2xl font-light mb-10" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Education & Training
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
          <p className="text-[#6B6B6B] py-3 border-b border-[#E5E5E5]">
            Music at Port Milford Chamber Music Academy, 2005–2009
          </p>
          <p className="text-[#6B6B6B] py-3 border-b border-[#E5E5E5]">
            National Youth Orchestra of Canada, 2013
          </p>
          <p className="text-[#6B6B6B] py-3 border-b border-[#E5E5E5]">
            B.Mus. Violin, McGill University, 2016
          </p>
          <p className="text-[#6B6B6B] py-3 border-b border-[#E5E5E5]">
            B.Ed. Music Specialization, McGill University, 2016
          </p>
          <p className="text-[#6B6B6B] py-3 border-b border-[#E5E5E5]">
            Orff Level 1 Certification, University of Manitoba, 2017
          </p>
          <p className="text-[#6B6B6B] py-3 border-b border-[#E5E5E5]">
            Post-Baccalaureate Diploma, University of Winnipeg, 2022
          </p>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <p className="section-title">Recognition</p>
        <h2 className="text-2xl font-light mb-8" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Awards & Achievements
        </h2>
        <div className="max-w-2xl">
          <p className="text-[#6B6B6B] leading-relaxed mb-4">
            Naomi holds teaching certifications in three provinces and received the Builder&apos;s Award
            for New Teachers by the Canadian Music Educators&apos; Association in 2018.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed">
            Her school performance groups have been national finalists for the CBC Music Class Challenge
            five times.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/20250506-NaomiGarrett-Talent-02-Web.jpg"
              alt="Naomi Garrett"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/20250506-NaomiGarrett-Talent-03-Web.jpg"
              alt="Naomi Garrett"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/20250506-NaomiGarrett-Talent-04-Web.jpg"
              alt="Naomi Garrett"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/20250506-NaomiGarrett-Talent-06-Web.jpg"
              alt="Naomi Garrett"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
