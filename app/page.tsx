"use client";
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    setStatus("SENDING");

    try {
      const response = await fetch("https://formspree.io/f/xvzljegw", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <div className="bg-[#f9f7f2b2] min-h-screen font-serif text-[#1A1A1A] overflow-x-hidden">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-3 bg-[#E9E9E9] sticky top-0 z-[100] border-b border-zinc-200">
        <div className="flex items-center gap-8 lg:gap-12">
          <div 
            className="flex flex-col items-center leading-none group cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <img
              src="/icon.jpeg" 
              alt="EF & Steps Icon"
              className="h-10 md:h-14 w-auto mb-1 opacity-90 group-hover:opacity-100 transition-all duration-300" 
            />
            <div className="flex flex-col items-center">
              <span className="text-[9px] font-medium tracking-[0.5em] uppercase text-zinc-800 group-hover:text-[#B5A48B] transition-colors duration-300 italic">
                EFSteps
              </span>
              <div className="h-[1px] w-0 group-hover:w-full bg-[#B5A48B] transition-all duration-500 mt-0.5"></div>
            </div>
          </div>

          {/* Professional Desktop Navigation with 'V' Dropdown Carets */}
          <div className="hidden lg:flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600 items-center">
            
            {/* Collections */}
            <div className="relative group py-2">
              <Link href="/collections" className="hover:text-black flex items-center gap-1.5 transition-colors">
                <span>Collections</span>
                <span className="text-[10px] text-[#B5A48B] font-bold transition-transform duration-300 group-hover:rotate-180 inline-block">⌄</span>
              </Link>
              <div className="absolute top-full left-0 w-60 bg-[#F9F7F2] border border-zinc-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 flex flex-col gap-2 px-4 z-50">
                <Link href="/collections/seasonal" className="text-[10px] tracking-widest text-zinc-700 hover:text-[#B5A48B] py-1 border-b border-zinc-200/50">Seasonal Favourites</Link>
                <Link href="/collections/outerwear" className="text-[10px] tracking-widest text-zinc-700 hover:text-[#B5A48B] py-1">Signature Outerwear</Link>
              </div>
            </div>

            {/* Products */}
            <div className="relative group py-2">
              <Link href="/products" className="hover:text-black flex items-center gap-1.5 transition-colors">
                <span>Products</span>
                <span className="text-[10px] text-[#B5A48B] font-bold transition-transform duration-300 group-hover:rotate-180 inline-block">⌄</span>
              </Link>
              <div className="absolute top-full left-0 w-60 bg-[#F9F7F2] border border-zinc-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 flex flex-col gap-2 px-4 z-50">
                <Link href="/products/footwear" className="text-[10px] tracking-widest text-zinc-700 hover:text-[#B5A48B] py-1 border-b border-zinc-200/50">Artisanal Footwear Series</Link>
                <Link href="/products/leather-shells" className="text-[10px] tracking-widest text-zinc-700 hover:text-[#B5A48B] py-1">Exclusive Leather Shells</Link>
              </div>
            </div>

            {/* Resources */}
            <div className="relative group py-2">
              <Link href="/resources" className="hover:text-black flex items-center gap-1.5 transition-colors">
                <span>Resources</span>
                <span className="text-[10px] text-[#B5A48B] font-bold transition-transform duration-300 group-hover:rotate-180 inline-block">⌄</span>
              </Link>
              <div className="absolute top-full left-0 w-60 bg-[#F9F7F2] border border-zinc-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 flex flex-col gap-2 px-4 z-50">
                <Link href="/resources/craft" className="text-[10px] tracking-widest text-zinc-700 hover:text-[#B5A48B] py-1 border-b border-zinc-200/50">Master Craftsmanship</Link>
                <Link href="/resources/sustainability" className="text-[10px] tracking-widest text-zinc-700 hover:text-[#B5A48B] py-1">Sustainability & Sourcing</Link>
              </div>
            </div>

            {/* Company */}
            <div className="relative group py-2">
              <Link href="/company" className="hover:text-black flex items-center gap-1.5 transition-colors">
                <span>Company</span>
                <span className="text-[10px] text-[#B5A48B] font-bold transition-transform duration-300 group-hover:rotate-180 inline-block">⌄</span>
              </Link>
              <div className="absolute top-full left-0 w-60 bg-[#F9F7F2] border border-zinc-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 flex flex-col gap-2 px-4 z-50">
                <Link href="/company/heritage" className="text-[10px] tracking-widest text-zinc-700 hover:text-[#B5A48B] py-1 border-b border-zinc-200/50">Brand Heritage</Link>
                <Link href="/company/facility" className="text-[10px] tracking-widest text-zinc-700 hover:text-[#B5A48B] py-1 border-b border-zinc-200/50">Production Facility</Link>
                <Link href="/company/vision" className="text-[10px] tracking-widest text-zinc-700 hover:text-[#B5A48B] py-1">Global Vision</Link>
              </div>
            </div>

            <Link href="#contact" className="hover:text-black transition-colors py-2">Contact</Link>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <Link href="#contact" className="hidden sm:block text-zinc-700 hover:text-black transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="cursor-pointer">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>
          <Link href="#collections" className="hidden sm:block border border-[#B5A48B] px-5 py-2 text-[10px] uppercase tracking-[0.3em] font-bold text-[#B5A48B] hover:bg-[#B5A48B] hover:text-white transition-all duration-500">
            Explore
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="lg:hidden flex items-center gap-2 bg-[#E3DFD5] border border-[#B5A48B]/40 px-3 py-1.5 text-zinc-800 rounded-sm hover:border-[#B5A48B] transition-all focus:outline-none"
          >
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-700">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <div className="w-4 h-3 flex flex-col justify-between items-end">
              <span className={`h-[1.5px] bg-[#B5A48B] transition-all duration-300 ${menuOpen ? 'w-4 rotate-45 translate-y-[5px]' : 'w-4'}`}></span>
              <span className={`h-[1.5px] bg-[#B5A48B] transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-2.5'}`}></span>
              <span className={`h-[1.5px] bg-[#B5A48B] transition-all duration-300 ${menuOpen ? 'w-4 -rotate-45 -translate-y-[5px]' : 'w-3.5'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#E9E9E9] border-b border-zinc-200 py-5 px-6 flex flex-col gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600 sticky top-[65px] z-[99] shadow-lg max-h-[75vh] overflow-y-auto">
          
          <div className="flex flex-col gap-1.5">
            <span className="text-[#B5A48B] font-bold text-[10px] tracking-[0.3em] flex items-center justify-between">
              Collections <span className="text-[10px]">⌄</span>
            </span>
            <Link href="/collections/seasonal" onClick={() => setMenuOpen(false)} className="hover:text-black py-1 pl-3 border-l border-[#B5A48B]">Seasonal Favourites</Link>
            <Link href="/collections/outerwear" onClick={() => setMenuOpen(false)} className="hover:text-black py-1 pl-3 border-l border-[#B5A48B]">Signature Outerwear</Link>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[#B5A48B] font-bold text-[10px] tracking-[0.3em] flex items-center justify-between">
              Products <span className="text-[10px]">⌄</span>
            </span>
            <Link href="/products/footwear" onClick={() => setMenuOpen(false)} className="hover:text-black py-1 pl-3 border-l border-[#B5A48B]">Artisanal Footwear Series</Link>
            <Link href="/products/leather-shells" onClick={() => setMenuOpen(false)} className="hover:text-black py-1 pl-3 border-l border-[#B5A48B]">Exclusive Leather Shells</Link>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[#B5A48B] font-bold text-[10px] tracking-[0.3em] flex items-center justify-between">
              Resources <span className="text-[10px]">⌄</span>
            </span>
            <Link href="/resources/craft" onClick={() => setMenuOpen(false)} className="hover:text-black py-1 pl-3 border-l border-[#B5A48B]">Master Craftsmanship</Link>
            <Link href="/resources/sustainability" onClick={() => setMenuOpen(false)} className="hover:text-black py-1 pl-3 border-l border-[#B5A48B]">Sustainability & Sourcing</Link>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[#B5A48B] font-bold text-[10px] tracking-[0.3em] flex items-center justify-between">
              Company <span className="text-[10px]">⌄</span>
            </span>
            <Link href="/company/heritage" onClick={() => setMenuOpen(false)} className="hover:text-black py-1 pl-3 border-l border-[#B5A48B]">Brand Heritage</Link>
            <Link href="/company/facility" onClick={() => setMenuOpen(false)} className="hover:text-black py-1 pl-3 border-l border-[#B5A48B]">Production Facility</Link>
            <Link href="/company/vision" onClick={() => setMenuOpen(false)} className="hover:text-black py-1 pl-3 border-l border-[#B5A48B]">Global Vision</Link>
          </div>

          <Link href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-black py-2 border-t border-zinc-300 font-bold">Contact</Link>
        </div>
      )}

      {/* 2. HERO SECTION */}
      <header className="relative h-[75vh] w-full overflow-hidden border-b border-zinc-200 bg-[#141414]">
        {/* Full Background Clean Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/frontpage.png" 
            alt="Hero Frontpage" 
            fill 
            className="object-cover opacity-85" 
            unoptimized 
          />
          {/* Subtle Dark Overlay to make text perfectly readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/40 to-[#111111]/30"></div>
        </div>
        
        {/* Content Box */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
          <div className="w-full max-w-[95vw] text-center pointer-events-auto text-white">
            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] font-medium leading-tight md:leading-[1.05] mb-4 tracking-tighter uppercase flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-x-4 drop-shadow-md">
              <span>Defining Modern</span>
              <span className="text-[#B5A48B] min-h-[40px] sm:min-h-0"> 
                <Typewriter
                  options={{
                    strings: ['Footwear.', 'Comfort.'],
                    autoStart: true,
                    loop: true,
                    delay: 150,
                  }}
                />
              </span>
            </div>
            <p className="text-white/60 text-[10px] md:text-xs mb-8 font-sans max-w-xl mx-auto leading-relaxed italic uppercase tracking-[0.3em] md:tracking-[0.4em] px-2">
              Curated collections for the urban explorer. <br className="hidden sm:block"/> 
              Discover the art of every step.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="#collections" className="border border-white/20 text-white px-8 md:px-10 py-3 text-[9px] md:text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-700 backdrop-blur-sm">
                Explore Collections
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 3. FEATURED ARRIVALS (Exact Uniform Image Scaling) */}
      <section id="collections" className="py-14 md:py-20 px-6 md:px-12 relative bg-[#F9F7F2] overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.06] py-12 select-none">
          <span className="text-[18vw] font-black tracking-tighter -ml-10 leading-none text-zinc-400">SEASONAL</span>
          <span className="text-[18vw] font-black tracking-tighter self-end -mr-10 leading-none text-zinc-400">FAVOURITES</span>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl mb-10 tracking-tighter uppercase text-zinc-800 font-medium text-center md:text-left">
            Featured Arrivals
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
            {[
              { id: 1, name: "THE SIGNATURE OXFORD", desc: "Vittorio & Co. Series", img: "/img1.png", slug: "/Collections/vittorio" },
              { id: 2, name: "THE SLAKE BOOTS", desc: "Rugged Elegance", img: "/img2.png", slug: "/Collections/slake" },
              { id: 3, name: "THE SIGNATURE CHELSEA", desc: "Digital Artisan", img: "/img3.png", slug: "/Collections/loafer" },
              { id: 4, name: "URBAN PERFORMANCE", desc: "Modern Movement", img: "/img4.png", slug: "/Collections/performance" },
              { id: 5, name: "COWBOY BOOTS", desc: "Classic Western Style", img: "/cow boy shoe.png", slug: "/Collections/boys" },
              { id: 6, name: "FORMAL SCHOOL SHOES", desc: "Durable All-Day Comfort", img: "/school shoe.png", slug: "/Collections/school" },
              { id: 7, name: "MOTOR BIKE RACING BOOTS", desc: "High-Performance Protection", img: "/motter bike.png", slug: "/Collections/Moters" },
              { id: 8, name: "VALENKI FELT BOOTS", desc: "Traditional Winter Warmth", img: "/valenki.png", slug: "/Collections/Valenki" }
            ].map((item) => (
              <Link href={item.slug} key={item.id} className="group cursor-pointer flex flex-col h-full">
                <div className="relative aspect-[3/4.5] w-full border border-zinc-200 transition-all duration-300 overflow-hidden bg-[#E8E4D9] flex flex-col justify-between">
                  {/* Uniform Image Height Container matching Cowboy Boot scale */}
                  <div className="relative w-full h-[68%] flex items-center justify-center p-6">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-contain scale-[0.95] group-hover:scale-[1.1] transition-transform duration-500 mix-blend-multiply z-10" 
                    />
                  </div>
                  <div className="relative w-full h-24 p-4 border-t border-white/40 bg-white/10 backdrop-blur-[2px] z-30 flex flex-col justify-center space-y-1">
                    <h3 className="font-bold text-[10px] md:text-[11px] tracking-[0.15em] text-zinc-900 uppercase truncate">
                      {item.name}
                    </h3>
                    <p className="text-[9px] md:text-[10px] text-zinc-600 font-light tracking-wide italic leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CRAFT & SUSTAINABILITY */}
      <section id="craft" className="bg-white py-14 md:py-20 px-6 md:px-12 relative z-20 overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-[#F9F7F2] -z-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
          <div className="relative flex items-center h-[320px] md:h-[500px] w-full">
            <div className="relative w-[80%] h-full z-10 shadow-xl overflow-hidden border-4 border-white ml-4 md:ml-12">
              <img 
                src="/pairs.png" 
                alt="pair" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[42%] flex flex-col gap-4 z-20">
              <div className="bg-[#D3CDC4]/95 backdrop-blur-md p-6 aspect-square flex flex-col justify-center items-center shadow-xl border border-white/50">
                <span className="text-2xl md:text-3xl mb-2">craft.jpg</span>
                <p className="text-[9px] md:text-[10px] uppercase font-black tracking-[0.2em] text-zinc-800 text-center leading-tight">Ethically <br/> Recycled</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:pl-8 text-center lg:text-left">
            <div className="space-y-3">
              <p className="text-[#B5A48B] text-xs font-bold tracking-[0.5em] uppercase">Commitment</p>
              <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase leading-[0.95] text-zinc-900">Craft & <br /> <span className="italic font-serif font-normal text-[#B5A48B]">Sustainability</span></h2>
            </div>
            <div className="w-16 h-[1px] bg-zinc-300 mx-auto lg:mx-0"></div>
            <div className="space-y-4">
              <p className="text-sm md:text-base font-medium tracking-tight text-zinc-800 uppercase">Handcrafted. <br /> <span className="text-zinc-400">Ethically Sourced.</span></p>
              <p className="text-zinc-500 font-sans leading-relaxed text-xs md:text-sm max-w-sm mx-auto lg:mx-0">Our materials are chosen to withstand the test of time while ensuring we make responsible choices for the planet and the people.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM JACKETS SECTION */}
      <section id="jackets" className="py-14 md:py-20 px-6 md:px-12 relative bg-[#EFECE6] text-zinc-900 overflow-hidden scroll-mt-20 border-t border-b border-zinc-200">
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.03] select-none py-12">
          <span className="text-[18vw] font-black tracking-tighter -ml-10 leading-none">PREMIUM</span>
          <span className="text-[18vw] font-black tracking-tighter self-end -mr-10 leading-none">OUTERWEAR</span>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-center md:text-left">
            <div>
              <span className="text-[#B5A48B] text-[10px] font-bold tracking-[0.5em] uppercase block mb-2">Signature Outerwear</span>
              <h2 className="text-2xl md:text-4xl tracking-tighter uppercase font-light text-zinc-900">
                Premium <span className="italic font-serif text-[#B5A48B]">Jackets</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
            {[
              { id: 1, name: "The Men's Leather Jackets", desc: "Classic Aviator Fit", img: "/jacket1.jpg", slug: "/Collections/bomber" },
              { id: 2, name: "The Cow Boy Jackets", desc: "Premium Velvet Touch", img: "/cow boy.jpg", slug: "/Collections/suede" },
              { id: 3, name: "HERITAGE LEATHER JACKET", desc: "Pure Distressed Grain", img: "/women jacket10.jpg", slug: "/Collections/leather" },
              { id: 4, name: "WINTER Cow Women Jackets SHELL", desc: "Thermal Insulated Shield", img: "/cow women2.jpg", slug: "/Collections/parka" }
            ].map((jacket) => (
              <Link href={jacket.slug} key={jacket.id} className="group cursor-pointer flex flex-col h-full">
                <div className="relative aspect-[3/4.5] w-full border border-zinc-300 transition-all duration-300 overflow-hidden bg-[#E3DFD5] shadow-sm group-hover:shadow-xl group-hover:border-[#B5A48B] flex flex-col justify-between">
                  <div className="relative w-full h-[68%] flex items-center justify-center p-6">
                    <img 
                      src={jacket.img} 
                      alt={jacket.name} 
                      className="w-full h-full object-contain scale-[0.95] group-hover:scale-[1.1] transition-transform duration-500 mix-blend-multiply z-10" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60";
                        (e.target as HTMLImageElement).className = "w-full h-full object-cover transition-transform duration-500";
                      }}
                    />
                  </div>
                  <div className="relative w-full h-24 p-4 bg-[#E3DFD5]/90 backdrop-blur-sm border-t border-white/60 z-30 flex flex-col justify-center space-y-1">
                    <h3 className="font-bold text-[10px] md:text-[11px] tracking-[0.15em] text-zinc-900 uppercase group-hover:text-[#B5A48B] transition-colors truncate">
                      {jacket.name}
                    </h3>
                    <p className="text-[9px] md:text-[10px] text-zinc-600 font-light tracking-wide italic leading-tight">
                      {jacket.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT US / HERITAGE SECTION */}
      <section id="about" className="bg-[#FDFCF9] py-14 md:py-20 px-6 md:px-12 relative overflow-hidden border-t border-zinc-100 scroll-mt-20">
        <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none">
          <h2 className="text-[20vw] font-black leading-none uppercase tracking-tighter text-zinc-400">About <br /> Us</h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          
          <div className="space-y-6 lg:pr-6 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase text-zinc-900 leading-[0.95]">
                Our <br /> <span className="italic font-serif text-[#B5A48B]">Heritage</span>
              </h2>
            </div>
            
            <div className="w-16 h-[1px] bg-zinc-300 mx-auto lg:mx-0"></div>
            
            <div className="space-y-4">
              <p className="text-zinc-800 leading-relaxed font-sans text-base md:text-lg italic font-medium">
                "We believe in the soul of the stitch and the endurance of fine leather."
              </p>
              <p className="text-zinc-500 leading-relaxed font-sans text-xs md:text-sm max-w-md mx-auto lg:mx-0">
                <span className="font-semibold text-zinc-800">EFSteps & Stitch & Sole</span> was born from a passion to master artisanal leather outerwear. Every jacket is tailored to withstand extreme elements while maintaining an unmatched luxury silhouette.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-100 text-left">
              <div className="space-y-1">
                <h4 className="text-[10px] font-black tracking-widest uppercase text-zinc-900">Master Tailoring</h4>
                <p className="text-[10px] text-zinc-400 leading-relaxed uppercase">Hand-stitched leather panels built for lifetime elegance.</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] font-black tracking-widest uppercase text-zinc-900">Full-Grain Hides</h4>
                <p className="text-[10px] text-zinc-400 leading-relaxed uppercase">Sourced from top-tier tanneries for supreme durability.</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 max-w-md mx-auto lg:max-w-none w-full">
            <div className="aspect-[3/4] w-full border-[8px] md:border-[12px] border-white shadow-2xl relative z-10 overflow-hidden bg-zinc-100">
              <Image 
                src="/jacket5.jpg" 
                alt="Signature Leather Jacket Crafting" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-1000" 
                unoptimized 
              />
            </div>
            
            <div className="absolute -bottom-4 -left-2 md:-bottom-8 md:-left-6 w-1/2 aspect-square border-4 md:border-8 border-white shadow-xl z-20 overflow-hidden bg-white">
              <Image 
                src="/jacket4.jpg" 
                alt="Premium Outerwear Detail" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-700" 
                unoptimized 
              />
            </div>
          </div>

        </div>
      </section>
      
      {/* 6. FOOTER */}
      <footer id="contact" className="bg-[#1A1A1A] text-white py-14 md:py-20 px-6 md:px-12 relative z-30 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl italic tracking-tight uppercase">Stay In Touch</h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
              <a href="https://www.instagram.com/elitefootsteps" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">
                INSTAGRAM
              </a>
              <a href="https://www.facebook.com/share/1B29PF7efZ/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">
                FACEBOOK
              </a>
              <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">
                WHATSAPP
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
              <p className="italic text-zinc-400 text-xs border-l border-[#B5A48B] pl-4 max-w-xs mx-auto lg:mx-0 text-center lg:text-left">
                "Every piece tells a story of craftsmanship and dedication."
              </p>
 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input name="name" type="text" placeholder="NAME" required className="bg-transparent border border-white/10 p-3 text-[10px] outline-none focus:border-[#B5A48B] transition-colors w-full" />
                <input name="email" type="email" placeholder="EMAIL" required className="bg-transparent border border-white/10 p-3 text-[10px] outline-none focus:border-[#B5A48B] transition-colors w-full" />
              </div>
              <textarea name="message" placeholder="MESSAGE" required className="bg-transparent border border-white/10 p-3 text-[10px] w-full h-24 outline-none resize-none focus:border-[#B5A48B] transition-colors"></textarea>
              <button 
                type="submit" 
                disabled={status === "SENDING"}
                className="bg-[#B5A48B] text-white px-10 py-3 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500 disabled:opacity-50 w-full"
              >
                {status === "SENDING" ? "Sending..." : status === "SUCCESS" ? "Message Sent!" : "Send Inquiry"}
              </button>
              {status === "SUCCESS" && <p className="text-[#B5A48B] text-[10px] tracking-widest uppercase mt-1 text-center lg:text-left">Success! We will get back to you soon.</p>}
              {status === "ERROR" && <p className="text-red-500 text-[10px] tracking-widest uppercase mt-1 text-center lg:text-left">Oops! Something went wrong.</p>}
            </form>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] text-zinc-600 uppercase tracking-widest text-center">
          <span>© 2026 Stitch & Sole</span>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}