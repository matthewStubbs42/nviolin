"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Samples() {
  const latchVideoRef = useRef<HTMLVideoElement>(null);
  const youAndMeVideoRef = useRef<HTMLVideoElement>(null);
  const canonVideoRef = useRef<HTMLVideoElement>(null);
  const jesuVideoRef = useRef<HTMLVideoElement>(null);
  const [latchStarted, setLatchStarted] = useState(false);
  const [youAndMeStarted, setYouAndMeStarted] = useState(false);
  const [canonStarted, setCanonStarted] = useState(false);
  const [jesuStarted, setJesuStarted] = useState(false);

  const handleLatchPlay = () => {
    const video = latchVideoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setLatchStarted(true);
    }
  };

  const handleYouAndMePlay = () => {
    const video = youAndMeVideoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setYouAndMeStarted(true);
    }
  };

  const handleCanonPlay = () => {
    const video = canonVideoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setCanonStarted(true);
    }
  };

  const handleJesuPlay = () => {
    const video = jesuVideoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setJesuStarted(true);
    }
  };

  const popSelections = [
    { title: "Latch", artist: "Sam Smith", performer: "naomi+matt", video: "https://media.naomiviolin.ca/videos/Latch.mp4", poster: "https://media.naomiviolin.ca/images/latch-poster.jpg", ref: latchVideoRef, started: latchStarted, onPlay: handleLatchPlay },
    { title: "You and Me", artist: "Lifehouse", performer: "naomi+matt", video: "https://media.naomiviolin.ca/videos/You and Me.mp4", poster: "https://media.naomiviolin.ca/images/youandme-poster.jpg", ref: youAndMeVideoRef, started: youAndMeStarted, onPlay: handleYouAndMePlay },
  ];

  const classicalSelections = [
    { title: "Canon in D", composer: "Johann Pachelbel", performer: "naomi+matt", video: "https://media.naomiviolin.ca/videos/Pachabel Canon in D.mp4", poster: "https://media.naomiviolin.ca/images/canon-poster.jpg", ref: canonVideoRef, started: canonStarted, onPlay: handleCanonPlay },
    { title: "Jesu Joy of Man's Desiring", composer: "J.S. Bach", performer: "naomi+matt", video: "https://media.naomiviolin.ca/videos/Jesu Joy of Man_s Desiring.mp4", poster: "https://media.naomiviolin.ca/images/jesu-poster.jpg", ref: jesuVideoRef, started: jesuStarted, onPlay: handleJesuPlay },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-20 text-center">
        <p className="section-title">Listen & Watch</p>
        <h1 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Sample Performances
        </h1>
        <div className="decorative-line"></div>
        <p className="text-[#7D7D7D] max-w-xl mx-auto mt-6">
          Get a taste of what we can bring to your special day
        </p>
      </section>

      {/* Pop Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <p className="section-title">Contemporary</p>
        <h2 className="text-2xl font-light mb-10" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Pop Favorites
        </h2>
        <div className="grid md:grid-cols-2 gap-8 stagger-children">
          {popSelections.map((song, index) => (
            <div key={index} className="card overflow-hidden !p-0">
              <div className="aspect-video bg-[#F5EBE6] relative">
                {!song.started ? (
                  <>
                    <Image
                      src={song.poster}
                      alt={`${song.title} thumbnail`}
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={song.onPlay}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                        <svg className="w-6 h-6 text-[#C17B6E] ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                    <video
                      ref={song.ref}
                      className="hidden"
                      preload="none"
                      playsInline
                    >
                      <source src={song.video} type="video/mp4" />
                    </video>
                  </>
                ) : (
                  <video
                    ref={song.ref}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    autoPlay
                  >
                    <source src={song.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-medium mb-1">&quot;{song.title}&quot;</h3>
                  <p className="text-sm text-[#7D7D7D]">by {song.artist}</p>
                </div>
                <span className="text-xs text-[#C17B6E] uppercase tracking-wider font-medium">{song.performer}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Classical Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <p className="section-title">Timeless</p>
        <h2 className="text-2xl font-light mb-10" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Classical Selections
        </h2>
        <div className="grid md:grid-cols-2 gap-8 stagger-children">
          {classicalSelections.map((piece, index) => (
            <div key={index} className="card overflow-hidden !p-0">
              <div className="aspect-video bg-[#F5EBE6] relative">
                {!piece.started ? (
                  <>
                    <Image
                      src={piece.poster}
                      alt={`${piece.title} thumbnail`}
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={piece.onPlay}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                        <svg className="w-6 h-6 text-[#C17B6E] ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                    <video
                      ref={piece.ref}
                      className="hidden"
                      preload="none"
                      playsInline
                    >
                      <source src={piece.video} type="video/mp4" />
                    </video>
                  </>
                ) : (
                  <video
                    ref={piece.ref}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    autoPlay
                  >
                    <source src={piece.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-medium mb-1">&quot;{piece.title}&quot;</h3>
                  <p className="text-sm text-[#7D7D7D]">by {piece.composer}</p>
                </div>
                <span className="text-xs text-[#C17B6E] uppercase tracking-wider font-medium">{piece.performer}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 warm-section text-center">
        <p className="section-title">Have Something in Mind?</p>
        <h2 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Looking for a specific song?
        </h2>
        <p className="text-[#7D7D7D] mb-8 max-w-md mx-auto">
          We can accommodate a wide range of musical styles and requests. Let us know what you&apos;re dreaming of.
        </p>
        <Link href="/contact" className="btn">
          Request a Song
        </Link>
      </section>
    </div>
  );
}
