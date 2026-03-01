import Image from "next/image";
import Link from "next/link";

export default function Lessons() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="image-wrapper aspect-[3/4]">
            <Image
              src="https://media.naomiviolin.ca/images/Lessons 2.jpg"
              alt="Naomi Garrett teaching"
              fill
              className="object-cover object-[center_25%]"
              priority
            />
          </div>
          <div>
            <p className="section-title">Education</p>
            <h1 className="text-3xl md:text-4xl font-light mb-8 leading-tight" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Violin Lessons
            </h1>
            <p className="text-[#7D7D7D] leading-relaxed mb-10">
              Naomi brings over a decade of experience teaching violin to students from
              pre-kindergarten to adults. She has instructed hundreds of beginner students
              in private studios and public schools, while also supporting advanced pupils
              seeking admission to prestigious music programs.
            </p>
            <Link href="/contact" className="btn">
              Inquire About Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 warm-section">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light italic text-[#5D5D5D] leading-relaxed mb-6">
            &quot;Tell me and I forget. Teach me and I remember. Involve me and I learn.&quot;
          </p>
          <p className="text-[#7D7D7D]">— Xunzi</p>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <p className="section-title">Qualifications</p>
        <h2 className="text-2xl font-light mb-10" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Teaching Credentials
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 max-w-3xl">
          <p className="text-[#7D7D7D] py-3 border-b border-[#EDE5E0]">
            Bachelor of Music (Violin)
          </p>
          <p className="text-[#7D7D7D] py-3 border-b border-[#EDE5E0]">
            Bachelor of Education (Music)
          </p>
          <p className="text-[#7D7D7D] py-3 border-b border-[#EDE5E0]">
            Post-Baccalaureate Diploma in Education
          </p>
          <p className="text-[#7D7D7D] py-3 border-b border-[#EDE5E0]">
            Orff Level 1 Certification
          </p>
          <p className="text-[#7D7D7D] py-3 border-b border-[#EDE5E0]">
            Teaching certifications in three provinces
          </p>
          <p className="text-[#7D7D7D] py-3 border-b border-[#EDE5E0]">
            CMEA Builder&apos;s Award for New Teachers, 2018
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
        <p className="section-title">Philosophy</p>
        <h2 className="text-2xl font-light mb-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Teaching Approach
        </h2>
        <p className="text-[#7D7D7D] leading-relaxed mb-10 max-w-2xl">
          Naomi integrates multiple pedagogical methods to personalize instruction for
          each student, drawing from established approaches:
        </p>
        <div className="grid md:grid-cols-4 gap-6 max-w-3xl">
          <div className="text-center p-6 border border-[#EDE5E0] rounded-lg hover:border-[#D4A59A] transition-colors">
            <p className="text-sm">Suzuki Method</p>
          </div>
          <div className="text-center p-6 border border-[#EDE5E0] rounded-lg hover:border-[#D4A59A] transition-colors">
            <p className="text-sm">Orff Approach</p>
          </div>
          <div className="text-center p-6 border border-[#EDE5E0] rounded-lg hover:border-[#D4A59A] transition-colors">
            <p className="text-sm">Kodály Approach</p>
          </div>
          <div className="text-center p-6 border border-[#EDE5E0] rounded-lg hover:border-[#D4A59A] transition-colors">
            <p className="text-sm">Creative Ability Development</p>
          </div>
        </div>
      </section>

      {/* RCM Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <p className="section-title">Exam Prep</p>
        <h2 className="text-2xl font-light mb-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          RCM Examination Preparation
        </h2>
        <p className="text-[#7D7D7D] leading-relaxed max-w-2xl">
          Naomi brings years of experience in preparing students for Royal Conservatory of Music (RCM)
          examinations, covering both practical assessments (technique, artistic expression,
          ear training) and music theory exams (foundational skills in music literacy, composition and musicology).
        </p>
      </section>

      {/* Location Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 warm-section">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="section-title">Location</p>
            <h2 className="text-2xl font-light mb-2" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Home Studio
            </h2>
            <p className="text-[#7D7D7D]">
              Lessons are offered from Naomi&apos;s home studio in Belleville, Ontario.
            </p>
          </div>
          <Link href="/contact" className="btn">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
