import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalDetails } from "../Details";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // GSAP Context pentru cleanup automat
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.from(nameRef.current, {
        duration: 1.2,
        y: 80,
        opacity: 0,
        ease: "back.out(1.7)"
      });
      
      gsap.from(taglineRef.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: "power3.out"
      });

      gsap.from(ctaRef.current.children, {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.15,
        delay: 0.6,
        ease: "power2.out"
      });

      // Parallax pe scroll
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        },
        yPercent: -15
      });
    }, heroRef);

    // Cleanup
    return () => ctx.revert();
  }, []);

  const { name, tagline } = personalDetails;

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 pt-20 px-4"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-b from-secondary/10 to-primary/10 rounded-full animate-pulse delay-1000" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-10 text-dark-content/70 dark:text-light-content/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Profile Picture Placeholder */}
        <div className="w-36 h-36 md:w-48 md:h-48 mx-auto mb-10 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/30 dark:ring-slate-800/50 bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center text-2xl font-bold text-white/80">
            LV
          </div>
        </div>

        {/* Name */}
        <h1 
          ref={nameRef}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight bg-gradient-to-r from-gray-900 to-slate-700 via-slate-800 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-300 dark:to-white"
        >
          {name}
        </h1>

        {/* Tagline */}
        <p 
          ref={taglineRef}
          className="text-xl md:text-2xl lg:text-3xl mb-12 px-4 text-dark-content/90 dark:text-light-content/90 font-light max-w-3xl mx-auto leading-relaxed"
        >
          {tagline}
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link
            to="/projects"
            className="group px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform ring-4 ring-indigo-500/20 hover:ring-indigo-500/40"
          >
            <span>View Projects</span>
          </Link>
          <Link
            to="/about"
            className="px-10 py-4 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-800 dark:text-slate-200 font-semibold text-lg rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-lg"
          >
            About Me
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm md:text-base">
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-black text-indigo-600 font-mono">12</div>
            <div className="uppercase tracking-wider text-slate-600 dark:text-slate-400 font-medium">Projects</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-black text-purple-600 font-mono">2+</div>
            <div className="uppercase tracking-wider text-slate-600 dark:text-slate-400 font-medium">Years Exp</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-black text-emerald-600 font-mono">50+</div>
            <div className="uppercase tracking-wider text-slate-600 dark:text-slate-400 font-medium">Clients</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-black text-amber-600 font-mono">100%</div>
            <div className="uppercase tracking-wider text-slate-600 dark:text-slate-400 font-medium">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;  
